import type { PosterBoxProps } from '@/types/components'
import {
  SkeletonContainer,
  SkeletonContentBox,
  SkeletonDescription,
  SkeletonImage,
  SkeletonTitle
} from '../skeleton/Skeleton.tsx'
import * as S from './PosterBox.styles.ts'

export const PosterBox = ({
  title,
  imageUrl,
  date,
  flex,
  onClick,
  isLoading,
  pointer = true
}: PosterBoxProps) => {
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
        src={imageUrl}
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
