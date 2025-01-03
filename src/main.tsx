import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieDetails from './pages/movie-details/MovieDetails.tsx'
import GlobalStyle from './GlobalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <MovieDetails />
  </StrictMode>
)
