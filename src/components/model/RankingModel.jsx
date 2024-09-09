import React from 'react'
import { MdClose } from "react-icons/md";
import { RankingPlayers } from '../../utils/constants';

const RankingModel = ({ openRanking, onCloseRanking }) => {
  if (!openRanking) return null
  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 '  >
      <div className="relative bg-white rounded-lg shadow  w-[600px] h-[530px] p-3 ">
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Players Ranking</h1>
          <button className=" bg-blue-gray-100   rounded-full" onClick={onCloseRanking}>
            <MdClose size={'20px'} className='text-black' />
          </button>

        </div>

        <div className='mt-8'>
          {RankingPlayers.map((item, index) => (
            <div key={index} className=' flex justify-between bg-deep-orange-100 mt-2 p-1'>

              <div className='flex '>
                <h1 className='font-bold'>{item.id}</h1>
                <img src={item.src} className='w-7 h-7 rounded-full object-cover ml-4' />
                <h1 className='ml-2'>{item.name}</h1>
              </div>
              <div className='flex'>
                <h1 className='font-semibold'>{item.wins}</h1> <span>wins</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>

   
  )
}

export default RankingModel