import axios, { AxiosInstance } from 'axios'

export const movieApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_MOVIE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
  }
})
