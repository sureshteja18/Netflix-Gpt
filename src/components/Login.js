import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>
    <div className='absolute bg-gradient-to-t from-black' >
        <Header/>
    <img className='bg-gradient-to-t from-black to-transparent h-full w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_large.jpg" alt="login_back_page" />


  <form className='fixed bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 top-20 '>
       <input type="text" placeholder='Email' className='p-2 m-2 rounded-md'/>
       <input type="password" placeholder='Password' className='p-2 m-2 rounded-md'/>
       <button className='p-2 m-2 bg-red-800 rounded-md'>Sign in</button>
    </form>
  </div>
    </>
  )
}

export default Login;