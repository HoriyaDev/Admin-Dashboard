

import React from 'react';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import ProfileSetup from '../../components/View Profile/profile setup';
import Ranking from '../../components/View Profile/Ranking';
import Partner from '../../components/View Profile/Partner';
import { CiEdit } from "react-icons/ci";

const Profile = () => {
 const navigate  = useNavigate()
 const handleNavigate = ()=>{
    navigate('/dashboard'); 
 }

  return (
    <>
      <Header />
      <div className="bg-blue-50 w-[1320px] h-[560px]  mx-auto rounded-xl">
        <div className='flex justify-center '>
        <button type="button" className="bg-white mt-3 border-black border-2 px-7 py-2 rounded-full"
        onClick={handleNavigate}>
          Back to Dashboard
        </button>
        </div>
        <div className='bg-white w-[800px] h-[475px] mx-auto mt-5 rounded-2xl p-4'>
            <p className='text-xl font-semibold'>Player Profile</p>
           <div className='flex'>
           <ProfileSetup />
           <div className='flex flex-col'>
           <Ranking />
          <Partner />

           </div>
           </div>

           <div className='flex '> 
            <button type='button' className='bg-blue-400  px-4 rounded-3xl'><CiEdit /></button>
            <button type='button'  className='bg-gray-200 text-red-500 rounded-full px-2 py-1'>Delete Profile</button>
            <button type='button'  className='bg-yellow-800 rounded-full px-2 py-2'>Send Warning</button>
            <button type='button'  className='bg-blue-400 rounded-full px-[120px] mt-4 py-2 ml-32'>View Matches</button>
        </div>

        </div>
        
      </div>
    </>
  );
};

export default Profile;
