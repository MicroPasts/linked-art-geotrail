/**
 * Builds a smooth quadratic Bezier arc between [lon, lat] start and end coordinates.
 */
export function buildBezierArc(start, end, segments = 90, curvature = 0.22) {
  if (!Array.isArray(start) || !Array.isArray(end) || start.length < 2 || end.length < 2) {
    return [];
  }

  const [x0, y0] = start;
  const [x2, y2] = end;

  if (Math.abs(x2 - x0) < 1e-6 && Math.abs(y2 - y0) < 1e-6) {
    return [[x0, y0], [x2, y2]];
  }

  const midX = (x0 + x2) / 2;
  const midY = (y0 + y2) / 2;
  const dx = x2 - x0;
  const dy = y2 - y0;

  // Perpendicular offset lifted northwards where possible for natural arc elevation
  let nx = -dy * curvature;
  let ny = dx * curvature;
  if (ny < 0) {
    nx = -nx;
    ny = -ny;
  }

  const cx = midX + nx;
  const cy = midY + ny;

  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const inv = 1 - t;
    const x = inv * inv * x0 + 2 * inv * t * cx + t * t * x2;
    const y = inv * inv * y0 + 2 * inv * t * cy + t * t * y2;
    points.push([x, y]);
  }

  return points;
}

/**
 * Slices an array of [lon, lat] coordinates to `progress` in [0, 1],
 * returning the partial `trail` polyline and interpolated `head` coordinate.
 */
export function sliceArcAtProgress(coords, progress) {
  if (!Array.isArray(coords) || coords.length === 0) {
    return { trail: [], head: [0, 0] };
  }
  if (coords.length === 1) {
    return { trail: [coords[0]], head: coords[0] };
  }

  const t = Math.max(0, Math.min(1, Number(progress) || 0));
  if (t <= 0) {
    return { trail: [coords[0]], head: coords[0] };
  }
  if (t >= 1) {
    return { trail: coords, head: coords[coords.length - 1] };
  }

  const maxSegIndex = coords.length - 1;
  const exactPos = t * maxSegIndex;
  const segIndex = Math.min(Math.floor(exactPos), maxSegIndex - 1);
  const segFrac = exactPos - segIndex;

  const [x1, y1] = coords[segIndex];
  const [x2, y2] = coords[segIndex + 1];
  const head = [x1 + (x2 - x1) * segFrac, y1 + (y2 - y1) * segFrac];

  const trail = [...coords.slice(0, segIndex + 1), head];
  return { trail, head };
}