import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchMovieVideos } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailerbackground = (movieId) => {
    const dispatch = useDispatch();
    const playmovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const result = json.results;
  
      const trailer = result.filter((movie) => movie.type === "Trailer");

      console.log(trailer);
  

  
      dispatch(fetchMovieVideos(trailer));
    };
  
    useEffect(() => {
      playmovieVideo();
    }, []);
}

export default useMovieTrailerbackground