const optimizedUrlCache = new Map();

/**
 * Rewrites IIIF Image API size parameters (`/full/.../`) to a bounded size
 * such as `!400,300` so the server returns a lighter image.
 */
export function optimizeIiifImageUrl(url, maxDim = 400) {
  if (!url || typeof url !== 'string') return url;

  // Match standard IIIF Image API pattern: /{region}/{size}/{rotation}/{quality}.{format}
  const iiifPattern =
    /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;

  if (iiifPattern.test(url)) {
    return url.replace(
      iiifPattern,
      (_match, prefix, _idPart, region, rotation, quality, _ext, query = '') => {
        const safeRegion = region || 'full';
        const safeRot = rotation || '0';
        const safeQual = quality || 'default';
        return `${prefix}/${safeRegion}/!${maxDim},${maxDim}/${safeRot}/${safeQual}.jpg${query}`;
      }
    );
  }

  // Simpler fallback when `/full/full/0/default.jpg` or `/full/max/0/default.jpg` appears in path
  if (/\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(url)) {
    return url.replace(
      /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
      `/full/!${maxDim},${maxDim}/0/default.jpg`
    );
  }

  return url;
}

/**
 * Returns a lightweight URL immediately (using IIIF sizing when available) and
 * optionally downscales/re-encodes via an offscreen canvas if CORS allows.
 */
export function getLightweightImageUrl(url, { maxWidth = 480, quality = 0.72 } = {}) {
  if (!url || typeof url !== 'string') return '';
  const cacheKey = `${url}::${maxWidth}::${quality}`;
  if (optimizedUrlCache.has(cacheKey)) {
    return optimizedUrlCache.get(cacheKey);
  }

  const candidate = optimizeIiifImageUrl(url, maxWidth);
  optimizedUrlCache.set(cacheKey, candidate);
  return candidate;
}

/**
 * Compresses an already-loaded image element into a lighter WebP/JPEG blob URL
 * when same-origin or CORS-enabled, returning null if tainted or unsupported.
 */
export function compressLoadedImageToBlobUrl(imgEl, { maxWidth = 480, quality = 0.72 } = {}) {
  if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return null;

  const scale = Math.min(1, maxWidth / imgEl.naturalWidth);
  const targetW = Math.max(1, Math.round(imgEl.naturalWidth * scale));
  const targetH = Math.max(1, Math.round(imgEl.naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  try {
    ctx.drawImage(imgEl, 0, 0, targetW, targetH);
    const mime = 'image/webp';
    const dataUrl = canvas.toDataURL(mime, quality);
    if (!dataUrl.startsWith(`data:${mime}`)) {
      return canvas.toDataURL('image/jpeg', quality);
    }
    return dataUrl;
  } catch {
    // Tainted canvas (missing CORS header on remote image host) -> keep original URL
    return null;
  }
}