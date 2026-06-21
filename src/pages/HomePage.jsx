import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";
import { movies } from "../data/movies";
import './HomePage.css'

export function HomePage() {

  return (
    <div className="homepage-container">
      <div className="top-container"></div>
      <Header />

      <div className="movie-grid-container">
        <span  className="heading-movie">Movies</span>

        <MovieGrid movies={movies} />
      </div>

      <Footer />
    </div>
  )
}