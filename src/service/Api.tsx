import { useEffect, useState } from 'react'
import { MediaProps } from '../types/api'

const Api = (props: MediaProps) => {
  const { mediaType, movieCategory, dramaCategory, movieId, dramaName } = props

  const TMDB_KEY = import.meta.env.VITE_TMDB_KEY
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState([])
  const baseURL = `https://api.themoviedb.org/3/${mediaType}`

  useEffect(() => {
    const getInfo = async () => {
      let URL = baseURL

      if (mediaType === 'movie' && movieCategory) {
        URL += `/${movieCategory}`
      } else if (mediaType === 'tv' && dramaCategory) {
        URL += `/${dramaCategory}`
      }

      if (mediaType === 'movie' && movieId) {
        URL += `/${movieId}`
      } else if (mediaType === 'tv' && dramaName) {
        URL = `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_KEY}&query=${encodeURIComponent(dramaName)}`
      } else {
        URL += `?api_key=${TMDB_KEY}`
      }

      try {
        const response = await fetch(URL)
        const json = await response.json()
        console.log(json)
        setResult(mediaType === 'tv' && dramaName ? json.results : json)
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error)
      } finally {
        setLoading(false)
      }
    }
    getInfo()
  }, [])

  return <div>{loading ? <h1>Loading...</h1> : `${result}`}</div>
}

export default Api
