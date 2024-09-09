
import React from 'react';

const ProfileSetup = () => {
  return (
    <div>
      <div className="relative bg-blue-100 w-[350px] rounded-2xl h-[230px] text-center mt-32">
      
        <div className="absolute inset-x-0 top-[-40%] flex justify-center">
          <div className="relative flex flex-col w-40 h-40 opacity-90 p-1 bg-gradient-to-b from-black to-yellow-400 rounded-full  items-center justify-center ">
           
            <img
              src="pic4.jpg"
              className="w-28 h-28 object-cover rounded-full"
              alt="Profile"
            />
             
          </div>
        </div>
        <div className="relative flex flex-col items-center"> 
          <h1 className="font-bold mt-20">Muhammad Taimoor</h1>
          <p >m.taimoor@example.com</p>
          <p className='bg-white rounded-full py-1 px-2 mt-3' >Right Handed</p>
          <p className='bg-white rounded-full py-1 px-2 text-red-500 mt-3'>Profile Reports: 0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;