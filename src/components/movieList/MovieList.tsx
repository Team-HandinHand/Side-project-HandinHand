import { PosterBox } from '@/components/common-ui/poster/PosterBox'
import { MovieListProps } from '@/types/movieList'
import styled from 'styled-components'

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <PosterContainer>
      {movies.map((movie, index) => (
        <PosterBox
          key={index}
          title={movie.title}
          imageUrl={movie.imageUrl}
          date={movie.date}
          isLoading={movie.isLoading}
        />
      ))}
    </PosterContainer>
  )
}

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-medium);
`

export const PosterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  @media (min-width: 1441px) {
    width: 1440px;
  }
`
