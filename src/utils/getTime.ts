export const formatDateWithDateObject = (dateString: string) => {
  if (!dateString) {
    return '데이터를 확인해주세요.'
  }
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}
