import React from 'react'
import { MdClose } from "react-icons/md";

const Warning = ({open, onCloseModel}) => {
    if(!open) return null
    return (
      <div className='fixed bg-black bg-opacity-50 top-0 right-0 left-0 w-full h-full flex justify-center items-center ' >
          
          <div className='bg-white w-[500px] h-[370px] rounded-2xl   p-5'>
          <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Send Warning</h1>
          <button className=" bg-blue-gray-100   rounded-full" >
            <MdClose size={'25px'} className='text-black' onClick={onCloseModel} />
          </button>
        </div>
        <div className='flex flex-col mt-7'>
            <div>
                
            <p>Why you are sending Warning</p>
            
            </div>
         <div className='mt-2'>
         <input type="checkBox"  /> 
         <label  className='ml-2' >Fake Profile</label>
         
         </div>
            <div className='mt-2'>
            <input type="checkBox" /> 
            <label className='ml-2' >Lorem Ipsum </label>
         
            </div>
            <div className='mt-2'>
            <input type="checkBox" /> 
            <label  className='ml-2' >Lorem Ipsum </label>
            </div>
            <div className='mt-2'>
            <input type="checkBox"  /> 
            <label className='ml-2' >Other </label>
            </div>

        
           
        </div>
              <div className='flex justify-between mt-10'>
                  <button className='bg-blue-gray-600 px-5 py-2 rounded-full text-white' onClick={onCloseModel}>Cancel</button>
                  <button className='bg-yellow-800 px-5 py-2 rounded-full text-white'>Send Warning</button>
              </div>
          </div>
      </div>
    )
}

export default Warning