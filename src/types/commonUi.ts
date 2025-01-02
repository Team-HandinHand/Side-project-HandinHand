import { NavLinkProps } from 'react-router-dom'
import { IconBaseProps } from 'react-icons'

// header
export interface HeaderProps {
  $backgroundColor: 'white' | 'black'
}

export interface HeaderLiProps {
  $signedUp: boolean
  $active: boolean
}

export interface HeaderLinkProps extends NavLinkProps {
  $signedUp?: boolean
}

export interface HeaderIconProps extends IconBaseProps {
  $active: boolean
}
