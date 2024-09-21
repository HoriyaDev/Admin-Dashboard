

import React from 'react'
import { MdClose } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';






const Edit = ({ open, onCloseModel }) => {
  const location = useLocation();
  const person = location.state?.selectedPerson;
  const id = location.state?.selectedIndex;
  const shouldShowAlert = location.state?.handleEditedProfile;
  const onSaveEdit = location.state?.onSaveEdit; // Access the flag

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
   
      alert("Changes saved successfully!");
  
    // Call the passed onSaveEdit function to update the data in Dashboard
    
    onCloseModel(); // Close the modal after saving changes
  };

  if (!open) return null;

     return (
        <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 '>
          <div className='relative bg-white w-[520px] h-[550px] rounded-xl shadow p-5'>
            <div className='flex justify-between'>
              <h1 className='text-xl font-semibold'>Edit Profile</h1>
              <button className=" bg-blue-gray-100   rounded-full" >
                <MdClose size={'25px'} className='text-black' onClick={onCloseModel} />
              </button>
            </div>
            <img src="pic4.jpg" className='w-20 h-20  mx-auto mt-5 rounded-full object-cover' />
            <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-10 pl-7'>
              <label htmlFor='playerName' className='text-blue-700'>Player Name</label>
              <input type="text"  id="playerName" name='playerName' placeholder='Name' value={newData?.playerName} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
            </div>
            <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
              <label htmlFor='email' className='text-blue-700'>Email</label>
              <input type="email"  id="email" name='email' placeholder='abc@gamil.com' value={newData?.playerEmail} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
            </div>
            <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
              <label htmlFor='playerWins' className='text-blue-700'>Wins</label>
              <input type="text"  id="playerWins" name='playerWins' placeholder='Mobile Number' value={newData?.playerWins}  onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
            </div>
            <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
              <label htmlFor='preferences' className='text-blue-700'>Preferences</label>
              <input type="text"  id="preferences" name='preferences' placeholder='Address' value={newData?.playerPreferences}  onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
            </div>
            <div className='flex justify-between mt-5  '>
              <button type='button' className='bg-blue-gray-600 px-5 py-2 rounded-full text-white'>Cancel</button>
              <button type='button' className='bg-blue-600 px-5 py-2 rounded-full text-white' onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )
};


export default Edit;



