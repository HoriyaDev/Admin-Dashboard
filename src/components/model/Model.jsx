

import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { reportedPlayer } from '../../utils/constants';

const Model = ({ open, onClose, playerHeading, playersList }) => {
  if (!open) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative top-0 bg-white rounded-lg shadow dark:bg-gray-700 w-[1200px] pb-4" // Added bottom padding here
        onClick={handleModalClick}
      >
        <div className='flex justify-between p-3'>
          <h1 className='font-semibold text-xl'>Reported Players</h1>
          <button onClick={onClose}><MdOutlineCancel /></button>
        </div>
        <div className='overflow-y-auto h-[500px]'>
          <table className="table-auto w-[1150px] mx-auto rounded-lg overflow-hidden pb-4"> 
            <thead>
              <tr className='bg-cyan-600 text-center rounded-t-lg'>
                <th className='text-left p-3'>Player</th>
                <th>Player Id</th>
                <th>Player Email</th>
                <th>Reported By</th>
                <th>Reason</th>
                <th>Report Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='bg-blue-100'>
              {reportedPlayer.map((item, index) => (
                <tr key={index} className='border-b-2 border-blue-500 text-center'>
                  <td className='flex items-center text-left p-2'>
                    <img src={item.src} className='w-7 h-7 rounded-full object-cover ml-2  mr-2' alt="player" />
                    {item.player}
                  </td>
                  <td>{item.playerId}</td>
                  <td>{item.playerEmail}</td>
                  <td>{item.reportBy}</td>
                  <td>{item.reason}</td>
                  <td>{item.reportDate}</td>
                  <td>
                    <div>
                      <button className='bg-white p-1 text-blue-800 rounded-3xl'>View Profile</button>
                      <button className='bg-blue-800 p-1 rounded-3xl ml-3 text-white'>Mark Resolved</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Model;
