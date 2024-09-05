import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <> 
   
    
    <div className='relative flex   justify-between  bg-red-200 pt-2 px-20'>
        <div>
        <img src='Logo.png' className='object-contain'/>
        </div>
    
        
            <div className='flex  justify-evenly'>
            <img src='Profile.jpg' className='h-12 w-12 rounded-full object-cover m-2' />
            <div className=' flex-col'>
            <h1 className='text-2xl font-bold '>Taimoor Aslam</h1>
            <p className='bg-blue-100 rounded-full w-20 text-center text-[12px]'>SuperAdmin</p>
        </div>
        <IoMdArrowDropdown className='ml-3 mt-3' />
            </div>
        

        
    </div>
    </>
  )
}

export default Header