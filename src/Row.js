import React, { useEffect, useState } from "react";
import "./Row.css";

import axios from "./axios";

import { Link, useNavigate } from "react-router-dom";

function Row({ title, fetchUrl, isLargeRow = false }) {

  const API_KEY = "24230833b8c59f27f5e7b758333a5347";
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState(null)
  const navigate = useNavigate();

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // const fetchMovie = async(id) => {
  //   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  //   // console.log("data:" data.results)
  //   // return data;
  // }

  // const selectMovie = async(movie) => {
  //   const data = fetchMovie(movie.id)
  //   console.log(data)
  // }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              // <Link to={`/movies/${movie?.id}`}>
              // <div key={movie.id}>
              <img
                // onClick={() => selectMovie(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              // </div>
              // </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
