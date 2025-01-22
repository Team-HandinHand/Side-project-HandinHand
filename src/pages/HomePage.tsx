import { HomeMain, HomeNoAuth } from '@/components'
import useAuth from '@/hooks/useAuth'

export const HomePage = () => {
  const { user } = useAuth()
  return user ? <HomeMain /> : <HomeNoAuth />
}
