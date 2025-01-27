import { Back, MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import { useParams } from 'react-router-dom'
import { fetchMovieBookmarks } from '@/service/bookmark/fetchMovieBookmark'
import { fetchDramaBookmarks } from '@/service/bookmark/fetchDramaBookmark'
import { MediaResult } from '@/types/media'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import queryClient from '@/lib/queryClient'

const parseTabType = (value: string | null): 'movie' | 'tv' | null => {
  if (value === 'movie' || value === 'tv') return value
  return null
}

export const Bookmark = () => {
  const { user } = useAuth()
  const { userId } = useParams()
  const isMyList = user?.userId === userId

  const [activeTab, setActiveTab] = useQueryState<'movie' | 'tv'>('type', {
    parse: parseTabType,
    defaultValue: 'movie'
  })

  const { data: bookmarks = [], isLoading } = useQuery<MediaResult[]>({
    queryKey: ['bookmarks', userId, activeTab],
    queryFn: () =>
      activeTab === 'movie'
        ? fetchMovieBookmarks(userId || '')
        : fetchDramaBookmarks(userId || ''),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
    placeholderData: () =>
      queryClient.getQueryData(['ookmarks', userId, activeTab]) as MediaResult[]
  })
  return (
    <>
      {!isMyList && <Back />}
      <MediaContainer $isMyList={isMyList}>
        <div>
          <Tab
            title={
              isMyList
                ? `${user?.nickname}의 즐겨찾기 목록`
                : `${userId} 님의 즐겨찾기 목록`
            }
            onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
          />
          <MediaList
            medias={bookmarks}
            isLoading={isLoading}
          />
        </div>
      </MediaContainer>
    </>
  )
}
