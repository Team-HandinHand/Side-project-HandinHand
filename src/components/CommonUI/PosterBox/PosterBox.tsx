import { PosterBoxProps } from '@/types/components'
import {
  ContentBox,
  ContentDescription,
  ContentTitle,
  MovieImageBox,
  PosterBoxContainer
} from './PosterBox.styled'

export const PosterBox = ({
  title,
  imageUrl,
  date,
  flex,
  onClick
}: PosterBoxProps) => {
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
