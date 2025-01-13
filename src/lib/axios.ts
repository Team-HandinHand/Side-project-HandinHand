import axios, { AxiosInstance } from 'axios'

export const movieApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_MOVIE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    accept: 'application/json'
  }
})
