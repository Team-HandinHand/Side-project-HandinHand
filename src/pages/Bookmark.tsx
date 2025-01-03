import { ActiveTab } from '@/components'
import { useState } from 'react'
import * as S from '@/components/bookmark/Bookmark.styles'
import { useUserStore } from '@/stores/userStore'

const mockPosters = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  poster: '/image.png',
  title: `영화 제목 ${index + 1}`,
  date: `2024-12-12`
}))

export const Bookmark = () => {
  const [activeTab, setActiveTab] = useState<'영화' | '시리즈'>('영화')
  const { user } = useUserStore()
  const username = user?.nickname
  return (
    <S.BookmarkContainer>
      <ActiveTab
        title={`${username}의 즐겨찾기 목록`}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <S.PosterGrid>
        {mockPosters.map(poster => (
          <S.PosterItem key={poster.id}>
            <S.PosterImage>
              <img
                src={poster.poster}
                alt={`영화 포스터 ${poster.id}`}
              />
            </S.PosterImage>
            <S.PosterInfo>
              <S.PosterTitle>{poster.title}</S.PosterTitle>
              <S.PosterDate>{poster.date}</S.PosterDate>
            </S.PosterInfo>
          </S.PosterItem>
        ))}
      </S.PosterGrid>
    </S.BookmarkContainer>
  )
}
