import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieListCard = ({movies}) => {
  return (
    
        <div className='px-2 w-52 flex-shrink-0'>
            <button><img  className="w-full cursor-pointer rounded-lg transition duration-300 ease-out transform hover:scale-105 hover:rounded-lg " src={IMG_URL+ movies} alt="movie_image" /></button>
        </div>
  )
}

export default MovieListCard