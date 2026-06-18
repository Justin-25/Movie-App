import { SearchIcon } from 'lucide-react'
import './SearchBar.css'

export function SearchBar() {
  return (
    <div className="search">
      <input type="text" className='search-input' placeholder="Search Movie or Genre...." />
      <SearchIcon />
    </div>
  );
}
