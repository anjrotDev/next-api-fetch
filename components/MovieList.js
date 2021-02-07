import { useContext } from "react";
import { movieContext } from "../context/movies/moviesContext";
import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";

const MovieList = () => {
  const { movies } = useContext(movieContext);
  if (movies.length !== 0) {
    console.log("movies :>> ", movies);
  }

  return (
    <Row>
      {movies.length !== 0
        ? movies.map(x => (
            <Col md={4} className="my-3" key={x.id}>
              <Card>
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w300${x.backdrop_path}`} className="img-thumbnail" />
                <Card.Body>
                  <Card.Title>
                    <Link href={`/movies/${x.id}`}>{x.original_title}</Link>
                  </Card.Title>
                  <Card.Text>{x.overview}</Card.Text>
                  <Card.Subtitle>Release Date: {x.release_date}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))
        : null}
    </Row>
  );
};

export default MovieList;
