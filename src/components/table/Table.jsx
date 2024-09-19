

//correct table
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TournamentModel from '../model/TournamentModel';

const Table = ({ playerData, playerHeading }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showTournamentModel, setShowTournamentModel] = useState(false);
  const [showData, setShowData] = useState({
    name: "",
    place: "",
  })
  const [editedData, setEditedData] = useState(null);
  const navigate = useNavigate();



  const handleNavigate = (item, i) => {
    
    
    if (item.playerName) {
      navigate('/profile'); 
    } else {
      setSelectedItem(item);
      setSelectedIndex(i); 
      setShowTournamentModel(true); 
    }
  };
  


  

  const handleSaveEditedData = (updatedData) => {
    // Find the item in playerData and update it
    const updatedPlayerData = playerData.map((item) =>
      item.tournamentName === selectedItem.tournamentName ? updatedData : item
    );
    setEditedData(updatedPlayerData); // Update edited data state
    setSelectedItem(null); // Reset selection
    setShowTournamentModel(false); // Close the modal
  };


  const closeTournamentModel = () => {
    setShowTournamentModel(false);
    setSelectedItem(null);
  };

  return (
    <div className="overflow-y-auto">
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
        <tbody className="bg-blue-100 ">
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
                  onClick={() => handleNavigate(item, index)}
                >
                  {item.playerName ? "View Profile" : "View Details"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showTournamentModel && selectedItem && (
        <TournamentModel item={selectedItem} onClose={closeTournamentModel}
          onSave={handleSaveEditedData} selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Table;



