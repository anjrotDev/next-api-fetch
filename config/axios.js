import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGFlYzkzMzFjZTQ5ZDgwNDQ1MzU0ODdiYzcxOTc1YyIsInN1YiI6IjYwMTViNDVhOTA3ZjI2MDAzZjU1MjM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2m6kV1YiZpCY1-LjaHJkzz6QZyMnBwOBT72tI5WZvMY"
  }
});

export default axiosFetch;
