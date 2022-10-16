import dayjs from 'dayjs'

export const getFormatDate = (
  date: Parameters<typeof dayjs>[0],
  format: Parameters<ReturnType<typeof dayjs>['format']>[0]
) => {
  return dayjs(date).format(format)
}
