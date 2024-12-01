import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const popularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPopularMovies(json.results))
        
    }

    useEffect(()=>{
        popularMovies()
    },[])
}

export default usePopularMovies