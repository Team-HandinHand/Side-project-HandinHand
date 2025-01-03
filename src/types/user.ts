export interface User {
  userId?: string
  nickname: string
  email: string
  profilePicturePath: string
}

export interface UserState {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}
