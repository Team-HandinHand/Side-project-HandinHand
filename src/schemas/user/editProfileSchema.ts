import { z } from 'zod'
import {
  NICKNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH
} from '@/constants/user'
export const editProfileSchema = z
  .object({
    nickname: z
      .string()
      .max(NICKNAME_MAX_LENGTH, {
        message: `닉네임은 ${NICKNAME_MAX_LENGTH}자 이하로 입력해주세요`
      })
      .optional(),
    password: z
      .string()
      .max(PASSWORD_MAX_LENGTH, {
        message: `비밀번호는 ${PASSWORD_MAX_LENGTH}자 이하로 입력해주세요`
      })
      .optional(),
    confirmPassword: z.string().optional(),
    profilePicturePath: z.string().optional()
  })
  .refine(
    data => !data.password || data.password.length >= PASSWORD_MIN_LENGTH,
    {
      message: `비밀번호는 ${PASSWORD_MIN_LENGTH}자리 이상 입력해주세요`,
      path: ['password']
    }
  )
  .refine(
    data =>
      !data.password ||
      !data.confirmPassword ||
      data.password === data.confirmPassword,
    {
      message: '비밀번호가 일치하지 않습니다',
      path: ['confirmPassword']
    }
  )

export type TEditProfileFormValues = z.infer<typeof editProfileSchema>

export interface TEditProfileRequestValues {
  password?: string
  data: {
    nickname?: string
    profile_picture_path?: string | undefined
  }
}
