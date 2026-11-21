/**
 * Computes a quadratic Bezier arc in geographic space between two [lng, lat] points.
 */
export function buildBezierArc(start, end, steps = 80, curvature = 0.22) {
  const [x1, y1] = start;
  const [x2, y2] = end;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);

  if (dist < 1e-6) {
    return [start, end];
  }

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const nx = -dy / dist;
  const ny = dx / dist;
  const sign = ny >= 0 ? 1 : -1;

  const ctrlX = midX + nx * dist * curvature * sign;
  const ctrlY = midY + ny * dist * curvature * sign;

  const points = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const inv = 1 - t;
    const lng = inv * inv * x1 + 2 * inv * t * ctrlX + t * t * x2;
    const lat = inv * inv * y1 + 2 * inv * t * ctrlY + t * t * y2;
    points.push([lng, lat]);
  }
  return points;
}

/**
 * Slices a coordinate array up to normalized progress `t` in [0, 1] and returns
 * the partial trail plus the interpolated leading head coordinate.
 */
export function sliceArcAtProgress(arcCoords, progress) {
  const clamped = Math.max(0, Math.min(1, progress));
  if (arcCoords.length === 0) {
    return { trail: [], head: [0, 0] };
  }
  if (arcCoords.length === 1 || clamped <= 0) {
    return { trail: [arcCoords[0]], head: arcCoords[0] };
  }
  if (clamped >= 1) {
    return { trail: arcCoords, head: arcCoords[arcCoords.length - 1] };
  }

  const exactIndex = clamped * (arcCoords.length - 1);
  const lowIdx = Math.floor(exactIndex);
  const highIdx = Math.min(arcCoords.length - 1, lowIdx + 1);
  const frac = exactIndex - lowIdx;

  const [x1, y1] = arcCoords[lowIdx];
  const [x2, y2] = arcCoords[highIdx];
  const interp = [x1 + (x2 - x1) * frac, y1 + (y2 - y1) * frac];

  const trail = arcCoords.slice(0, lowIdx + 1);
  trail.push(interp);

  return { trail, head: interp };
}