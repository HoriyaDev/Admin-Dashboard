import React from 'react'
import { CiEdit } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

import  { useState } from 'react';

import EditProfile from '../model/EditProfile';



const LogOut = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);  
    };
  
    const handleClose = () => {
      setOpen(false);  
    };
  return (
    <div className='absolute right-16   w-[200px]  bg-blue-gray-50 z-50 p-4 shadow-lg rounded'>
      <div className='flex justify-evenly items-center'>
      <button  className='flex' onClick={handleOpen}>
      <CiEdit  size={'25px'} className='mr-2'/>
      <p className='text-xl ml-2'>Edit Profile</p>
      </button>

      </div>
      <div className='flex justify-evenly items-center mt-5 mr-7'>
      <TbLogout2 size={'25px'} className='text-red-600 ' />
      <p className='text-xl text-red-600'>LogOut</p>

      </div>

      <EditProfile open={open} onClose={handleClose} />


    </div>
  )
}

export default LogOut
