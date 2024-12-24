import { create } from 'zustand'
import { TUser } from '@/types/user'

// Zustand store 생성
export const useUserStore = create<{
  user: TUser | null
  setUser: (user: TUser) => void
  clearUser: () => void
}>(set => ({
  user: null,
  setUser: user => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null }))
}))
