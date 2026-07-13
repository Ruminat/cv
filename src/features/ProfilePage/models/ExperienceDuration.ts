const monthOffset = 1;

export function getCompletedYears(startDate: Date, asOfDate: Date) {
  const yearDelta = asOfDate.getFullYear() - startDate.getFullYear();
  const monthDelta = asOfDate.getMonth() - startDate.getMonth();
  const dayDelta = asOfDate.getDate() - startDate.getDate();
  const anniversaryReached =
    monthDelta > 0 || (monthDelta === 0 && dayDelta >= 0);

  return Math.max(0, yearDelta - (anniversaryReached ? 0 : monthOffset));
}
