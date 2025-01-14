// import React, { useState  , useEffect} from 'react'
// import { IoMdArrowDropdown } from "react-icons/io";
// import LogOut from '../logout/LogOut';

// const Header = () => {
//   const [open , setOpen] = useState(false)
//   const [name , setName] = useState("")

 
//     //  const getName = JSON.parse(localStorage.getItem('user'))
//     //  console.log("🚀 ~ Header ~ getName:", getName)
//     //  setName(getName.fname)
//    useEffect(()=>{
//     const getName = JSON.parse(localStorage.getItem('user'))
//     console.log("🚀 ~ Header ~ getName:", getName)
//     setName(getName.fname)
//    }, [])
    

//   const handleOpen = () =>{
    

//     setOpen(!open)
//   }

//   const handleClose = () =>{
//     setOpen(false)
//   }
  
//   return (
//     <> 
//       <div className='relative flex justify-between bg-red-200 pt-2 px-10 rounded-2xl' >
//         <div>
//           <img src='Logo.png' className='object-contain mr-20' alt="Logo"/>
//         </div>
//         <div className='flex justify-evenly ' >
//           <img src='Profile.jpg' className='h-12 w-12 rounded-full object-cover m-2' alt="Profile"/>
//           <div className='flex-col' >
//             <h1 className='text-2xl font-bold'>{name}</h1>
//             <p className='bg-blue-100 rounded-full w-20 text-center text-[12px]'>SuperAdmin</p>
//           </div>
//           <button type='button' onClick={handleOpen}>
//             <IoMdArrowDropdown className='ml-3' />
//           </button>
//         </div>   
//       </div>
//       {open && <LogOut />}  
//     </>
//   )
// }

// export default Header




import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import LogOut from '../logout/LogOut';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(""); // Add state for image URL

  useEffect(() => {
    const getName = JSON.parse(localStorage.getItem('user'));
    if (getName) {
      setName(getName.fname);
      setImage(getName.image); // Get the image URL
    }
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='relative flex justify-between w-[1348px] mx-auto bg-red-200 pt-2 px-10 rounded-2xl'>
        <div>
          <img src='Logo.png' className='object-contain mr-20' alt="Logo"/>
        </div>
        <div className='flex justify-evenly'>
          <img src={ image|| 'pic5.jpg' } className='h-12 w-12 rounded-full object-cover m-2' alt="Profile"/>
          <div className='flex-col'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='bg-blue-100 rounded-full w-20 text-center text-[12px]'>SuperAdmin</p>
          </div>
          <button type='button' onClick={handleOpen}>
            <IoMdArrowDropdown className='ml-3' />
          </button>
        </div>   
        {open && <LogOut setName={setName} setImage={setImage} />}  
      </div>
     
    </>
  );
}

export default Header;