import React, { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { enrichTrailWithGeocoding, extractLinkedArtTrail } from './lib/linkedArtExtractor';
import { legDuration, LONG_LEG_PAUSE_MS, MIN_LEG_DURATION_MS } from './lib/animationTiming';
import { loadLinkedArtInput } from './lib/linkedArtFetcher';
import { SAMPLE_LINKED_ART_RECORD } from './data/sampleRecord';
import { EventSidebar } from './components/EventSidebar';
import { componentStyle } from './lib/componentStyles';

const GeoArcMap = lazy(() =>
  import('./components/GeoArcMap').then((m) => ({ default: m.GeoArcMap }))
);

const ANIMATION_FRAME_MS = 1000 / 30;

export function App({
  record = SAMPLE_LINKED_ART_RECORD,
  allowInput = true,
  theme: initialTheme = 'dark',
  classNames,
  styles,
  mapStyles,
  mapAppearance,
}) {
  const [theme, setTheme] = useState(initialTheme);
  const [trail, setTrail] = useState(() => extractLinkedArtTrail(record));
  const [activeLegIndex, setActiveLegIndex] = useState(0);
  const [legProgress, setLegProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [parseError, setParseError] = useState(null);
  const arrivalPauseRef = useRef(0);
  const legDurations = useMemo(
    () => trail.events.map((_, index) => legDuration(trail.events, index)),
    [trail.events]
  );

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  useEffect(() => {
    const nextTrail = extractLinkedArtTrail(record || SAMPLE_LINKED_ART_RECORD);
    arrivalPauseRef.current = 0;
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
    let lastRenderTime = lastTime;
    let elapsedMs = 0;
    let currentIndex = activeLegIndex;
    let progress = legProgress;

    const tick = (now) => {
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;
      elapsedMs += dt;

      if (now - lastRenderTime >= ANIMATION_FRAME_MS) {
        lastRenderTime = now;
        if (arrivalPauseRef.current > 0) {
          arrivalPauseRef.current = Math.max(0, arrivalPauseRef.current - elapsedMs);
          elapsedMs = 0;
          frameId = requestAnimationFrame(tick);
          return;
        }
        progress += elapsedMs / legDurations[currentIndex];
        elapsedMs = 0;
        if (progress >= 1) {
          const completedDuration = legDurations[currentIndex];
          currentIndex += 1;
          setActiveLegIndex(currentIndex);
          progress = 0;
          if (currentIndex >= trail.events.length - 1) {
            setLegProgress(progress);
            setIsPlaying(false);
            return;
          }
          if (completedDuration > MIN_LEG_DURATION_MS) {
            arrivalPauseRef.current = LONG_LEG_PAUSE_MS;
          }
        }
        setLegProgress(progress);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, trail.events.length, legDurations]);

  const handleLoadInput = useCallback(async (raw) => {
    setIsLoading(true);
    setParseError(null);
    try {
      const doc = await loadLinkedArtInput(raw);
      const nextTrail = extractLinkedArtTrail(doc);
      arrivalPauseRef.current = 0;
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
  }, []);

  const handleSelectStep = useCallback((idx) => {
    arrivalPauseRef.current = 0;
    setIsPlaying(false);
    setActiveLegIndex(idx);
    setLegProgress(0);
  }, []);

  const handleReset = useCallback(() => {
    arrivalPauseRef.current = 0;
    setIsPlaying(false);
    setActiveLegIndex(0);
    setLegProgress(0);
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (trail.events.length < 2) return;
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (activeLegIndex >= trail.events.length - 1) {
      arrivalPauseRef.current = 0;
      setActiveLegIndex(0);
      setLegProgress(0);
    }
    setIsPlaying(true);
  }, [activeLegIndex, isPlaying, trail.events.length]);

  const isLight = theme === 'light';

  return (
    <div
      {...componentStyle('root', classNames, styles)}
      className={`${componentStyle('root', classNames, styles).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-100'
      }`}
      data-theme={theme}
    >
      <EventSidebar
        trail={trail}
        activeLegIndex={activeLegIndex}
        isPlaying={isPlaying}
        isLoading={isLoading}
        allowInput={allowInput}
        theme={theme}
        classNames={classNames}
        styles={styles}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onTogglePlay={handleTogglePlay}
        onReset={handleReset}
        onSelectStep={handleSelectStep}
        onLoadInput={handleLoadInput}
      />

      <main
        {...componentStyle('mapContainer', classNames, styles)}
        className={`${componentStyle('mapContainer', classNames, styles).className} relative flex-1 h-[52vh] lg:h-full`}
      >
        {parseError && (
          <div role="alert" className="absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg">
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
            isPlaying={isPlaying}
            onSelectEvent={handleSelectStep}
            theme={theme}
            classNames={classNames}
            styles={styles}
            mapStyles={mapStyles}
            mapAppearance={mapAppearance}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;