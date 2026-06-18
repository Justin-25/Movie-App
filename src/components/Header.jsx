import { NavLink } from "react-router";
import { GenreFilter } from "./GenreFilter";
import { SearchBar } from "./SearchBar";
import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="/images/movie-app-logo.png"
          alt="Logo of the Movie App"
        />
        <img
          className="logo-name"
          src="/images/logoName.png"
          alt="Logo name of the Movie App"
        />
      </div>

      <div className="search-container">
        <SearchBar />
      </div>

      <div className="navigation-container">
        <GenreFilter />
        <NavLink className="my-list-container">My list</NavLink>
      </div>
    </div>
  );
}
