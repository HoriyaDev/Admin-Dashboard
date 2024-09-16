import React from 'react'

const Reimburse = ({open , onClose}) => {
    if(!open) return null
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" onClick={onClose}>Reimburse

    
        <div className='bg-white w-[500px] h-[300px] rounded-2xl text-center  p-5'>
            <h1 className='font-bold text-xl'>Do you want to proceed? </h1> 
            <p className='mt-10 text-xl text-center'>You're about to reimburse the player and a fee of 1€ will be deducted from the total amount.</p>
            <div className='flex justify-between mt-20'>
                <button className='bg-blue-gray-600 px-5 py-2 rounded-full text-white' onClick={onClose}>Cancel</button>
                <button className='bg-red-600 px-5 py-2 rounded-full text-white'>Yes, Reimburse </button>
            </div>
        </div>

        </div>

    </>
  )
}

export default Reimburse