import { useState } from 'react'
import * as S from './StarRating.styles'
import { useRating } from '@/hooks/useRating'
/* <Stars size={50} />  이런식으로 사이즈만 지정해서 사용. */

interface Star {
  full: boolean
  onRate: (event: React.MouseEvent<HTMLDivElement>) => void
  onHoverIn: (event: React.MouseEvent<HTMLDivElement>) => void
  onHoverOut: (event: React.MouseEvent<HTMLDivElement>) => void
  size: number
}

interface StarSize {
  size: number
  initialRating?: number
  isReadOnly?: boolean
  CommentRating?: number
}

export default function StarRating({
  size,
  isReadOnly = false,
  CommentRating = 0
}: StarSize) {
  const { rating, setRating } = useRating()
  const [tempRating, setTempRating] = useState(CommentRating)

  function handleRating(rating: number) {
    if (!isReadOnly) {
      setRating(rating)
    }
  }

  return (
    <S.Container>
      <S.StarContainer>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => !isReadOnly && setTempRating(i + 1)}
            onHoverOut={() => !isReadOnly && setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            size={size}
          />
        ))}
      </S.StarContainer>
    </S.Container>
  )
}

export function Star({ onRate, onHoverIn, onHoverOut, full, size }: Star) {
  return (
    <S.Stars
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      size={size}>
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="var(--color-pink-dark)"
          stroke="var(--color-pink-dark)">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--color-dark-gray)"
          viewBox="0 0 24 24"
          stroke="var(--color-dark-gray)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </S.Stars>
  )
}
