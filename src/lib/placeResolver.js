const BUILTIN_GAZETTEER = {
  greece: [21.8243, 39.0742],
  athens: [23.7275, 37.9838],
  'athens, greece': [23.7275, 37.9838],
  rome: [12.4964, 41.9028],
  'rome, italy': [12.4964, 41.9028],
  london: [-0.1276, 51.5072],
  'london, united kingdom': [-0.1276, 51.5072],
  'london, england': [-0.1276, 51.5072],
  paris: [2.3522, 48.8566],
  'paris, france': [2.3522, 48.8566],
  versailles: [2.1204, 48.8049],
  'versailles, france': [2.1204, 48.8049],
  'château de versailles': [2.1204, 48.8049],
  'malibu, california': [-118.6923, 34.0381],
  malibu: [-118.6923, 34.0381],
  'los angeles': [-118.4741, 34.078],
  'los angeles, california': [-118.4741, 34.078],
  'j. paul getty museum, los angeles, california': [-118.4741, 34.078],
  'getty research institute, los angeles': [-118.4754, 34.0772],
  'new york': [-73.9632, 40.7794],
  'new york, united states': [-73.9632, 40.7794],
  munich: [11.582, 48.1351],
  'münchen': [11.582, 48.1351],
  'the hague': [4.3007, 52.0705],
  mauritshuis: [4.3045, 52.0804],
  cambridge: [0.1218, 52.2053],
  oxford: [-1.2577, 51.752],
  edinburgh: [-3.1883, 55.9533],
  florence: [11.2558, 43.7696],
  venice: [12.3155, 45.4408],
  berlin: [13.405, 52.52],
  amsterdam: [4.9041, 52.3676],
  madrid: [-3.7038, 40.4168],
  cairo: [31.2357, 30.0444],
};

const CACHE_KEY = 'linked-art-geotrail:geocode-cache:v1';
const failedSessionQueries = new Set();
let queuePromise = Promise.resolve();
let lastRequestAt = 0;

function readCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Extracts a cleaner geographic query from exhibition/event strings like
 * "Exhibition Title at Mauritshuis, The Hague" -> "Mauritshuis, The Hague".
 */
export function refinePlaceQuery(placeName) {
  if (!placeName || typeof placeName !== 'string') return '';
  let candidate = placeName.replace(/^Storage\s*[—-]\s*/i, '').trim();

  const atMatch = candidate.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (atMatch && atMatch[1]) {
    candidate = atMatch[1].trim();
  } else if (candidate.length > 65) {
    // Take trailing comma-separated location segments if string is a long title
    const parts = candidate.split(',').map((s) => s.trim()).filter(Boolean);
    if (parts.length >= 2) {
      candidate = parts.slice(-2).join(', ');
    } else {
      candidate = parts[0].slice(0, 65);
    }
  }

  return candidate;
}

export function lookupCachedCoordinates(placeName) {
  if (!placeName || typeof placeName !== 'string') return null;

  const candidates = [placeName, refinePlaceQuery(placeName)]
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  const cache = readCache();

  for (const norm of candidates) {
    if (BUILTIN_GAZETTEER[norm]) {
      return BUILTIN_GAZETTEER[norm];
    }
    if (Array.isArray(cache[norm]) && cache[norm].length === 2) {
      return cache[norm];
    }
  }

  for (const norm of candidates) {
    for (const [key, coords] of Object.entries(BUILTIN_GAZETTEER)) {
      if (norm.includes(key)) {
        return coords;
      }
    }
  }

  return null;
}

function enqueueNominatim(task) {
  const run = queuePromise.then(async () => {
    const elapsed = Date.now() - lastRequestAt;
    if (elapsed < 1100) {
      await new Promise((r) => setTimeout(r, 1100 - elapsed));
    }
    lastRequestAt = Date.now();
    return task();
  });

  queuePromise = run.catch(() => null);
  return run;
}

export async function geocodePlaceName(placeName) {
  const existing = lookupCachedCoordinates(placeName);
  if (existing) return existing;

  const refined = refinePlaceQuery(placeName);
  // Open-Meteo geocodes place/city names best when given a clean place/city token
  const parts = refined.split(',').map((s) => s.trim()).filter(Boolean);
  const searchTerm = parts.length > 1 ? parts[parts.length - 1] : refined;
  const normKey = refined.toLowerCase();

  if (!searchTerm || failedSessionQueries.has(normKey)) {
    return null;
  }

  return enqueueNominatim(async () => {
    const cacheAfterWait = readCache();
    if (Array.isArray(cacheAfterWait[normKey]) && cacheAfterWait[normKey].length === 2) {
      return cacheAfterWait[normKey];
    }

    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        searchTerm
      )}&count=1&language=en&format=json`;
      const res = await fetch(url);
      if (!res.ok) {
        failedSessionQueries.add(normKey);
        return null;
      }

      const data = await res.json();
      const hit = Array.isArray(data?.results) ? data.results[0] : null;
      if (hit && Number.isFinite(hit.longitude) && Number.isFinite(hit.latitude)) {
        const coords = [hit.longitude, hit.latitude];
        const nextCache = readCache();
        nextCache[normKey] = coords;
        writeCache(nextCache);
        return coords;
      }

      failedSessionQueries.add(normKey);
    } catch {
      failedSessionQueries.add(normKey);
    }

    return null;
  });
}
