import { z } from 'zod'
import { baseUserSchema } from './baseUserSchema'
import { NICKNAME_MAX_LENGTH } from '@/constants/user'
export const editProfileSchema = z
  .object({
    nickname: z.string().max(NICKNAME_MAX_LENGTH, {
      message: `닉네임은 ${NICKNAME_MAX_LENGTH}자 이하로 입력해주세요`
    }),
    password: baseUserSchema.shape.password.optional(),
    confirmPassword: baseUserSchema.shape.confirmPassword.optional(),
    profilePicturePath: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword']
  })

export type TEditProfileFormValues = z.infer<typeof editProfileSchema>

export interface TEditProfileRequestValues {
  password?: string
  data: {
    nickname?: string
    profile_picture_path?: string | undefined
  }
}
