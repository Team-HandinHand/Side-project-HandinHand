interface PosterBoxProps {
  title: string
  imageUrl: string
  date: string
  flex?: boolean
  onClick?: () => void
  isLoading?: boolean
}
interface PosterBoxContainerProps {
  title: string
  imageUrl: string
  date: string
  flex?: boolean
}
interface MovieImageBoxProps {
  src: string
  alt: string
  flex?: boolean
}
interface ContentBoxProps {
  flex?: boolean
}

export type {
  PosterBoxProps,
  PosterBoxContainerProps,
  MovieImageBoxProps,
  ContentBoxProps
}
