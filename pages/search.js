import { Container } from "react-bootstrap";
import MoviesList from "../components/MovieList";

const SearchPage = () => {
  return (
    <Container>
      <h1 className="primerTitulo my-3">Movies</h1>
      <MoviesList />
    </Container>
  );
};
export default SearchPage;
