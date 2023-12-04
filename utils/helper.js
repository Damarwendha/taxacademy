export function toHoursAndMinutes(totalMinutes) {
  const minutes = Number(totalMinutes) % 60;
  const hours = Math.floor(Number(totalMinutes) / 60);

  const displayHours = hours !== 0 ? hours + "j" : "";

  return `${displayHours} ${minutes}m`;
}
