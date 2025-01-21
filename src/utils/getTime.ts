export const formatDateWithDateObject = (dateString: string) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0] // '2025-01-21'
}
