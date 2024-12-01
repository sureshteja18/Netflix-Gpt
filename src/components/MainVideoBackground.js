import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieVideos } from "../utils/movieSlice"; // Correct action
import { useEffect } from "react";

const MainVideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  //Fetch movie videos when the component mounts
  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieVideos(movieId));  // Dispatch the thunk to fetch videos
    }
  }, [dispatch,movieId]);

  // Get the movie videos from Redux state
  const movies = useSelector((store) => store.movie?.movieVideos);
   
  console.log(movies)

  // Ensure movies exists before filtering
  if (!movies || movies.length === 0) return null;

  // Filter trailers from the videos
  const trailer = movies.filter(movie => movie.type === 'Trailer');



  // If no trailers found, return null
  if (!trailer || trailer.length === 0) return null;

  // Use the first trailer from the movie videos array
  const mainTrailer = trailer[0];

  return (
    <div className="w-screen -mt-5">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${mainTrailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=${mainTrailer.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="Main Trailer"
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
