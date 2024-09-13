import React from 'react';

import { IoIosArrowRoundBack } from "react-icons/io";
import JoinedPlayer from '../joined Player/JoinedPlayer';
import { useNavigate } from 'react-router-dom'

const TournamentModel = ({ item, onClose }) => {


 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 w-[1050px] h-[610px] rounded-lg shadow-lg">
        <div className='flex  justify-between items-center'>
          <div className='flex'>
            <button type='button' onClick={onClose} className='bg-blue-gray-50' ><IoIosArrowRoundBack size={'25px'} />
            </button>
            <h1 className='font-semibold text-xl ml-4'> Tournament Details</h1>
          </div>
          <button type='button' className='bg-blue-900 text-white px-5 py-2 rounded-3xl'>Edit Details</button>
        </div>


        <div className='w-[1000px] mx-auto h-[270px] p-2 bg-blue-50 mt-2 '>
         <div className='flex justify-between items-center'>
            <h1 className='font-medium text-blue-900 '>{item.tournamentName}</h1>
            <p className='text-amber-600 text-lg font-bold	'>{item.price}</p>
          </div>

          
            <div className='flex justify-between items-center mt-5'>
              <div>
              
              <p > <span className='font-medium'>Address:    </span>{item.address}</p>
              <p > <span className='font-medium'>Date:    </span>{item.date}</p>
              <p > <span className='font-medium'>Available Places:    </span>{item.availablePlaces}</p>
              </div>
              <div className='flex flex-col'>
              
              <div className='flex items-center'>
              <p className='font-medium' > Created By:</p>
              <img src='pic4.jpg' className='w-6 h-6 object-cover rounded-full ml-4' />
              <p className='ml-1'>{item.createdBy}</p>
            </div>
            
              <p > <span className='font-medium'>
              Level:    </span>{item.level}</p>
              <p > <span className='font-medium'>Player Joined:    </span>{item.playerJoined}</p>
              </div>
            </div>
            <div className='mt-3  '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27225.55651582602!2d74.3276544!3d31.463833599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726227335956!5m2!1sen!2s" width="980" height="130"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

        <div className=' w-[1000px] h-[200px] mx-auto'>
          <JoinedPlayer />



        </div>

        

      </div>
    </div>
  );
};

export default TournamentModel;
