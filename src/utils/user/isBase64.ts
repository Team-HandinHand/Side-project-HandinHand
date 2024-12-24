import { BASE_64_PATTERN } from '@/constants/user'

export const isBase64 = (s: string) => {
  return BASE_64_PATTERN.test(s)
}
