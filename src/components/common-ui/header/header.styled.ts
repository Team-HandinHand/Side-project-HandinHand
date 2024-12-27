import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Container {
  backgroundColor: string
}

export const Header = styled.header<Container>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  padding: 18px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 60px;
  margin: 0 60px;
`

export const Logo = styled.div`
  font-size: 18px; //임시
  img {
    width: 30px;
    height: auto;
  }
`

export const NavUl = styled.ul`
  display: flex;
  gap: 60px;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-white);
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit; //inherit는 기본값을 그대로 유지한다는 뜻임~

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  &:focus {
    color: inherit;
  }
`

export const ProfileImg = styled.img`
  border-radius: 50%; // 디자인 토큰으로 변경 필요
  width: 50px;
  height: 50px;
`
