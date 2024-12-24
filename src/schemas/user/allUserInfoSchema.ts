import { z } from 'zod'
import { baseUserSchema } from './baseUserSchema'

export const allUserInfoSchema = baseUserSchema.refine(
  data => data.password === data.confirmPassword,
  {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword']
  }
)

export type TAllUserFormValues = z.infer<typeof allUserInfoSchema>
