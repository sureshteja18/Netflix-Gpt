import React from 'react'
import { useSelector } from 'react-redux'
import MainVideoTitle from './MainVideoTitle'
import MainVideoBackground from './MainVideoBackground'

export const MainDisplayMovieContainer = () => {

    const movies= useSelector(store=>store.movie?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[3]

    const {original_title, overview, id} = mainMovie
  return (
    <>
    <MainVideoTitle title={original_title} overview={overview}/>
    <MainVideoBackground  movieId={id}/>
    </>

  )
}