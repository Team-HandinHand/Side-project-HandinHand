export type TCount = {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export interface ContentRelatedProps {
  setShowType: React.Dispatch<React.SetStateAction<'content' | 'related'>>
}
