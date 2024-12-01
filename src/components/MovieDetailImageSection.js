import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { FaExpandArrowsAlt } from "react-icons/fa";
import MovieImageModel from "./MovieImageModel";

const MovieDetailImageSection = ({ poster }) => {
  const [ismodelopen, setModelOpen] = useState(false);
  const handleOnClick = () => {
    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  return (
    <>
    <div
      className=" h-[475px] w-72 absolute bottom-10 left-28 group"
      onClick={handleOnClick}
    >
      <img
        className="h-full w-full rounded-md cursor-pointer"
        src={IMG_URL + poster}
        alt="Poster"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black opacity-0 rounded-md transition-opacity duration-300 group-hover:opacity-80 pointer-events-none">
        <h4 className="text-white flex items-center text-lg font-semibold">
          <span className="text-center">
            <FaExpandArrowsAlt />
          </span>
          <span className="ml-2">Expand</span>
        </h4>
      </div>
    </div>

    { /* modal component is to display the images of the movie */ }
    {ismodelopen && <MovieImageModel closeModal={closeModal} />}
    </>
  );

};

export default MovieDetailImageSection;
