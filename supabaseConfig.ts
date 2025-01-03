import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // 브라우저 종료 후에도 세션 유지 (localStorage에 저장)
    autoRefreshToken: true, // access token이 만료되면 자동으로 refresh token으로 갱신
    detectSessionInUrl: true // URL의 hash fragment에서 세션 정보 감지 (OAuth 리다이렉트에 사용)
  }
})
