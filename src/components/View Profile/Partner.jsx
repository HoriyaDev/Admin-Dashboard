import React from 'react'
import { partner } from '../../utils/constants'

const Partner = () => {
  return (
    <div  className='w-[350px] h-[170px] bg-blue-100 rounded-2xl mt-3 ml-10' >
         <h1 className='text-center text-blue-600 mt-3 '>BEST PARTNER</h1>
         {partner.map((item, index)=>(
            <div key={index}>
                <div className='flex  items-center  mx-5'> 
                    <p className='font-bold'>  {item.id}</p>
                    <img src={item.src} className='w-8 h-8 rounded-full object-cover ml-6' />
                    <p className='ml-2 mr-5'>{item.name}</p>
                    <p className='text-justify'>{item.wins}</p>
                </div>
            </div>

         ))}

         


    </div>
  )
}

export default Partner














