import { useState } from "react";
import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="absolute bg-gradient-to-t from-black">
        <Header />
        <img
          className="bg-gradient-to-t from-black to-transparent h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_large.jpg"
          alt="login_back_page"
        />

        <form className="fixed bg-black w-[30%] px-20 py-10 my-20 mx-auto right-0 left-0 top-20 bg-opacity-70 rounded-lg">
          <h1 className="text-white mb-3 pl-2 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          
          {!isSignInForm && <input
            type="text"
            placeholder="Name"
            className=" px-2 py-6 m-2 bg-[#161616B3] border-2 border-slate-50 rounded-md w-72 h-14"
          /> }

          <input
            type="text"
            placeholder="Email"
            className=" px-2 py-6 m-2 bg-[#161616B3] border-2 border-slate-50 rounded-md w-72 h-14"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-6 m-2 bg-[#161616B3] border-2 border-slate-50 rounded-md w-72 h-14"
          />
          <button className="p-2 m-2 mt-6 bg-red-600 rounded-md w-72 text-white cursor-pointer">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={toggleSignInFrom}
            className="text-white p-3 cursor-pointer "
          >
            {isSignInForm
              ? "New to Netflix-Gpt? Sign Up"
              : "Already User? Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
