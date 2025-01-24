import { useState } from 'react'
import { Back, MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import { useParams } from 'react-router-dom'
import { fetchMovieBookmarks } from '@/service/bookmark/fetchMovieBookmark'
import { fetchDramaBookmarks } from '@/service/bookmark/fetchDramaBookmark'
import { MediaResult } from '@/types/media'
import { useQuery } from '@tanstack/react-query'

export const Bookmark = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const { userId } = useParams()
  const isMyList = user?.userId === userId

  const { data: bookmarks = [], isLoading } = useQuery<MediaResult[]>({
    queryKey: ['bookmarks', userId, activeTab],
    queryFn: () =>
      activeTab === 'movie'
        ? fetchMovieBookmarks(userId || '')
        : fetchDramaBookmarks(userId || ''),
    enabled: !!userId
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
