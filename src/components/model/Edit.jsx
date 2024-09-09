import React from 'react'
import { MdClose } from "react-icons/md";


const Edit = ({ open , onCloseModel }) => {
  if (!open) return null
  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 '>
      <div className='relative bg-white w-[520px] h-[550px] rounded-xl shadow p-5'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Edit Profile</h1>
          <button className=" bg-blue-gray-100   rounded-full" >
            <MdClose size={'25px'} className='text-black' onClick={onCloseModel} />
          </button>
        </div>
        <img src="pic4.jpg" className='w-20 h-20  mx-auto mt-5 rounded-full object-cover' />
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-10 pl-7'>
          <label htmlFor='name' className='text-blue-700'>Name</label>
          <input type="text"  id="name" name='name' placeholder='Name'  className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='email' className='text-blue-700'>Name</label>
          <input type="email"  id="email" name='email' placeholder='abc@gamil.com' className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='number' className='text-blue-700'>Mobile Number</label>
          <input type="number"  id="number" name='number' placeholder='Mobile Number'  className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='address' className='text-blue-700'>Address</label>
          <input type="text"  id="address" name='address' placeholder='Address'  className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='flex justify-between mt-5  '>
          <button className='bg-blue-gray-600 px-5 py-2 rounded-full text-white'>Cancel</button>
          <button className='bg-blue-600 px-5 py-2 rounded-full text-white'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Edit