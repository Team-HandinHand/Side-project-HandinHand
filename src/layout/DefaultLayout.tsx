import { Header } from '@/components'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <Header backgroundColor="black" />
      <Outlet />
    </>
  )
}
