import { useEffect, useState } from 'react'
import { FaAnglesUp } from 'react-icons/fa6'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ScrollToTopContainer>
      {isVisible && (
        <>
          <Button onClick={scrollToTop}>
            <FaAnglesUp />
          </Button>
        </>
      )}
    </ScrollToTopContainer>
  )
}

import styled from 'styled-components'

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 1000;
`

export const Button = styled.button`
  background-color: transparent;
  color: var(--color-white);
  font-size: 30px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`
