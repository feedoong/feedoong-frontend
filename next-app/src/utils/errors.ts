import type { AxiosError } from 'axios'

interface ErrorBody {
  status: string
  message: string
  exceptions: string[]
}

export const getAxiosError = (error: AxiosError<ErrorBody>) => {
  if (!error.response) {
    throw Error("response doesn't exist")
  }
  return error.response.data
}

export const isAxiosError = <T = ErrorBody>(
  error: unknown
): error is AxiosError<T> => {
  return (error as AxiosError<T>).response !== undefined
}
