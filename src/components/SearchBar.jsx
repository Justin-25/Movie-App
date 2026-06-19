import { SearchIcon } from 'lucide-react'
import './SearchBar.css'

export function SearchBar() {
  return (
    <div className="search">
      <input type="text" className='search-input' placeholder="Search Movie or Genres..." />
      <button className='search-button'>
        <SearchIcon />
      </button>
    </div>
  );
}
