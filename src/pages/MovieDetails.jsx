import { Heart, MoveLeft, Plus, Star } from "lucide-react";
import "./MovieDetails.css";
import { NavLink, useParams } from "react-router-dom";

// To do: Render the data

export function MovieDetails({
  movies
}) {
  const {movieId} = useParams();

  const movieDetails = movies.find((movie) => {
    return (
      movie.id === movieId
    )
  })

  if (!movieDetails) {
    return null
  }

  return (
    <div className="container">
      <NavLink
        className="back-container"
        to="/"
      >
        <span><MoveLeft size={40}/></span>
      </NavLink>
      <div className="movie-details-container">
        <div className="movie-details">
          <div className="details-image-container">
            <img src={movieDetails.poster} />
          </div>
          <div className="details">
            <div className="details-title">{movieDetails.title}</div>
            <div className="details-genre">
              Genre: {movieDetails.genres.join(', ')}
            </div>
            <div className="details-rating"><Star size={20} className="rating-stars" /> {movieDetails.rating.score} Votes: {movieDetails.rating.votes} </div>
            <div className="button-container">
              <div className="like-button"><Heart className="heart"/>Like</div>
              <div className="add-to-mylist-button"><Plus /> Add</div>
            </div>
            <div className="description">
              {movieDetails.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
