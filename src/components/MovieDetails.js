import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetailImageSection from './MovieDetailImageSection';
import { IMG_URL } from '../utils/constants';

const MovieDetails = () => {
  // Corrected the typo and removed destructuring
  const movieDetails = useSelector((store) => store?.movie?.movieDetails);

  if (!movieDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-black text-xl">Loading...</div>
      </div>
    );
  }

  const {
    backdrop_path,
    poster_path} = movieDetails;

  console.log(movieDetails);
  return (
    <div className='relative'>
        <div className="relative w-full h-[650px] pt-24">
        <img
          className="w-full h-full object-cover"
          src={IMG_URL + backdrop_path}
          alt="Backdrop"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
        <div>
        <MovieDetailImageSection poster={poster_path}/>
        </div>
        
    </div>
  )
};

export default MovieDetails;
