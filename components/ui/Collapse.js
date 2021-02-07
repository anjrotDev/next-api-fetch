import { useContext, useState } from "react";
import { movieContext } from "../../context/movies/moviesContext";
import { Button, Row, Col, Card, Container, Collapse } from "react-bootstrap";

const Collapsed = () => {
  const [open, setOpen] = useState(false);
  const { characters } = useContext(movieContext);

  return (
    <Container>
      <Button className="d-block m-auto" onClick={() => setOpen(!open)} aria-controls="show-movies" aria-expanded={open}>
        View Characters
      </Button>
      <Collapse in={open}>
        <div id="show-movies">
          <Row className="my-3">
            {characters.length !== 0
              ? characters.map(x => (
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
