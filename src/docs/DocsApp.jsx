import React, { useState } from 'react';
import App from '../App';
import { EXAMPLE_PRESETS } from '../data/exampleRecords';

export function DocsApp() {
  const [selectedId, setSelectedId] = useState(EXAMPLE_PRESETS[0].id);
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

        <div className="flex flex-wrap items-center gap-2">
          {EXAMPLE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
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
          <a
            href="../"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-700 text-slate-300 hover:border-sky-500"
          >
            Full App
          </a>
        </div>
      </header>

      <section className="px-6 py-3 bg-slate-900/60 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <p className="text-xs text-slate-400">{current.description}</p>
        <pre className="text-[11px] font-mono bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sky-300 overflow-x-auto">
          {embedSnippet}
        </pre>
      </section>

      <div className="flex-1 min-h-[640px]">
        <App
          key={current.id}
          record={current.record}
          allowInput={current.allowInput}
          theme={current.theme}
        />
      </div>
    </div>
  );
}

export default DocsApp;