import { useRef, useState } from "react";
import React from "react";
import Header from "./Header";
import { passwordValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = passwordValidate(
      email.current.value,
      password.current.value
    );

    if (!email.current.value || !password.current.value) {
      const fillmsg = "please fill in all fields";
      setIsErrorMessage(fillmsg);
      return;
    }

    setIsErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browser");
            })
            .catch((error) => {
              console.log(error);
            });
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="absolute bg-gradient-to-t from-black">
        <Header />
        <img
          className="bg-gradient-to-t  from-black to-transparent h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_large.jpg"
          alt="login_back_page"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute bg-black w-[30%] px-20 py-10 my-20 mx-auto right-0 left-0 top-20 bg-opacity-75 rounded-lg"
        >
          <h1 className="text-white mb-3 pl-2 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={displayName}
              type="text"
              placeholder="Name"
              className=" px-2 py-6 m-2 bg-[#161616B3] border-2 text-white border-slate-50 rounded-md w-72 h-14"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className=" px-2 py-6 m-2 bg-[#161616B3] border-2 text-white border-slate-50 rounded-md w-72 h-14"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-2 py-6 m-2 bg-[#161616B3] text-white border-2 border-slate-50 rounded-md w-72 h-14"
          />

          <p className="px-2 m text-red-600">{isErrorMessage}</p>

          <button
            onClick={handleButtonClick}
            className="p-2 m-2 mt-6 bg-[#E50914] rounded-md w-72 text-white cursor-pointer"
          >
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
