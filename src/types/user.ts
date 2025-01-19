export interface User {
  userId?: string
  nickname: string
  email: string
  profilePicturePath: string
}

export interface SupabaseUserData {
  email: string
  nickname: string
  profile_picture_path: string
}

export interface UserState {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}
