const CORS_PROXIES = [
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

async function fetchJsonLdDirect(url) {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/ld+json; profile="https://linked.art/ns/v1/linked-art.json", application/ld+json, application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} (${res.statusText})`);
  }
  return res.json();
}

async function fetchJsonLdViaProxy(url) {
  let lastError = null;
  for (const makeProxyUrl of CORS_PROXIES) {
    try {
      const res = await fetch(makeProxyUrl(url));
      if (!res.ok) {
        lastError = new Error(`Proxy HTTP ${res.status}`);
        continue;
      }
      return await res.json();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error('Unable to fetch URL directly or via CORS proxy');
}

/**
 * Accepts either a raw JSON-LD string or an http(s) URL pointing to a Linked Art record.
 */
export async function loadLinkedArtInput(rawInput) {
  const trimmed = String(rawInput || '').trim();
  if (!trimmed) {
    throw new Error('Enter a Linked Art URL or paste JSON-LD.');
  }

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      return await fetchJsonLdDirect(trimmed);
    } catch (directErr) {
      try {
        return await fetchJsonLdViaProxy(trimmed);
      } catch {
        throw new Error(
          `Could not fetch "${trimmed}" (${directErr instanceof Error ? directErr.message : 'CORS or network error'}). Paste the JSON-LD directly instead.`
        );
      }
    }
  }

  return JSON.parse(trimmed);
}