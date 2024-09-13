import React from 'react'
import { joinedPlayers } from '../../utils/constants'


const JoinedPlayer = () => {
    
  return (
    <>
    <h1 className='font-medium'>Player that already joined</h1>
    {joinedPlayers.map((item, index) => (
  <div key={index} className="bg-blue-gray-100 mt-2 p-3 rounded-lg">
    <div className="flex justify-between items-center">
     
      <div className="flex items-center space-x-4">
        <img src={item.src} className="w-10 h-10 object-cover rounded-full" />
        <div>
          <h1 className='font-medium'>{item.name}</h1>
          <p>{item.text}</p>
        </div>
      </div>

      
      <div>
        <h1><span className='font-medium'>Email:   </span>{item.email}</h1>
        <p><span className='font-medium'>License number:   </span>{item.licenseNumber}</p>
      </div>

      
      <div>
        <h1><span className='font-medium'>Telephone:   </span>{item.telephone}</h1>
        <p><span className='font-medium'>Winning Ratio   </span>{item.winningRatio}</p>
      </div>

      <button type='button' className='bg-yellow-900 text-white px-4 py-2 rounded-full'>Reimburse</button>
    </div>
  </div>
))}

    
    </>
  )
}

export default JoinedPlayer