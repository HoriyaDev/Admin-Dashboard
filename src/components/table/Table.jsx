import React, { useState } from 'react'
import { playersList , tournamentList} from '../../utils/constants'

const Table = ({playerData , playerHeading}) => {

  // const [data , setData] =useState(playersList)

  // const handleChange = () =>{
  //   setData(tournamentList)
  // }
  return (
    <>

{/* <button type="button" onClick={handleChange}>tournament</button> */}
     <div  className='overflow-y-auto h-64 ' >
      
        <table className="table-auto bg-red-300  w-[1270px] mx-auto rounded-lg  "  >
        <thead  >  
        {/* <tr  className='text-center  '>  
          <th className='text-left p-3'>Player</th>  
          <th>Player Id</th>  
          <th >Ranking</th>  
          <th>Wins</th>  
          <th>Preference</th>  
          <th>Gender</th>  
          <th>Email</th>  
          <th>Last Login</th>
          <th>Action</th>  
           
        </tr>   */}

        {playerHeading.map((item) =>(
          <tr  className='text-center  '>  
          <th className='text-left p-3'>{item.h1}</th>  
          <th>{item.h2}</th>  
          <th >{item.h3}</th>  
          <th>{item.h4}</th>  
          <th>{item.h5}</th>  
          <th>{item.h6}</th>  
          <th>{item.h7}</th>  
          <th>{item.h8}</th>
          <th>{item.h9}</th>  
           
        </tr>
        ))}


        
      </thead>
      <tbody className='bg-blue-100'>
          {playerData.map((item, index) => (
            <tr key={index} className='border-b-2 border-blue-500 text-center'>
              <td className='p-3 text-left'>{item.playerName || item.tournamentName}</td>
              <td>{item.playerId || item.date}</td>
              <td>{item.ranking || item.level}</td>
              <td>{item.wins || item.availablePlaces}</td>
              <td>{item.preferences || item.playerJoined}</td>
              <td>{item.gender || item.address}</td>
              <td>{item.email || item.price}</td>
              <td>{item.lastLogin || ""}</td>
              <td>
                <button className='bg-white text-blue-600 rounded-full p-1 hover:bg-gray-200'>
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
     </div>

    
    </>
  )
}

export default Table