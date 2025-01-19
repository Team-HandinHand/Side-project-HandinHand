import { Tab } from '@/components'
import { useUserStore } from '@/stores/userStore'
// import { MediaList } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'

export const Bookmark = () => {
  const { user } = useUserStore()
  const username = user?.nickname
  return (
    <MediaContainer>
      <Tab title={`${username}의 즐겨찾기 목록`} />
      {/* <MediaList movies={movies} isLoading={false}/> */}
    </MediaContainer>
  )
}
