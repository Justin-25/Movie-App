import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";

export function MyList() {
  return (
    <div>
      <Header />

      <div className="movie-grid-container">
        <span className="heading-movie">My list</span>

        <MovieGrid />
      </div>
    </div>
  );
}
