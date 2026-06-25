import "./MovieGrid.css";
import { MovieCard } from "./MovieCard";

export function MovieGrid({ movies, myList, toggleMovie }) {
  return (
    <div className="grid-container">
      <div className="movie-container">
        {movies.map((movie) => {
          const isSaved = myList.some(
            (savedMovie) => savedMovie.id === movie.id,
          );

          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isSaved={isSaved}
              toggleMovie={toggleMovie}
            />
          );
        })}
      </div>
    </div>
  );
}
