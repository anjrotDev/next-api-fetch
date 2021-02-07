import { useContext } from "react";
import { movieContext } from "../context/movies/moviesContext";
import { Col, Container, Row, Image } from "react-bootstrap";
import Collapsed from "./ui/Collapse";

const Movie = () => {
  const { movie, characters } = useContext(movieContext);
  console.log("_movie :>> ", characters);

  return (
    <Container>
      <h1 className="text-center my-5">{movie.original_title}</h1>
      <Row>
        <Col md={4}>
          <Image src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} thumbnail />
        </Col>
        <Col md={8}>
          <Container>
            <div className="py-3">
              <p>{movie.overview}</p>
              <p>
                <b>Release Date: </b>
                {movie.release_date}
              </p>
              <p>
                <b>Home Page:</b> {movie.homepage}
              </p>
            </div>
            <Collapsed />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
