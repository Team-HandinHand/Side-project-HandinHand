import { HomeMain, HomeNoAuth, ScrollToTop } from '@/components'
import useUserStore from '@/stores/useUserStore'

export const HomePage = () => {
  const { user } = useUserStore()
  return user ? (
    <>
      <HomeMain />
      <ScrollToTop />
    </>
  ) : (
    <HomeNoAuth />
  )
}
