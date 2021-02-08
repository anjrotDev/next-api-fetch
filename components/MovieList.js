import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { movieContext } from "../context/movies/moviesContext";
import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";

const MovieList = () => {
  const [showMovies, setShowMovies] = useState([]);
  const { movies, searchMovie } = useContext(movieContext);
  const router = useRouter();

  useEffect(() => {
    const render = () => (router.pathname === "/search" ? setShowMovies(searchMovie) : setShowMovies(movies));
    render();
  }, [router, showMovies, movies]);

  return (
    <Row>
      {showMovies.length !== 0
        ? showMovies.map(x => (
            <Col md={4} className="my-3" key={x.id}>
              <Card>
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w300${x.backdrop_path}`} className="img-thumbnail img-homeList" />
                <Card.Body>
                  <Card.Title>
                    <Link href={`/movies/${x.id}`}>{x.original_title}</Link>
                  </Card.Title>
                  <Card.Text>{x.overview.slice(0, 90) + " ..."}</Card.Text>
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
