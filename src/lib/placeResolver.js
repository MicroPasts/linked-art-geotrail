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
  'malibu, california': [-118.6923, 34.0381],
  malibu: [-118.6923, 34.0381],
  'los angeles': [-118.4741, 34.078],
  'los angeles, california': [-118.4741, 34.078],
  'j. paul getty museum, los angeles, california': [-118.4741, 34.078],
  'getty research institute, los angeles': [-118.4754, 34.0772],
  'new york': [-73.9632, 40.7794],
  'new york, united states': [-73.9632, 40.7794],
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
 * Synchronous lookup against built-in heritage gazetteer + localStorage cache.
 */
export function lookupCachedCoordinates(placeName) {
  if (!placeName || typeof placeName !== 'string') return null;
  const normalized = placeName.trim().toLowerCase();

  if (BUILTIN_GAZETTEER[normalized]) {
    return BUILTIN_GAZETTEER[normalized];
  }

  const cache = readCache();
  if (Array.isArray(cache[normalized]) && cache[normalized].length === 2) {
    return cache[normalized];
  }

  // Substring match for strings like "Landscapes of Myth at Getty Research Institute, Los Angeles"
  for (const [key, coords] of Object.entries(BUILTIN_GAZETTEER)) {
    if (normalized.includes(key)) {
      return coords;
    }
  }

  return null;
}

/**
 * Asynchronous geocoding fallback via OpenStreetMap Nominatim for any place name
 * not in the built-in gazetteer or cache.
 */
export async function geocodePlaceName(placeName) {
  const existing = lookupCachedCoordinates(placeName);
  if (existing) return existing;

  const cleaned = placeName.replace(/^Storage\s*[—-]\s*/i, '').trim();
  if (!cleaned) return null;

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      cleaned
    )}`;
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;

    const data = await res.json();
    if (Array.isArray(data) && data[0]?.lon && data[0]?.lat) {
      const coords = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
      if (Number.isFinite(coords[0]) && Number.isFinite(coords[1])) {
        const cache = readCache();
        cache[placeName.trim().toLowerCase()] = coords;
        writeCache(cache);
        return coords;
      }
    }
  } catch {
    // Network or CORS fallback silently ignored
  }

  return null;
}