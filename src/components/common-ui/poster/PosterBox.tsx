import type { PosterBoxProps } from '@/types/components'
import {
  SkeletonContainer,
  SkeletonContentBox,
  SkeletonDescription,
  SkeletonImage,
  SkeletonTitle
} from '../skeleton/Skeleton.tsx'
import * as S from './PosterBox.styles.ts'
import { DEFAULT_POSTER_PATH } from '@/constants/media'

export const PosterBox = ({
  title,
  imageUrl,
  date,
  flex,
  onClick,
  isLoading,
  pointer = true
}: PosterBoxProps) => {
  const imgUrl =
    !imageUrl || imageUrl.includes('null') ? DEFAULT_POSTER_PATH : imageUrl

  if (isLoading) {
    return (
      <SkeletonContainer flex={flex}>
        <SkeletonImage flex={flex} />
        <SkeletonContentBox flex={flex}>
          <SkeletonTitle />
          <SkeletonDescription />
        </SkeletonContentBox>
      </SkeletonContainer>
    )
  }
  return (
    <S.PosterBoxContainer
      $flex={flex}
      onClick={onClick}
      $pointer={pointer}>
      <S.MovieImageBox
        src={imgUrl}
        alt={`${title}-poster`}
        $flex={flex}
      />
      <S.ContentBox $flex={flex}>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.ContentDescription>{date}</S.ContentDescription>
      </S.ContentBox>
    </S.PosterBoxContainer>
  )
}
