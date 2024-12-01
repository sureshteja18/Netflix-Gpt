import React from 'react'
import { IMG_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const MovieListCard = ({movies,movieId}) => {

    const navigate = useNavigate()


    const handleOnClickMovie=()=>{

     navigate(`/browser/${movieId}/movie`)
        
    }
  return (
        <div className='px-2 w-52 flex-shrink-0'>
            <button onClick={handleOnClickMovie}><img  className="w-full cursor-pointer rounded-lg transition duration-300 ease-out transform hover:scale-105 hover:rounded-lg " src={IMG_URL+ movies} alt="movie_image" /></button>
        </div>
  )
}

export default MovieListCard