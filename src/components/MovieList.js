import React from "react";
import MovieListCard from "./MovieListCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="w-screen bg-opacity-96 pl-6">
      <h1 className="text-white font-semibold py-2 text-xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar whitespace-nowrap">
          {movies.map((movie) => (
            <MovieListCard key={movie.id} movies={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
