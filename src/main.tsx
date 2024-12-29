import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MovieDetails from './pages/movie-details/MovieDetails.tsx'
import StarRating from './components/common-ui/star-rating/StarRating.tsx'
import GlobalStyle from './GlobalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <MovieDetails />
  </StrictMode>
)
