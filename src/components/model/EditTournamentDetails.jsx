

import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import SaveChanges from './SaveChanges';
import {tournamentList} from '../../utils/constants'

const EditTournamentDetails = ({ item,open, onClose, onSave,selectedIndex }) => {
  const [openModel , setOpenModel] = useState(false);
  
 
  const [newData, setNewData] = useState({
    tournamentName: item.tournamentName, 
    availablePlaces: item.availablePlaces,
    address: item.address,
    price: item.price,
    date:item.date
  });

  
  useEffect(() => {
   
      // const storedTournament = localStorage.getItem('selectedTournament');
      // if (storedTournament) {
      //   const parsedData = JSON.parse(storedTournament);
        setNewData(item);
        console.log(newData)
    //   } else {
    //     console.log("No tournament data found in localStorage");
    //   }
    }
,[])
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  

  const handleSave = () => {
    console.log("Type of tournamentList[selectedIndex]:", typeof tournamentList[selectedIndex]);
    console.log("Value:", tournamentList[selectedIndex]);

    // Check if tournamentList[selectedIndex] is an object
    if (typeof tournamentList[selectedIndex] === 'object' && !Array.isArray(tournamentList[selectedIndex])) {
        // Merge the new data with the existing object at selectedIndex
        tournamentList[selectedIndex] = {
            ...tournamentList[selectedIndex],  // keep existing data
            ...newData                        // overwrite with new data
        };
    } else {
        console.error("Expected an object but found:", tournamentList[selectedIndex]);
    }

    console.log("Updated tournamentList:", tournamentList);

    
    onSave(newData);
    setOpenModel(true);
};



  

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-[450px] h-[650px] rounded-2xl p-3 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-gray-50 p-1 rounded-full"
        >
          <RxCross2 />
        </button>

        <img src='Logo.png' className='mx-auto mt-2' alt='logo' />
        <p className='text-center font-bold text-3xl mt-4'>Edit Tournament</p>
        <p className='text-center text-blue-gray-200 text-sm mt-2'>
          Enter your information below
        </p>

        <div className='p-4'>
          <div className='flex flex-col'>
            <label htmlFor='tournamentName' className='font-medium'>Tournament Name</label>
            <input
              type='text'
              id='tournamentName'
              value={newData.tournamentName}
              onChange={handleInputChange}
              className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='place' className='font-medium'>Total Places</label>
            <input
              type='text'
              id='place'
              value={newData.
                availablePlaces
                }
              onChange={handleInputChange}
              className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='address' className='font-medium'>Address</label>
            <input
              type='text'
              id='address'
              value={newData.address}
              onChange={handleInputChange}
              className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
            />
          </div>

          <div className='mt-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27225.55651582602!2d74.3276544!3d31.463833599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726227335956!5m2!1sen!2s" width="400" height="130" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label htmlFor='price' className='font-medium'>Price</label>
              <input
                type='text'
                id='price'
                value={newData.price}
                onChange={handleInputChange}
                className='p-1 pl-2 w-40 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='date' className='font-medium'>Date</label>
              <input
                type='text'
                id='date'
                value={newData.date}
                onChange={handleInputChange}
                className='p-1 pl-2 w-40 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
              />
            </div>
          </div>

          <button
            type='button'
            onClick={handleSave}
            className="bg-blue-500 w-96 text-white rounded-full py-2 mt-4"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTournamentDetails;







// import React from 'react'
// import { RxCross2 } from "react-icons/rx";
// const EditTournamentDetails = ({ open, onClose }) => {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" >
//       <div className="bg-white w-[450px] h-[600px] rounded-2xl text-center p-3 relative">
        
//         <button  type="button" onClick={onClose} className="absolute top-4 right-4 bg-blue-gray-50 p-1 rounded-full">
//           <RxCross2 />
//         </button>
//        <img src='Logo.png' className='mx-auto mt-2' alt='logo'  /> 
//        <p className='text-center font-bold text-3xl mt-4' >Edit Tournament</p>
//        <p className='text-center text-blue-gray-200 text-sm mt-2'>Enter your information below</p>

//        <div className='p-4'>
//            <div className='flex flex-col'>
//              <label htmlFor='tournamentName' className='font-medium'>Tournament Name</label>
//              <input
//               type='text'
//               id='tournamentName'
              
              
//               className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
//             />
//           </div>

//           <div className='flex flex-col'>
//             <label htmlFor='totalPlaces' className='font-medium'>Total Places</label>
//             <input
//               type='text'
//               id='totalPlaces'
             
//               className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
//             />
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor='address' className='font-medium text-left' >Address</label>
//             <input
//               type='text'
//               id='address'
              
//               className='p-1 pl-2 rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
//             />
//           </div>

//           <div className='mt-3'>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27225.55651582602!2d74.3276544!3d31.463833599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726227335956!5m2!1sen!2s" width="400" height="130" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//           </div>

//          <div className='flex justify-between'>
//          <div className='flex flex-col'>
//             <label htmlFor='price' className='font-medium'>Price</label>
//             <input
//               type='text'
//               id='price'
              
//               className='p-1 pl-2 w-40  rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
//             />
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor='date' className='font-medium'>Date</label>
//             <input
//               type='text'
//               id='date'
              
//               className='p-1 pl-2 w-40  rounded-3xl focus:outline-none border-2 border-gray-400 mt-2'
//             />
//           </div>
//          </div>
     
//           <button
//             type='button'
           
//             className="bg-blue-500 w-96 text-white rounded-full py-2 mt-4"
//          >
//             Save Changes
//            </button>
//         </div>
       
//       </div>

      


//     </div>
//   );
// }
// export default EditTournamentDetails;