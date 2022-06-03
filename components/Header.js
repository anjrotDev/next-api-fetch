import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Navbar, Form, FormControl, Button, Container, Image } from "react-bootstrap";
import { movieContext } from "../context/movies/moviesContext";
import { getMovies } from "../helpers/crud";

const Header = () => {
  const [search, setSearch] = useState("");
  const { searchMovies } = useContext(movieContext);
  const router = useRouter();

  const handleOnChange = e => setSearch(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const seekMovies = await getMovies(`/search/movie?query=${search}`);
      searchMovies(seekMovies.results);
      setSearch("");
      router.push(`/search?movie=${search}`);
    } catch (error) {
      console.log("error.message :>> ", error.message);
    }
  };

  return (
    <header>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image src="/img/anjrot2.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Form inline onSubmit={handleSubmit}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnChange} value={search} />
              <Button type="submit  " variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
