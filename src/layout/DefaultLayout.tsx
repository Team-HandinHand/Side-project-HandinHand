import * as S from './DefaultLayout.styles'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components'

export default function DefaultLayout() {
  return (
    <S.ContentContainer>
      <Header $backgroundColor="black" />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.ContentContainer>
  )
}
