import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";

export function HomePage() {
  return (
    <div>
      <Header />

      <MovieGrid />

      <Footer />
    </div>
  )
}