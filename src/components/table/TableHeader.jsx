

// import { Filter } from '@mui/icons-material';
// import React, { useState } from 'react'
// import { IoSearch } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const TableHeader = ({heading , playerArray}) => {

//     const [searchTerm, setSearchTerm] = useState(playerArray);
    

//     const handleSearch = () => {
//         const filter = playerArray.filter((item) => 
//             item.PlayerName.toLowerCase().includes(searchTerm.toLowerCase()) // Fixed includes and structure
//         );
//         console.log("🚀 ~ handleSearch ~ filter:", filter);
        
//         setSearchTerm(filter);
//         console.log("🚀 ~ TableHeader ~ searchTerm:", searchTerm);
//     };
    

//     return (
//         <>

//             <div className='flex justify-between items-center p-4'>
//                 <h1 className='text-lg font-bold'>{heading}</h1>
//                 <div className='relative ml-auto mr-6'>
//                     <input
//                         type='search'
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className='w-96 pl-10 pr-4 py-2 border border-blue-300 rounded-3xl focus:outline-none'
//                         placeholder='Search any player by name'
//                     />
//                     <button type='button'  onClick={handleSearch}>
//                     <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
//                     </button>
//                 </div>
//                 <div className='relative'>
//                     <h1 className='bg-white w-36 p-2 rounded-full text-sm border border-blue-300'>show 10 rows</h1>
//                     <RiArrowDropDownLine size={'40px'} className='absolute inset-y-0 right-3' />
//                 </div>
//             </div>

//         </>
//     )
// }

// export default TableHeader




import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const TableHeader = ({ heading, onSearch , onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };


  const handleSelectChange = (e) => {
    const value = parseInt(e.target.value); // Convert string to number
    console.log("🚀 ~ handleArray ~ value:", value)
    onSelect(value); // Pass the selected value to parent component
  };

  return (
    <div className='flex justify-between items-center p-4'>
      <h1 className='text-lg font-bold'>{heading}</h1>
      <div className='relative ml-auto mr-6'>
        <input
          type='search'
          value={searchTerm}
          onChange={handleSearchInput}
          className='w-96 pl-10 pr-4 py-2 border border-blue-300 rounded-3xl focus:outline-none'
          placeholder='Search any player by name'
        />
        <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
      </div>
      <div className='relative'>
        {/* <h1 className='bg-white w-36 p-2 rounded-full text-sm border border-blue-300'>show 10 rows</h1>
        <button type='button '>
        <RiArrowDropDownLine size={'40px'} className='absolute inset-y-0 right-3' />
        </button> */}

<select onChange={handleSelectChange} className='border border-blue-300 p-2 rounded-lg'>
          <option value={5}>Select 5 rows</option>
          <option value={10}>Select 10 rows</option>
          <option value={15}>Select 15 rows</option>
        </select>
      </div>
    </div>
  );
};

export default TableHeader;
