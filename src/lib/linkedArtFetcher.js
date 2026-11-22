import { safeHttpUrl } from './safeUrl';

const CORS_PROXIES = [
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

async function fetchJsonLdDirect(url) {
  const res = await fetch(url, {
    credentials: 'omit',
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
      const res = await fetch(makeProxyUrl(url), { credentials: 'omit' });
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

  let doc;
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) {
    const url = safeHttpUrl(trimmed);
    if (!url) {
      throw new Error('Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.');
    }
    try {
      doc = await fetchJsonLdDirect(url);
    } catch (directErr) {
      try {
        doc = await fetchJsonLdViaProxy(url);
      } catch {
        throw new Error(
          `Could not fetch "${url}" (${directErr instanceof Error ? directErr.message : 'CORS or network error'}). Paste the JSON-LD directly instead.`
        );
      }
    }
  } else {
    doc = JSON.parse(trimmed);
  }

  if (!doc || typeof doc !== 'object' || Array.isArray(doc) ||
      typeof doc.id !== 'string' || !doc.id.trim() ||
      typeof doc.type !== 'string' || !doc.type.trim()) {
    throw new Error('Expected a Linked Art JSON object with non-empty id and type fields.');
  }
  return doc;
}
