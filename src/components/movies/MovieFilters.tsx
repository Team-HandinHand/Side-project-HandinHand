import { useState } from 'react'
import { Button } from '../common-ui/Button/Button'
import * as S from './MovieFilters.styles'

type labelValues = {
  labelValues: string[]
}
export const MovieFilters = ({ labelValues }: labelValues) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <S.LabelContainer activeIndex={activeIndex}>
      {labelValues.map((label, index) => (
        <Button
          key={index}
          size="medium"
          color="transparent"
          padding="var(--space-small)"
          fontSize="var(--font-medium)"
          onClick={() => handleButtonClick(index)}>
          {label}
        </Button>
      ))}
    </S.LabelContainer>
  )
}
