import { Outlet } from 'react-router-dom'
import { Header } from '@/components/common-ui/header/Header'

export default function DefaultLayout() {
  return (
    <>
      <Header backgroundColor="black" />
      <Outlet />
    </>
  )
}
