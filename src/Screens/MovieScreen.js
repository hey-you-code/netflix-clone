// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import axios from "../axios";


// function MovieScreen() {
//   const API_KEY = "24230833b8c59f27f5e7b758333a5347";
//   const [details, setDetails] = useState();
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//       );
//       setDetails(request.data.results);
//       return request;
//     }

//     fetchData();
//   }, []);

//   const { movieId } = useParams();

//   return <div>{details}</div>;
// }

// export default MovieScreen;
