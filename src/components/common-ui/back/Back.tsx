import * as S from './Back.styles'
import { useNavigate } from 'react-router-dom'

export const Back = () => {
  const navigate = useNavigate()

  return (
    <S.BackIcon
      className={'sss'}
      onClick={() => navigate(-1)}
    />
  )
}
