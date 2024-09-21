
import React, { useEffect } from 'react'
import { MdClose } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { playersList } from '../../utils/constants';
const Edit = ({ open, onCloseModel, onSaveEdit }) => {
  const location = useLocation();
  const person = location.state?.selectedPerson;
  const id = location.state?.selectedIndex;

  const [newData, setNewData] = useState({
    playerName: person?.playerName || '',
    playerEmail: person?.email || '',
    playerWins: person?.wins || '',
    playerPreferences: person?.preferences || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



const handleSave = () => {
  console.log("Type of tournamentList[selectedIndex]:", typeof playersList[id]);
  console.log("Value:", playersList[id]);

  // Check if tournamentList[selectedIndex] is an object
  if (typeof playersList[id] === 'object' && !Array.isArray(playersList[id])) {
      // Merge the new data with the existing object at selectedIndex
      playersList[id] = {
          ...playersList[id],  // keep existing data
          ...newData                        // overwrite with new data
      };
  } else {
      console.error("Expected an object but found:", playersList[id]);
  }

  console.log("Updated tournamentList:", playersList);

  
  onSaveEdit(newData);
  onCloseModel(); 
};


useEffect(()=>{
  console.log(newData)
  console.log(playersList)
}, [])


// const handleSave = () => {
//   if (newData.playerName.trim() && newData.playerEmail.trim()) {
//     onSaveEdit(newData); // Pass edited data
//     onCloseModel();
//   } else {
//     alert("Please fill in all fields before saving.");
//   }
// };


  if (!open) return null;

  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 '>
      <div className='relative bg-white w-[520px] h-[550px] rounded-xl shadow p-5'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Edit Profile</h1>
          <button className="bg-blue-gray-100 rounded-full" onClick={onCloseModel}>
            <MdClose size={'25px'} className='text-black' />
          </button>
        </div>
        <img src="pic4.jpg" className='w-20 h-20 mx-auto mt-5 rounded-full object-cover' />
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-10 pl-7'>
          <label htmlFor='playerName' className='text-blue-700'>Player Name</label>
          <input type="text" id="playerName" name='playerName' placeholder='Name' value={newData.playerName} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='email' className='text-blue-700'>Email</label>
          <input type="email" id="email" name='playerEmail' placeholder='abc@gmail.com' value={newData.playerEmail} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='playerWins' className='text-blue-700'>Wins</label>
          <input type="text" id="playerWins" name='playerWins' placeholder='Wins' value={newData.playerWins} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
          <label htmlFor='preferences' className='text-blue-700'>Preferences</label>
          <input type="text" id="preferences" name='playerPreferences' placeholder='Preferences' value={newData.playerPreferences} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
        </div>
        <div className='flex justify-between mt-5'>
          <button type='button' className='bg-blue-gray-600 px-5 py-2 rounded-full text-white' onClick={onCloseModel}>Cancel</button>
          <button type='button' className='bg-blue-600 px-5 py-2 rounded-full text-white' onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;