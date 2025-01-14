import { Tab } from '@/components'
// import { MediaList } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'

export const Bookmark = () => {
  const { user } = useAuth()
  const username = user?.nickname
  return (
    <MediaContainer>
      <Tab title={`${username}의 즐겨찾기 목록`} />
      {/* <MediaList movies={movies} isLoading={false}/> */}
    </MediaContainer>
  )
}
