import React, { useId, useState } from 'react';
import App from '../App';
import { EXAMPLE_PRESETS } from '../data/exampleRecords';

const isStandaloneDocs = typeof __DOCS_ONLY__ !== 'undefined' && __DOCS_ONLY__;

export function DocsApp() {
  const [selectedId, setSelectedId] = useState(EXAMPLE_PRESETS[0].id);
  const [examplesOpen, setExamplesOpen] = useState(
    () => typeof window === 'undefined' || !window.matchMedia?.('(max-width: 639px)').matches
  );
  const examplesId = useId();
  const current = EXAMPLE_PRESETS.find((p) => p.id === selectedId) || EXAMPLE_PRESETS[0];

  const embedSnippet = `<App
  record={myRecord}
  allowInput={${current.allowInput}}
  theme="${current.theme}"
/>`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-sky-400">
            GitHub Pages Examples & Docs
          </span>
          <h1 className="text-lg font-semibold mt-0.5">Linked Art GeoTrail</h1>
        </div>

        <button
          type="button"
          aria-expanded={examplesOpen}
          aria-controls={examplesId}
          onClick={() => setExamplesOpen((open) => !open)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          Examples: {current.title} {examplesOpen ? '−' : '+'}
        </button>
      </header>

      <div id={examplesId} hidden={!examplesOpen}>
        <div className="px-6 py-2.5 bg-slate-900 flex flex-wrap items-center gap-2">
          {EXAMPLE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              aria-pressed={preset.id === current.id}
              onClick={() => setSelectedId(preset.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                preset.id === current.id
                  ? 'bg-sky-600 border-sky-500 text-white'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {preset.title}
            </button>
          ))}
          {!isStandaloneDocs && (
            <a
              href="../index.html"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-700 text-slate-300 hover:border-sky-500"
            >
              Full App
            </a>
          )}
        </div>
        <section className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <p className="text-xs text-slate-400 lg:max-w-md">{current.description}</p>
          <code className="w-full lg:w-auto lg:min-w-[480px] lg:max-w-2xl shrink-0 text-[11px] font-mono bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sky-300 overflow-x-auto">
            {embedSnippet}
          </code>
        </section>
      </div>

      <div className="w-screen h-[700px] shrink-0">
        <App key={current.id} record={current.record} allowInput={current.allowInput} theme={current.theme} />
      </div>
    </div>
  );
}

export default DocsApp;