import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import LogOut from '../logout/LogOut';

const Header = () => {
  const [open , setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }
   
  return (
    <> 
      <div className='relative flex justify-between bg-red-200 pt-2 px-20'>
        <div>
          <img src='Logo.png' className='object-contain' alt="Logo"/>
        </div>
        <div className='flex justify-evenly'>
          <img src='Profile.jpg' className='h-12 w-12 rounded-full object-cover m-2' alt="Profile"/>
          <div className='flex-col'>
            <h1 className='text-2xl font-bold'>Taimoor Aslam</h1>
            <p className='bg-blue-100 rounded-full w-20 text-center text-[12px]'>SuperAdmin</p>
          </div>
          <button type='button' onClick={handleOpen}>
            <IoMdArrowDropdown className='ml-3' />
          </button>
        </div>   
      </div>
      {open && <LogOut />}  
    </>
  )
}

export default Header