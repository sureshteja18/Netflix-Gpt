import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailerbackground from "../hooks/useMovieTrailerbackground";

const MainVideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie?.movieTrailer);

  useMovieTrailerbackground(movieId);

  if (!trailer) return;

  const mainTrailer = trailer[0];

  return (
    <div className="w-screen -mt-5">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${mainTrailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=${mainTrailer.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
