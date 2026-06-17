import { NavLink } from "react-router";
import { GenreFilter } from "./GenreFilter";
import { SearchBar } from "./SearchBar";

export function Header() {
  return(
    <>
      <div>Logo</div>
      
      <SearchBar />

      <GenreFilter />
      
      <NavLink to="/mylist">
        <span>My List</span>
      </NavLink>
    </>
  )
}