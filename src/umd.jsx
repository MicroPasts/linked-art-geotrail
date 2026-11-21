import React from 'react';
import ReactDOM from 'react-dom/client';
import 'maplibre-gl/dist/maplibre-gl.css';
import './index.css';
import App from './App';

export function mount(target, props = {}) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) {
    throw new Error('LinkedArtGeoTrail.mount: target element was not found');
  }

  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
  return root;
}

export { App };
