import "./MovieGrid.css";
import { MovieCard } from "./MovieCard";

export function MovieGrid({ movies }) {
  return (
    <div className="grid-container">
      <div className="movie-container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
