import { PosterBoxProps } from '@/types/components'
import {
  ContentBox,
  ContentDescription,
  ContentTitle,
  MovieImageBox,
  PosterBoxContainer
} from './PosterBox.styled'
import {
  SkeletonContainer,
  SkeletonContentBox,
  SkeletonDescription,
  SkeletonImage,
  SkeletonTitle
} from '../Skeleton/Skeleton'

export const PosterBox = ({
  title,
  imageUrl,
  date,
  flex,
  onClick,
  isLoading
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
    <PosterBoxContainer
      title={title}
      imageUrl={imageUrl}
      date={date}
      flex={flex}
      onClick={onClick}>
      <MovieImageBox
        src={imageUrl}
        alt={title}
        flex={flex}
      />
      <ContentBox flex={flex}>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{date}</ContentDescription>
      </ContentBox>
    </PosterBoxContainer>
  )
}
