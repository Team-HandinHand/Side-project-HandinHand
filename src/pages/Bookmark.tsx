import { useState } from 'react'
import { Back, MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import useFetchBookmark from '@/hooks/queries/useFetchBookmark'
import { useParams } from 'react-router-dom'

export const Bookmark = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const { userId } = useParams()
  const isMyList = user?.userId === userId

  const { data: bookmarks = [], isLoading } = useFetchBookmark(
    user?.userId,
    activeTab
  )
  return (
    <>
      {!isMyList && <Back />}
      <MediaContainer isMyList={isMyList}>
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
