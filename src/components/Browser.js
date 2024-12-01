import React, { useEffect } from 'react'
import Header from './Header'
import { MainDisplayMovieContainer } from './MainDisplayMovieContainer'
import MovieListContainer from './MovieListContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../utils/movieSlice'

const Browser = () => {
  const dispatch = useDispatch()
  const {  status, error } = useSelector((store) => store.movie)

  useEffect(() => {
    dispatch(fetchNowPlayingMovies())
    dispatch(fetchPopularMovies())
    dispatch(fetchTopRatedMovies())
    dispatch(fetchUpcomingMovies())
  }, [dispatch])

  // if (status === 'loading') {
  //   return <div>Loading...</div>
  // }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className='flex justify-between'>
        <Header />
        <div>
          <MainDisplayMovieContainer />
          <MovieListContainer />
        </div>
      </div>
    </>
  )
}

export default Browser