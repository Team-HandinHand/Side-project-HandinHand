export type ProfileButtonSize = 'small' | 'medium' | 'large' | string

export interface ProfileButtonProps {
  imageUrl?: string
  altText?: string
  onClick: () => void
  size?: ProfileButtonSize
}
