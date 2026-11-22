import React, { useEffect, useRef, useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  MapPin,
  Calendar,
  Users,
  FileJson,
  Image as ImageIcon,
  ExternalLink,
  Loader2,
  Sun,
  Moon,
} from 'lucide-react';
import { getLightweightImageUrl } from '../lib/imageOptimizer';
import { componentStyle } from '../lib/componentStyles';
import { safeHttpUrl } from '../lib/safeUrl';

const BADGE_STYLES = {
  dark: {
    production: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    discovery: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    provenance: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    exhibition: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    current_location: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    other: 'bg-slate-700/40 text-slate-300 border-slate-600',
  },
  light: {
    production: 'bg-amber-50 text-amber-800 border-amber-200',
    discovery: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    provenance: 'bg-sky-50 text-sky-800 border-sky-200',
    exhibition: 'bg-purple-50 text-purple-800 border-purple-200',
    current_location: 'bg-rose-50 text-rose-800 border-rose-200',
    other: 'bg-slate-100 text-slate-700 border-slate-200',
  },
};

export const EventSidebar = React.memo(function EventSidebar({
  trail,
  activeLegIndex,
  isPlaying,
  isLoading,
  allowInput = true,
  theme = 'dark',
  classNames,
  styles,
  onToggleTheme,
  onTogglePlay,
  onReset,
  onSelectStep,
  onLoadInput,
}) {
  const [showJsonInput, setShowJsonInput] = useState(false);
  const [rawInput, setRawInput] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);
  const eventCardRefs = useRef([]);

  const isLight = theme === 'light';
  const badges = BADGE_STYLES[isLight ? 'light' : 'dark'];

  useEffect(() => {
    eventCardRefs.current[activeLegIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [activeLegIndex, trail.events.length]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!rawInput.trim() || isLoading) return;
    const ok = await onLoadInput(rawInput);
    if (ok) {
      setShowJsonInput(false);
    }
  };

  const handleKeyDown = (e) => {
    const isUrl = /^https?:\/\/\S+$/i.test(rawInput.trim());
    if (e.key === 'Enter' && !e.shiftKey && isUrl) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <aside
      {...componentStyle('sidebar', classNames, styles)}
      className={`${componentStyle('sidebar', classNames, styles).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${
        isLight
          ? 'bg-white border-slate-200 text-slate-900'
          : 'bg-slate-900 border-slate-800 text-slate-100'
      }`}
    >
      <div
        {...componentStyle('sidebarHeader', classNames, styles)}
        className={`${componentStyle('sidebarHeader', classNames, styles).className} p-4 border-b ${isLight ? 'border-slate-200' : 'border-slate-800'}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <span
              className={`text-[11px] font-semibold uppercase tracking-widest ${
                isLight ? 'text-sky-700' : 'text-sky-400'
              }`}
            >
              Linked Art GeoTrail
            </span>
            <h1 className="text-base font-semibold leading-snug mt-0.5 truncate">
              {trail.objectLabel}
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {onToggleTheme && (
              <button
                {...componentStyle('themeButton', classNames, styles)}
                type="button"
                onClick={onToggleTheme}
                className={`${componentStyle('themeButton', classNames, styles).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
                title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
              </button>
            )}

            {allowInput && (
              <button
                {...componentStyle('loadButton', classNames, styles)}
                type="button"
                onClick={() => setShowJsonInput((v) => !v)}
                className={`${componentStyle('loadButton', classNames, styles).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FileJson className={`w-3.5 h-3.5 ${isLight ? 'text-sky-700' : 'text-sky-400'}`} />
                {showJsonInput ? 'Close' : 'Load URL / JSON'}
              </button>
            )}
          </div>
        </div>

        {trail.objectSummary && (!showJsonInput || !allowInput) && (
          <p className={`text-xs mt-2 line-clamp-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {trail.objectSummary}
          </p>
        )}

        {allowInput && showJsonInput && (
          <form
            {...componentStyle('loadForm', classNames, styles)}
            onSubmit={handleSubmit}
            className={`${componentStyle('loadForm', classNames, styles).className} mt-3 space-y-2`}
          >
            <textarea
              {...componentStyle('loadInput', classNames, styles)}
              aria-label="Linked Art URL or JSON-LD"
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Paste a Linked Art URL (https://...) or JSON-LD payload..."
              rows={4}
              className={`${componentStyle('loadInput', classNames, styles).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${
                isLight
                  ? 'bg-slate-50 border-slate-300 text-slate-900'
                  : 'bg-slate-950 border-slate-700 text-slate-200'
              }`}
            />
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              If direct loading fails, the URL is sent to public CORS proxies. Do not enter private URLs or tokens.
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Fetching & Parsing...
                </>
              ) : (
                'Fetch / Parse & Plot Events'
              )}
            </button>
          </form>
        )}
      </div>

      <div
        {...componentStyle('controls', classNames, styles)}
        className={`${componentStyle('controls', classNames, styles).className} px-4 py-3 border-b flex items-center gap-3 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
        }`}
      >
        <button
          {...componentStyle('playButton', classNames, styles)}
          type="button"
          onClick={onTogglePlay}
          className={`${componentStyle('playButton', classNames, styles).className} inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition`}
          title={isPlaying ? 'Pause animation' : 'Play trajectory'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          {...componentStyle('resetButton', classNames, styles)}
          type="button"
          onClick={onReset}
          className={`${componentStyle('resetButton', classNames, styles).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${
            isLight
              ? 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
          }`}
          title="Restart from origin"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1">
          <input
            {...componentStyle('timeline', classNames, styles)}
            type="range"
            min={0}
            max={Math.max(0, trail.events.length - 1)}
            value={activeLegIndex}
            onChange={(e) => onSelectStep(Number(e.target.value))}
            className={`${componentStyle('timeline', classNames, styles).className} w-full accent-sky-600 cursor-pointer`}
          />
          <div
            className={`flex justify-between text-[11px] mt-0.5 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            <span>
              Stop {activeLegIndex + 1} of {trail.events.length}
            </span>
            <span>{trail.events[activeLegIndex]?.dateDisplay}</span>
          </div>
        </div>
      </div>

      <div
        {...componentStyle('eventList', classNames, styles)}
        className={`${componentStyle('eventList', classNames, styles).className} flex-1 overflow-y-auto p-3 space-y-2.5`}
      >
        {trail.events.map((ev) => {
          const isCurrent = ev.index === activeLegIndex;
          const isVisited = ev.index <= activeLegIndex;

          return (
            <div
              {...componentStyle('eventCard', classNames, styles)}
              data-active={isCurrent}
              data-visited={isVisited}
              data-category={ev.category}
              ref={(node) => {
                eventCardRefs.current[ev.index] = node;
              }}
              key={ev.id}
              onClick={() => onSelectStep(ev.index)}
              className={`${componentStyle('eventCard', classNames, styles).className} rounded-xl p-3 border cursor-pointer transition ${
                isCurrent
                  ? isLight
                    ? 'bg-sky-50/70 border-sky-500 shadow-sm'
                    : 'bg-slate-800/90 border-sky-500/70 shadow-lg'
                  : isVisited
                    ? isLight
                      ? 'bg-white border-slate-200 hover:border-slate-300'
                      : 'bg-slate-900 border-slate-700/80 hover:border-slate-600'
                    : isLight
                      ? 'bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100'
                      : 'bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  {...componentStyle('eventBadge', classNames, styles)}
                  className={`${componentStyle('eventBadge', classNames, styles).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    badges[ev.category] || badges.other
                  }`}
                >
                  {ev.index + 1}. {ev.category.replace('_', ' ')}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  {ev.dateDisplay}
                </span>
              </div>

              <h2 className="text-sm font-semibold mt-1.5">{ev.title}</h2>

              <div
                className={`flex items-center gap-1.5 text-xs mt-1 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <MapPin
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isLight ? 'text-sky-700' : 'text-sky-400'
                  }`}
                />
                <span className="truncate">{ev.placeLabel}</span>
                {safeHttpUrl(ev.placeUri) && (
                  <a
                    href={safeHttpUrl(ev.placeUri)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-sky-500 ml-auto"
                    title="Open Place URI"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {ev.actors.length > 0 && (
                <div
                  className={`flex items-center gap-1.5 text-xs mt-1 ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{ev.actors.join(', ')}</span>
                </div>
              )}

              {ev.description && (
                <p
                  className={`text-xs mt-1.5 leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {ev.description}
                </p>
              )}

              {ev.images.length > 0 && (
                <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1">
                  {ev.images.map((img) => {
                    const thumbUrl = getLightweightImageUrl(img.url, { maxWidth: 240 });
                    return (
                      <button
                        key={img.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage(img.url);
                        }}
                        className={`group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${
                          isLight
                            ? 'border-slate-300 hover:border-sky-600'
                            : 'border-slate-700 hover:border-sky-400'
                        }`}
                      >
                        <img
                          src={thumbUrl}
                          alt={img.label}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            if (e.currentTarget.src !== img.url) {
                              e.currentTarget.src = img.url;
                            }
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                        <span className="absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200">
                          <ImageIcon className="w-2.5 h-2.5" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {trail.warnings.length > 0 && (
          <div
            {...componentStyle('warnings', classNames, styles)}
            className={`${componentStyle('warnings', classNames, styles).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${
              isLight
                ? 'bg-amber-50 border-amber-200 text-amber-900'
                : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
            }`}
          >
            <div className="font-semibold">Spatial Resolution Notes</div>
            {trail.warnings.map((w, i) => (
              <div key={i}>• {w}</div>
            ))}
          </div>
        )}
      </div>

      {lightboxImage && (
        <div
          {...componentStyle('lightbox', classNames, styles)}
          onClick={() => setLightboxImage(null)}
          className={`${componentStyle('lightbox', classNames, styles).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`}
        >
          <img
            src={lightboxImage}
            alt="Linked Art representation"
            className="max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
          />
        </div>
      )}
    </aside>
  );
});