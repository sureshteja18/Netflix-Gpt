import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MainVideoTitle = ({ title, overview, movieId }) => {

  const navigate = useNavigate(); // Correctly call useNavigate

  const handleMovieOverview = () => {
    navigate(`/browser/${movieId}/movie`); // Navigate to the respective movie container
  };

  return (
    <div className="absolute w-screen aspect-video px-32 pt-72 text-white bg-gradient-to-r from-black bg-opacity-40">
      <h1 className="text-5xl mb-4 font-bold">{title}</h1>
      <p className="w-1/3 text-sm leading-6 text-justify">{overview}</p>
      <div className="flex">
        <button className="p-3 my-4 bg-white flex items-center rounded-md bg-opacity-70 text-black hover:bg-opacity-50">
          <span className="mr-1">
            <FaPlay />
          </span>
          Play
        </button>
        <button className="p-3 my-4 ml-2 flex items-center bg-black w-fit rounded-md bg-opacity-30 text-center text-white hover:bg-opacity-10" onClick={handleMovieOverview}>
          <span className="mr-1 text-xl">
            <IoIosInformationCircleOutline />
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainVideoTitle;