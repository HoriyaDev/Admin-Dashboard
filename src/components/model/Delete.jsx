import React from 'react'

const Delete = ({ open ,onCloseModel}) => {
    if(!open) return null
  return (
    <div className='fixed bg-black bg-opacity-50 top-0 right-0 left-0 w-full h-full flex justify-center items-center ' onClick={onCloseModel}>
        
        <div className='bg-white w-[500px] h-[250px] rounded-2xl text-center  p-5'>
            <h1 className='font-bold text-xl'>Delete Profile</h1> 
            <p className='mt-10 text-xl'>Are you sure? You want to delete player profile!</p>
            <div className='flex justify-between mt-20'>
                <button className='bg-blue-gray-600 px-5 py-2 rounded-full text-white' onClick={onCloseModel}>Cancel</button>
                <button className='bg-red-600 px-5 py-2 rounded-full text-white'>Yes. Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Delete