import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(store => store.user) 
  const navigate = useNavigate();

  const handleSignout=()=>{
    signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
     
  }

  return (
      <div className='fixed flex justify-between w-screen pt-2 pl-20 pr-4 bg-gradient-to-b from-black'>
        <img className=' w-[200px] h-20 text-red-700' src={process.env.PUBLIC_URL + '/Netflixgpt.svg'} alt="Netflix-GPT logo" />

       {user &&  <div className='flex items-center'>
          <img className='h-10 w-10 rounded-sm' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user-icon" />
          <button className='text-white' onClick={handleSignout}>(Signout)</button>
        </div>}
      </div>
  )
}

export default Header