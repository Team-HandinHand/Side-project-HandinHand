import * as S from './MediaFilter.styles'
import { useQueryState } from 'nuqs'
import { MediaFilterProps } from '@/types/mediaUi'
import { TV_CATEGORY_MAP, MOVIE_CATEGORY_MAP } from '@/constants/media'

export const MediaFilter = ({ type }: MediaFilterProps) => {
  const [category, setCategory] = useQueryState('category')
  const categoryMap = type === 'tv' ? TV_CATEGORY_MAP : MOVIE_CATEGORY_MAP

  return (
    <S.CategoryContainer>
      {Object.entries(categoryMap).map(([label, value]: [string, string]) => (
        <S.CategoryBtn
          key={value}
          size="medium"
          color="transparent"
          padding="var(--space-small)"
          fontSize="var(--font-medium)"
          isActive={category === value}
          onClick={() => setCategory(value)}>
          {label}
        </S.CategoryBtn>
      ))}
    </S.CategoryContainer>
  )
}
