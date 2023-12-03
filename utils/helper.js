export function toHoursAndMinutes(totalMinutes) {
  const minutes = Number(totalMinutes) % 60;
  const hours = Math.floor(Number(totalMinutes) / 60);

  return `${hours}j ${minutes}m`;
}
