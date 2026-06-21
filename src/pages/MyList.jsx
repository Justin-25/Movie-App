import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function MyList() {
  return (
    <div>
      <div className="top-container"></div>
      <Header />

      <div className="movie-grid-container">
        <span className="heading-movie">My list</span>
      </div>

      <Footer />
    </div>
  );
}
