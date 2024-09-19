import React, { useState } from 'react';
import Model from '../model/Model';
import RankingModel from '../model/RankingModel';
import { playersList, tournamentList, playerCardData,  playerHeading, tournamentHeading } from '../../utils/constants';
const Cards = ({ cardData }) => {

  const [open, setOpen] = useState(false);
  const [openRanking , setOpenRanking] = useState(false)
  const handleRankingModel = ()=>{
    setOpenRanking(true)
  }
  
  const handleRankingClose = () => {
    
    setOpenRanking(false)
  };

  const handleModelOpen = () => {
    setOpen(true);
  };

  const handleModelClose = () => {
    setOpen(false);
    
  };
  return (
    <>
      <div className='flex justify-evenly pt-10'>
        {cardData.map((item, index) => (
          <div key={index} className='bg-gray-50 w-[300px] h-[150px] p-5 rounded-xl mt-10'>
            <div className='flex justify-between'><h1>{item.h1}</h1>
              {index === 2 &&
              <button  className="text-blue-800" type="button" onClick={handleModelOpen}
>
  View Details
</button>}
              
              
              
              
              </div>
            <p className='font-semibold text-3xl mt-4'>{item.number}</p>

            <div className='flex'>
              <p className='mt-4'>{item.icon}</p>
              <p className='mt-3'>
                <span className={index === 0 ? 'text-green-700' : 'text-red-700'}>20%</span> {item.text}
              </p>
              <img src={item.src} className='w-20 ml-5' alt='icon' />
            </div>
          </div>
        ))}

        <div className='bg-gray-50 p-5 w-[350px] rounded-xl mt-10'>
          <div className='flex justify-between'>
          <h1>Alpha Padel Players Ranking</h1>
          <button  className='text-blue-800'
          onClick={ handleRankingModel}
          >View All</button>
          </div>
          <div className='flex bg-white justify-evenly mt-2'>
            <h1>01</h1>
            <img src='pic3.jpg' className='h-10 w-10 rounded-full object-cover ml-4' alt='player' />
            <p>Cheyenne Ekstrom</p>
            <p className='ml-3'><span className='font-semibold'>89%</span> wins</p>
          </div>
          <div className='flex bg-white justify-evenly mt-1'>
            <h1>02</h1>
            <img src='pic4.jpg' className='h-10 w-10 rounded-full object-cover ml-4' alt='player' />
            <p>Lydia Westervelt</p>
            <p className='ml-3'><span className='font-semibold'>82%</span> wins</p>
          </div>
        </div>
      </div>

      <Model open={open} onClose={handleModelClose}  playerHeading={playerHeading}  playersList={playersList} />
      <RankingModel openRanking={openRanking} onCloseRanking={handleRankingClose} />
    </>
  );
};

export default Cards;
