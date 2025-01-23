import { Session } from '@supabase/supabase-js'
import { ReactNode } from 'react'

export interface AuthContextType {
  session: Session | null
  user: User | null
}

export interface AuthProviderProps {
  children: ReactNode
}

export interface User {
  userId: string
  email: string
  nickname: string
  profilePicturePath: string
}

export interface SupabaseUserData {
  email?: string
  nickname?: string
  profile_picture_path: string
}

export interface CheckDuplicateProps {
  field: 'nickname' | 'email'
  value: string
}
