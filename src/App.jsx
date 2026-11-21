import React, { Suspense, lazy, useEffect, useState } from 'react';
import { enrichTrailWithGeocoding, extractLinkedArtTrail } from './lib/linkedArtExtractor';
import { loadLinkedArtInput } from './lib/linkedArtFetcher';
import { SAMPLE_LINKED_ART_RECORD } from './data/sampleRecord';
import { EventSidebar } from './components/EventSidebar';

const GeoArcMap = lazy(() =>
  import('./components/GeoArcMap').then((m) => ({ default: m.GeoArcMap }))
);

export function App({
  record = SAMPLE_LINKED_ART_RECORD,
  allowInput = true,
  theme: initialTheme = 'dark',
}) {
  const [theme, setTheme] = useState(initialTheme);
  const [trail, setTrail] = useState(() => extractLinkedArtTrail(record));
  const [activeLegIndex, setActiveLegIndex] = useState(0);
  const [legProgress, setLegProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [parseError, setParseError] = useState(null);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  useEffect(() => {
    const nextTrail = extractLinkedArtTrail(record || SAMPLE_LINKED_ART_RECORD);
    setTrail(nextTrail);
    setActiveLegIndex(0);
    setLegProgress(0);
    setIsPlaying(false);
    setParseError(null);
  }, [record]);

  useEffect(() => {
    let cancelled = false;
    const hasUnresolved = trail.events.some((ev) => !ev.coordinates);
    if (!hasUnresolved) return;

    enrichTrailWithGeocoding(trail).then((enriched) => {
      if (!cancelled && enriched !== trail) {
        setTrail(enriched);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [trail]);

  useEffect(() => {
    if (!isPlaying || trail.events.length < 2) return;

    let frameId;
    let lastTime = performance.now();
    const LEG_DURATION_MS = 2200;

    const tick = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      setLegProgress((prev) => {
        const next = prev + dt / LEG_DURATION_MS;
        if (next >= 1) {
          setActiveLegIndex((currIdx) => {
            if (currIdx < trail.events.length - 1) {
              return currIdx + 1;
            }
            setIsPlaying(false);
            return currIdx;
          });
          return activeLegIndex < trail.events.length - 1 ? 0 : 1;
        }
        return next;
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, activeLegIndex, trail.events.length]);

  const handleLoadInput = async (raw) => {
    setIsLoading(true);
    try {
      const doc = await loadLinkedArtInput(raw);
      const nextTrail = extractLinkedArtTrail(doc);
      setTrail(nextTrail);
      setActiveLegIndex(0);
      setLegProgress(0);
      setIsPlaying(false);
      setParseError(null);
      return true;
    } catch (err) {
      setParseError(err instanceof Error ? err.message : 'Unable to parse Linked Art input');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectStep = (idx) => {
    setIsPlaying(false);
    setActiveLegIndex(idx);
    setLegProgress(1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveLegIndex(0);
    setLegProgress(0);
  };

  const handleTogglePlay = () => {
    if (trail.events.length < 2) return;
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (activeLegIndex >= trail.events.length - 1 && legProgress >= 1) {
      setActiveLegIndex(0);
      setLegProgress(0);
    }
    setIsPlaying(true);
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-100'
      }`}
    >
      <EventSidebar
        trail={trail}
        activeLegIndex={activeLegIndex}
        isPlaying={isPlaying}
        isLoading={isLoading}
        allowInput={allowInput}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onTogglePlay={handleTogglePlay}
        onReset={handleReset}
        onSelectStep={handleSelectStep}
        onLoadInput={handleLoadInput}
      />

      <main className="relative flex-1 h-[52vh] lg:h-full">
        {parseError && (
          <div className="absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg">
            Load Error: {parseError}
          </div>
        )}
        <Suspense
          fallback={
            <div
              className={`w-full h-full flex items-center justify-center text-xs ${
                isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-950 text-slate-400'
              }`}
            >
              Loading map engine...
            </div>
          }
        >
          <GeoArcMap
            events={trail.events}
            activeLegIndex={activeLegIndex}
            legProgress={legProgress}
            onSelectEvent={handleSelectStep}
            theme={theme}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;