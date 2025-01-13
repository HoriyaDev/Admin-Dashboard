


// import React, { useState } from 'react';
// import { CiEdit } from "react-icons/ci";
// import { TbLogout2 } from "react-icons/tb";
// import EditProfile from '../model/EditProfile';
// import { useNavigate } from 'react-router-dom';

// const LogOut = ({ setName, setImage }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleLogOut = () => {
//     localStorage.removeItem("logged");
//     navigate('/');
//   };

//   return (
//     <div className='absolute right-4 md:right-16 w-48 bg-blue-gray-50 z-50 p-4 shadow-lg rounded'>
//       <div className='flex justify-evenly items-center'>
//         <button className='flex' onClick={handleOpen}>
//           <CiEdit size={'25px'} className='mr-2' />
//           <p className='text-xl ml-2'>Edit Profile</p>
//         </button>
//       </div>
//       <div className='flex justify-evenly items-center mt-6'>
//         <button type='button' className='flex' onClick={handleLogOut}>
//           <TbLogout2 size={'25px'} className='text-red-600 mr-6' />
//           <p className='text-xl text-red-600'>LogOut</p>
//         </button>
//       </div>
//       <EditProfile open={open} onClose={handleClose} setName={setName} setImage={setImage} />
//     </div>
//   );
// };

// export default LogOut;




import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import EditProfile from '../model/EditProfile';
import { useNavigate } from 'react-router-dom';

const LogOut = ({ setName, setImage }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("logged");
    navigate('/');
  };

  return (
    <div className='absolute right-5 z-10 mt-[68px]  w-[188px] pr-14 py-5 pl-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='flex flex-col justify-start items-center'>
        <button className='flex items-center mb-4' onClick={handleOpen}>
          <CiEdit size={'25px'}  />
          <p className='text-lg ml-[3px]  '>Edit Profile</p>
        </button>
        <button type='button' className='flex mr-5  ' onClick={handleLogOut}>
          <TbLogout2 size={'25px'} className='text-red-600 ' />
          <p className='text-lg text-red-600 ml-[3px] '>Log Out</p>
        </button>
      </div>
      <EditProfile open={open} onClose={handleClose} setName={setName} setImage={setImage} />
    </div>
  );
};

export default LogOut;