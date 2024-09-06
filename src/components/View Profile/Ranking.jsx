import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { ranking } from '../../utils/constants';

const Ranking = () => {
  return (
    <div className='w-[350px] h-[170px] bg-blue-100 rounded-2xl mt-2 ml-10 '>

        <h1 className='text-center text-blue-600 mt-3 '>Aplaha Padel Ranking </h1>
        <div className='flex   items-center mx-auto bg-white w-24 rounded-full   mt-2 px-2 py-1'
         >
            <p className='font-bold text-3xl ml-1 '>01</p>
            <FaArrowUp className='text-green-500 text-center ml-4' />
            <p className='text-green-500  text-center'>3</p>
            
        </div>
      {ranking.map((item , index)=>(
        <div key={index}>
            <div className='flex justify-between mx-8 mt-4'>
            <p>{item.victory}<span className='font-bold'>14</span></p>
            <p>{item.defeat} <span className='font-bold'>2</span></p>
            
            </div>
            <div className='flex justify-between mx-8 mt-2 '>
            <p>{item.wining}  <span className='font-bold'>88%</span></p>
            <p>{item.total}  <span className='font-bold'>16</span></p>
            </div>
        </div>

      ))}
        
    </div>
  )
}

export default Ranking