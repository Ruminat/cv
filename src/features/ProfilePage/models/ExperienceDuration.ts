const monthOffset = 1

export function getCompletedYears(startDate: Date, asOfDate: Date) {
  const yearDelta = asOfDate.getFullYear() - startDate.getFullYear()
  const monthDelta = asOfDate.getMonth() - startDate.getMonth()
  const dayDelta = asOfDate.getDate() - startDate.getDate()
  const anniversaryReached =
    monthDelta > 0 || (monthDelta === 0 && dayDelta >= 0)

  return Math.max(0, yearDelta - (anniversaryReached ? 0 : monthOffset))
}

export function formatExperienceDuration(startDate: Date, asOfDate: Date) {
  const completedYears = getCompletedYears(startDate, asOfDate)

  if (completedYears === 0) {
    return 'Less than 1 year'
  }

  if (completedYears === 1) {
    return '1+ year'
  }

  return `${String(completedYears)}+ years`
}
