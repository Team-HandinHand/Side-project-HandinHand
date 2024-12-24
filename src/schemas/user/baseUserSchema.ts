import { z } from 'zod'
import { PASSWORD_MIN_LENGTH, DEFAULT_PROFILE_PATH } from '@/constants/user'
import { isBase64 } from '@/utils/user/isBase64'

export const baseUserSchema = z.object({
  nickname: z.string().min(1, { message: '닉네임을 입력해주세요' }),
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요' })
    .email({ message: '유효한 이메일을 입력해주세요' }),
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요' })
    .min(
      PASSWORD_MIN_LENGTH,
      `비밀번호는 ${PASSWORD_MIN_LENGTH}자리 이상 입력해주세요`
    ),
  confirmPassword: z
    .string()
    .min(1, { message: '비밀번호를 한 번 더 입력해주세요.' }),
  profilePicturePath: z
    .string()
    .refine(path => path === DEFAULT_PROFILE_PATH || isBase64(path), {
      message: '유효한 프로필 사진(Base64)이 아닙니다.'
    })
})
