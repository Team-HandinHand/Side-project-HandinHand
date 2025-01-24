import { HomeMain, HomeNoAuth } from '@/components'
import { ScrollToTop } from '@/components/common-ui/scroll-button'
import useAuth from '@/hooks/useAuth'

export const HomePage = () => {
  const { user } = useAuth()
  return user ? (
    <>
      <HomeMain />
      <ScrollToTop />
    </>
  ) : (
    <HomeNoAuth />
  )
}
