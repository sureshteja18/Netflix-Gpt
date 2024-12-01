// MovieContainer.js

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieVideos,
  fetchMovieImages,
} from "../utils/movieSlice";
import Header from "./Header";
import MovieDetails from "./MovieDetails";



const MovieContainer = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  // Fetch the movie details, credits, videos, and images when the component mounts
  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId));
      dispatch(fetchMovieCredits(movieId));
      dispatch(fetchMovieVideos(movieId));
      dispatch(fetchMovieImages(movieId));
    }
  }, [dispatch, movieId]);

  // Destructure the state from Redux
  const { movieImages,status, error } = useSelector((state) => state?.movie);

  // Handle loading and error states

  console.log(movieImages)
  if (
    status.movieDetails === "loading" ||
    status.movieCredits === "loading" ||
    status.movieImages === "loading"
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (
    status.movieDetails === "error" ||
    status.movieCredits === "error" ||
    status.movieImages === "error"
  ) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-black">
      <Header />
      <MovieDetails/>
    </div>
  );
};

export default MovieContainer;
