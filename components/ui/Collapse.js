import { useContext, useState, useEffect } from "react";
import { movieContext } from "../../context/movies/moviesContext";
import { Button, Row, Col, Card, Container, Collapse } from "react-bootstrap";

const Collapsed = () => {
  const [disabled, setDisabled] = useState(false);
  const [paginate, setPaginate] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(false);
  const { characters } = useContext(movieContext);

  useEffect(() => {
    offset <= 0 ? setDisabled(true) : setDisabled(false);
    setPaginate(characters.slice(offset, offset + perPage));
  }, [characters, offset, perPage]);

  const nextPage = () => {
    setOffset(offset + perPage);
  };

  const beforePage = () => {
    setOffset(offset - perPage);
  };

  return (
    <Container>
      <Button className="d-block m-auto" onClick={() => setOpen(!open)} aria-controls="show-movies" aria-expanded={open}>
        View Characters
      </Button>
      <Collapse in={open}>
        <div id="show-movies">
          <Button onClick={beforePage} disabled={disabled}>
            -
          </Button>
          <Button onClick={nextPage}>+</Button>
          <Row className="my-3">
            {paginate.length !== 0
              ? paginate.map(x => (
                  <Col md={4} key={x.cast_id}>
                    <Card>
                      <Card.Img src={`http://image.tmdb.org/t/p/w300${x.profile_path}`} className="img-thumbnail" />
                      <Card.Body>
                        <Card.Title>{x.character}</Card.Title>
                        <Card.Subtitle>Acting: {x.name}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </div>
      </Collapse>
    </Container>
  );
};

export default Collapsed;
