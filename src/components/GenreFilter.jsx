import { ChevronDown } from "lucide-react";
import './GenreFilter.css'

export function GenreFilter() {
  return (
    <>
    <div className="genres-container" >
      <button className="button-genres">
        <span>Genres</span>
        <ChevronDown className="genres-arrow" size={15}/>
      </button>

      {/* List of the Genres */}
    </div>
    </>
  )
}