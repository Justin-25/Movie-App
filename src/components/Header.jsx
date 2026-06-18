import { NavLink } from "react-router";
import { GenreFilter } from "./GenreFilter";
import { SearchBar } from "./SearchBar";

export function Header() {
  return(
    <>
      <div>Logo</div>
      <img src="/images/movie-app-logo.png" alt="" />
      
      <SearchBar />

      <GenreFilter />
      
      <NavLink to="/mylist">
        <span>My List</span>
      </NavLink>
    </>
  )
}