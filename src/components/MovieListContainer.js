import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);

  return (
    <>
      <div className="bg-black">
        <div className="relative -mt-64 z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Now Playing"} movies={movies} />
        </div>
      </div>
    </>
  );
};

export default MovieListContainer;
