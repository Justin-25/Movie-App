import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";
import './HomePage.css'

export function HomePage() {

  // axios the movies on api backend

  return (
    <div className="homepage-container">
      <div className="top-container"></div>
      <Header />

      <div className="movie-grid-container">
        <span  className="heading-movie">Movies</span>

        <MovieGrid />
      </div>

      <Footer />
    </div>
  )
}