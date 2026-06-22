import { Heart, MoveLeft, Plus } from "lucide-react";
import "./MovieDetails.css";
import { NavLink } from "react-router";

// To do: Render the data

export function MovieDetails() {
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
            <img src="/images/movies/goat.webp" alt="" />
          </div>
          <div className="details">
            <div className="details-title">Goat</div>
            <div className="details-genre">
              Genre: Animation, Comdey, Family
            </div>
            <div className="details-rating">⭐ 4.5</div>
            <div className="button-container">
              <div className="like-button"><Heart className="heart"/> Like</div>
              <div className="add-to-mylist-button"><Plus /> Add</div>
            </div>
            <div className="description">
              In a world ruled by ferocious athleticism, one unlikely contender
              dares to dream beyond the bleating of the herd. Meet a diminutive
              goat, burdened by ambition yet blessed with a hidden talent, who
              unexpectedly gains entry into the elite echelons of roarball. This
              high-octane, co-ed spectacle demands unwavering commitment and
              bone-jarring collisions, a domain typically reserved for nature's
              apex predators. Can this underdog defy the odds and prove that
              heart triumphs over sheer size in the ultimate test of speed and
              strength? The journey to glory will test his limits, forging his
              spirit in the crucible of competitive roarball.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
