import { Tab } from '@/components'
// import { MediaList } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuthStateChange from '@/hooks/useAuthStateChange'

export const Bookmark = () => {
  const { user } = useAuthStateChange()
  const username = user?.nickname
  return (
    <MediaContainer>
      <Tab title={`${username}의 즐겨찾기 목록`} />
      {/* <MediaList movies={movies} isLoading={false}/> */}
    </MediaContainer>
  )
}
