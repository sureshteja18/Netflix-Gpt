import React from "react";
import {  useSelector } from "react-redux";
import MovieList from "./MovieList";


const MovieListContainer = () => {
  const {nowPlayingMovies,popularMovies,topRatedMovies,upcomingMovies} = useSelector((store) => store.movie);
  

  return (
    <>
      <div className="bg-black">
        <div className="relative -mt-64 z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        </div>
      </div>
    </>
  );
};

export default MovieListContainer;
