export const MIN_LEG_DURATION_MS = 4500;
export const LONG_LEG_PAUSE_MS = 2000;
const MAX_LEG_DURATION_MS = 18000;
const BASE_DISTANCE_KM = 2000;
const EARTH_RADIUS_KM = 6371;

function hasCoordinates(event) {
  return Array.isArray(event?.coordinates) &&
    event.coordinates.length === 2 && event.coordinates.every(Number.isFinite);
}

export function legDuration(events, index) {
  const destination = events[index + 1];
  if (!hasCoordinates(destination)) return MIN_LEG_DURATION_MS;

  let originIndex = index;
  while (originIndex >= 0 && !hasCoordinates(events[originIndex])) originIndex--;
  if (originIndex < 0) return MIN_LEG_DURATION_MS;

  const [lon1, lat1] = events[originIndex].coordinates.map((value) => value * Math.PI / 180);
  const [lon2, lat2] = destination.coordinates.map((value) => value * Math.PI / 180);
  const haversine = Math.sin((lat2 - lat1) / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2;
  const distance = 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(Math.min(1, Math.max(0, haversine))));
  return Math.min(MAX_LEG_DURATION_MS, MIN_LEG_DURATION_MS + Math.max(0, distance - BASE_DISTANCE_KM));
}
