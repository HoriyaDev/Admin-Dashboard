
import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { playersList } from '../../utils/constants';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Edit = ({ open, onCloseModel, onSaveEdit }) => {
    const location = useLocation();
    const person = location.state?.selectedPerson;
    const id = location.state?.selectedIndex;

    const [newData, setNewData] = useState({
        playerName: person?.playerName || '',
        email: person?.email || '',
        wins: person?.wins || '',
        preferences: person?.preferences || '',
        gender: person?.gender || '',
        ranking: person?.ranking || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSave = () => {
        // Check if all fields are filled
        if (!newData.playerName || !newData.email || !newData.wins || !newData.preferences) {
            alert("Please fill in all fields before saving.");
            return;
        }
    
        // Check if the player at the selected index exists and is an object
        if (typeof playersList[id] === 'object' && !Array.isArray(playersList[id])) {
            // Update the player data with the new information
            playersList[id] = {
                ...playersList[id],
                ...newData // Merges all updated fields
            };
    
            // Show a success toast notification
            toast.success("Changings have been saved!", {
                position: "top-center",
                autoClose: 2000,  // Duration of the toast (2 seconds)
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    
            
            setTimeout(() => {
                onSaveEdit(playersList[id]);
                onCloseModel();  
            }, 2000);  
        } else {
            console.error("Expected an object but found:", playersList[id]);
        }
    };
    
    
    
    useEffect(() => {
        console.log(newData);
        console.log(playersList);
    }, [newData]);

    if (!open) return null;

    return (
        <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50'>
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
                    <input type="email" id="email" name='email' placeholder='abc@gmail.com' value={newData.email} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
                </div>
                <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
                    <label htmlFor='playerWins' className='text-blue-700'>Wins</label>
                    <input type="text" id="playerWins" name='wins' placeholder='Wins' value={newData.wins} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
                </div>
                <div className='border-blue-600 border-2 flex flex-col rounded-full p-1 mt-4 pl-7'>
                    <label htmlFor='preferences' className='text-blue-700'>Preferences</label>
                    <input type="text" id="preferences" name='preferences' placeholder='Preferences' value={newData.preferences} onChange={handleInputChange} className='border-none rounded-full focus:outline-none'/>
                </div>
                <div className='flex justify-between mt-5'>
                    <button type='button' className='bg-blue-gray-600 px-5 py-2 rounded-full text-white' onClick={onCloseModel}>Cancel</button>
                    <button type='button' className='bg-blue-600 px-5 py-2 rounded-full text-white' onClick={handleSave}>Save Changes</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Edit;