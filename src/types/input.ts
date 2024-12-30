export interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'textarea'
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  width?: string
  fontSize?: string
  error?: boolean
}
