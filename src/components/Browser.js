import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainDisplayMovieContainer } from './MainDisplayMovieContainer'
import MovieListContainer from './MovieListContainer'

const Browser = () => {

useNowPlayingMovies()

  return (
    <>
    <div className='flex justify-between'>
        <Header />
        <div>
        <MainDisplayMovieContainer/>
        <MovieListContainer/>
        </div>
    </div>
    
    </>
  )
}

//maincontainer
 //-moviedata
 //-backgroundmovietrailer
//secondaycontainer
 //-displaymovielists

export default Browser