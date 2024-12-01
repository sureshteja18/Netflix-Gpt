import React from 'react';
import { IoClose } from "react-icons/io5";

const MovieImageModel = ({ closeModal }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
      <div className='h-[550px] w-[750px] bg-white relative'>
        <button onClick={closeModal} className='absolute top-5 right-5 text-lg font-semibold'>
          <IoClose />
        </button>
        {/* Modal content here */}
      </div>
    </div>
  );
};

export default MovieImageModel;
