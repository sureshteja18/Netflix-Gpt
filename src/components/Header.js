import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {

  const[backGround,setBackGround]= useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);


  useEffect(()=>{
      const handleScroll =()=>{
        const offset = window.scrollY;
        if(offset>window.innerHeight*0.4){
          setBackGround(true)
        }else{
          setBackGround(false)
        }
      }

      window.addEventListener('scroll',handleScroll)

      return()=>{
      window.removeEventListener('scroll',handleScroll)
      }
  },[])

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 flex justify-between bg-gradient-to-b from-black items-center w-full py-2 px-4 z-50 transition-colors duration-200 ${backGround ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <img
        className="w-[200px] h-20"
        src={process.env.PUBLIC_URL + "/Netflixgpt.svg"}
        alt="Netflix-GPT logo"
      />

      {user && (
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-sm mr-2"
            src={USER_AVATAR}
            alt="user-icon"
          />
          <button className="text-white" onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
