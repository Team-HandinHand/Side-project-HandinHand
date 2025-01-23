interface PosterBoxProps {
  title: string
  imageUrl: string
  date: string
  flex?: boolean
  onClick?: () => void
  isLoading?: boolean
  pointer?: boolean
}
interface PosterBoxContainerProps {
  $flex?: boolean
  $pointer?: boolean
}
interface MovieImageBoxProps {
  $flex?: boolean
}
interface ContentBoxProps {
  $flex?: boolean
}

export type {
  PosterBoxProps,
  PosterBoxContainerProps,
  MovieImageBoxProps,
  ContentBoxProps
}
