import React from 'react'
import { RxCross2 } from "react-icons/rx";

const EditTournamentDetails = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" >
      <div className="bg-white w-[450px] h-[600px] rounded-2xl text-center p-3 relative">
        
        <button  type="button" onClick={onClose} className="absolute top-4 right-4 bg-blue-gray-50 p-1 rounded-full">
          <RxCross2 />
        </button>

       <img src='Logo.png' className='mx-auto mt-2' alt='logo'  /> 
       <p className='text-center font-bold text-3xl mt-4' >Edit Tournament</p>
       <p className='text-center text-blue-gray-200 text-sm mt-2'>Enter your information below</p>
       
      </div>
    </div>
  );
}

export default EditTournamentDetails;
