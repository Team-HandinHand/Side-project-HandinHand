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
  .superRefine((data, ctx) => {
    // password 길이 체크
    if (data.password && data.password.length < PASSWORD_MIN_LENGTH) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `비밀번호는 ${PASSWORD_MIN_LENGTH}자리 이상 입력해주세요`,
        path: ['password']
      })
    }

    // password가 있을 때 confirmPassword 체크
    if (data.password && !data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호를 한번 더 입력해주세요',
        path: ['confirmPassword']
      })
    }

    // password와 confirmPassword 일치 여부 체크
    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다',
        path: ['confirmPassword']
      })
    }
  })

export type TEditProfileFormValues = z.infer<typeof editProfileSchema>

export interface TEditProfileRequestValues {
  password?: string
  data: {
    nickname?: string
    profile_picture_path?: string | undefined
  }
}
