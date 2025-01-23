import * as S from './PopularMediaSlider.styles'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useQueryState } from 'nuqs'
import { MediaType } from '@/types/media'
import { Tab, PosterBox } from '@/components'
import useFetchPopularMedia from '@/hooks/queries/useFetchPopularMedia'
import checkIsMovie from '@/utils/checkIsMovie'

export const PopularMediaSlider = () => {
  const [activeType] = useQueryState('type', {
    defaultValue: 'movie'
  })
  const { filteredData, isFetching } = useFetchPopularMedia(
    activeType as MediaType
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  // 데이터를 4, 4, 2 그룹으로 나눔
  const groupedData = []
  groupedData.push(filteredData.slice(0, 4))
  groupedData.push(filteredData.slice(4, 8))
  groupedData.push(filteredData.slice(8))

  const handleNext = () => {
    if (currentIndex < filteredData.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <S.Container>
      <Tab title="지금 뜨는 콘텐츠" />
      {currentIndex > 0 && (
        <S.LeftButton
          role="button"
          onClick={handlePrev}
        />
      )}
      {currentIndex < groupedData.length - 1 && (
        <S.RightButton
          role="button"
          onClick={handleNext}
        />
      )}
      <S.PosterWrapper>
        {groupedData[currentIndex].map((media, index) => (
          <motion.div
            key={media.id}
            initial={{ x: 0 }}
            animate={{ x: `-${currentIndex * 10}%` }}
            transition={{ duration: 0.3 }}>
            <S.PosterBoxWrapper>
              <PosterBox
                title={checkIsMovie(media) ? media.title : media.name}
                imageUrl={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
                date={
                  checkIsMovie(media)
                    ? media.release_date
                    : media.first_air_date
                }
                isLoading={isFetching}
                pointer={false}
              />
              <S.Rank $isLast={index === 9}>
                {currentIndex * 4 + index + 1}
              </S.Rank>
            </S.PosterBoxWrapper>
          </motion.div>
        ))}
      </S.PosterWrapper>
    </S.Container>
  )
}
