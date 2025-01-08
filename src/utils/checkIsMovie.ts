import { MediaResult, MovieResult } from '@/types/media'

const checkIsMovie = (media: MediaResult): media is MovieResult => {
  return 'title' in media
}

export default checkIsMovie
