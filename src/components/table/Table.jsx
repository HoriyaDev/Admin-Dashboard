
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TournamentModel from '../model/TournamentModel';

// const Table = ({ playerData, playerHeading }) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showTournamentModel, setShowTournamentModel] = useState(false);
//   const [editName , setEditName] = useState()
//   const navigate = useNavigate();


//   useEffect(()=>{
//     const editData = JSON.parse(localStorage.getItem('input'))
//     setEditName(editData)
//     console.log( "edited ame",editName)
//   },[])
//   const handleNavigate = (item) => {
//     localStorage.setItem('selectedPerson', JSON.stringify(item));
//     localStorage.setItem('selectedTournament', JSON.stringify(item));
    
    
//     if (item.playerName) {
//       navigate('/profile'); 
//     } else {
//       setSelectedItem(item);
//       setShowTournamentModel(true); 
//     }
//   };


//   const closeTournamentModel = () => {
//     setShowTournamentModel(false);
//     setSelectedItem(null);
//   };

//   return (
//     <div className="overflow-y-auto h-64">
//       <table className="table-auto bg-red-300 w-[1270px] mx-auto rounded-lg">
//         <thead>
//           {playerHeading.map((item, index) => (
//             <tr key={index} className="text-center">
//               <th className="text-left p-3">{item.h1}</th>
//               <th>{item.h2}</th>
//               <th>{item.h3}</th>
//               <th>{item.h4}</th>
//               <th>{item.h5}</th>
//               <th>{item.h6}</th>
//               <th>{item.h7}</th>
//               <th className="ml-10">{item.h8}</th> 
//               <th>{item.h9}</th>
//             </tr>
//           ))}
//         </thead>
//         <tbody className="bg-blue-100">
//           {playerData.map((item, index) => (
//             <tr key={index} className="border-b-2 border-blue-500 text-center">
//               <td className="p-3 text-left">{item.playerName || item.tournamentName}</td>
//               <td>{item.playerId || item.date}</td>
//               <td>{item.ranking || item.level}</td>
//               <td>{item.wins || item.availablePlaces}</td>
//               <td>{item.preferences || item.playerJoined}</td>
//               <td>{item.gender || item.address}</td>
//               <td>{item.email || item.price}</td>
//               <td>{item.lastLogin || ''}</td>
//               <td>
//                 <button
//                   type='button'
//                   className="bg-white text-blue-600 rounded-full p-1 hover:bg-gray-200"
//                   onClick={() => handleNavigate(item)}
//                 >
//                   {item.playerName ? "View Profile" : "View Details"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showTournamentModel && selectedItem && (
//         <TournamentModel item={selectedItem} onClose={closeTournamentModel} />
//       )}
//     </div>
//   );
// };

// export default Table;


//correct table
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TournamentModel from '../model/TournamentModel';

const Table = ({ playerData, playerHeading }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showTournamentModel, setShowTournamentModel] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (item) => {
     localStorage.setItem('selectedPerson', JSON.stringify(item));
   localStorage.setItem('selectedTournament', JSON.stringify(item));
    
    if (item.playerName) {
      navigate('/profile'); 
    } else {
      setSelectedItem(item);
      setShowTournamentModel(true); 
    }
  };

  const closeTournamentModel = () => {
    setShowTournamentModel(false);
    setSelectedItem(null);
  };

  return (
    <div className="overflow-y-auto h-64">
      <table className="table-auto bg-red-300 w-[1270px] mx-auto rounded-lg">
        <thead>
          {playerHeading.map((item, index) => (
            <tr key={index} className="text-center">
              <th className="text-left p-3">{item.h1}</th>
              <th>{item.h2}</th>
              <th>{item.h3}</th>
              <th>{item.h4}</th>
              <th>{item.h5}</th>
              <th>{item.h6}</th>
              <th>{item.h7}</th>
              <th className="ml-10">{item.h8}</th> 
              <th>{item.h9}</th>
            </tr>
          ))}
        </thead>
        <tbody className="bg-blue-100">
          {playerData.map((item, index) => (
            <tr key={index} className="border-b-2 border-blue-500 text-center">
              <td className="p-3 text-left">{item.playerName || item.tournamentName}</td>
              <td>{item.playerId || item.date}</td>
              <td>{item.ranking || item.level}</td>
              <td>{item.wins || item.availablePlaces}</td>
              <td>{item.preferences || item.playerJoined}</td>
              <td>{item.gender || item.address}</td>
              <td>{item.email || item.price}</td>
              <td>{item.lastLogin || ''}</td>
              <td>
                <button
                  type='button'
                  className="bg-white text-blue-600 rounded-full p-1 hover:bg-gray-200"
                  onClick={() => handleNavigate(item)}
                >
                  {item.playerName ? "View Profile" : "View Details"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showTournamentModel && selectedItem && (
        <TournamentModel item={selectedItem} onClose={closeTournamentModel} />
      )}
    </div>
  );
};

export default Table;


