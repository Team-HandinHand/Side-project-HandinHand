import { UpdateComment } from '@/service/comments/putDetailsComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type TEditComment = {
  comment_id: string
  newComment: string
  setModifier: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCommentEdit = ({
  comment_id,
  newComment,
  setModifier
}: TEditComment) => {
  const queryClient = useQueryClient()
  const updatedAt = new Date().toISOString()
  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: () => UpdateComment(comment_id, newComment, updatedAt),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
      setModifier(false)
    }
  })

  return { updateCommentMutation }
}
