import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Header from "../components/Header";
import MovieWrapper from "../context/movies/moviesContext";

const PrincipalApp = ({ Component, pageProps }) => (
  <div className="main__content">
    <MovieWrapper>
      <Header />
      <Component {...pageProps} />
    </MovieWrapper>
  </div>
);

export default PrincipalApp;
