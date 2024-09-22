


import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { RiImageEditFill } from "react-icons/ri";

const EditProfile = ({ open, onClose }) => {
    const defaultImage = 'pic4.jpg'
    const [newData, setNewData] = useState({
        fname: "",
        lname: "",
        email: "",
        oldPassword: "", 
        image: "" // Ensure this matches your state
    });

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('user'));
        if (profileData) {
            setNewData(profileData);
        }
    }, []);

    if (!open) return null;

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setNewData((prevData) => ({
                ...prevData,
                image: imageUrl
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(newData));
        console.log("Updated data: ", newData);
        onClose(); // Close modal after saving
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg shadow w-[600px] h-[580px] p-5"
                onClick={handleContentClick}
            >
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold'>Edit Profile</p>
                    <button onClick={onClose}>
                        <MdClose size={'25px'} className='text-black' />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='relative '>
                        <img
                            src={newData.image ||{defaultImage}}
                            alt="Profile"
                            className='w-20 h-20 rounded-full object-cover mx-auto mt-2 '
                        />
                        <input
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            onChange={handleImageChange}
                            className='hidden' // Keep this hidden if you want to use the button to trigger
                        />
                        <button
                            type='button'
                            className='absolute bottom-4 right-[230px] transform translate-x-1 translate-y-1 bg-blue-600 rounded-full p-1 shadow text-white'
                            onClick={() => document.getElementById('image').click()} // Trigger file input
                        >
                            <RiImageEditFill size={15} />
                        </button>
                    </div>


               


                    <div className='flex  mt-4'>
                        <div className='flex flex-col mt-2'>
                            <label htmlFor='fname' className='mb-2'>First Name</label>
                            <input
                                type='text'
                                id='fname'
                                name='fname'
                                placeholder='First Name'
                                value={newData.fname}
                                onChange={handleInputChange}
                                className='w-[270px] p-2 rounded-full border-2'
                            />
                        </div>
                        <div className='flex flex-col mt-2 ml-2 '>
                            <label htmlFor='lname' className='mb-2'>Last Name</label>
                            <input
                                type='text'
                                id='lname'
                                name='lname'
                                placeholder='Last Name'
                                value={newData.lname}
                                onChange={handleInputChange}
                                className='w-[270px] p-2 rounded-full  border-2'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col mt-4'>
                        <label htmlFor='email' className='mb-2'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='abc@example.com'
                            value={newData.email}
                            onChange={handleInputChange}
                            className='w-full p-2 rounded-full border-2'
                        />
                    </div>

                    <div className='flex justify-between mt-10'>
                        <div className='flex flex-col'>
                            <label htmlFor='oldPassword' className='mb-2'>Old Password</label>
                            <input
                                type='password'
                                id='oldPassword'
                                name='oldPassword'
                                value={newData.password}
                                placeholder='Old Password'
                                onChange={handleInputChange}
                                className='w-[270px] p-2 rounded-full border-2'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='newPassword' className='mb-2'>New Password</label>
                            <input
                                type='password'
                                id='newPassword'
                                name='newPassword'
                                placeholder='New Password'
                                className='w-[270px] p-2 rounded-full border-2'
                            />
                        </div>
                    </div>

                    <div className='flex justify-between mt-10'>
                        <button
                            type='button'
                            className='bg-gray-500 py-2 px-7 rounded-full text-white'
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='bg-blue-600 py-2 px-7 rounded-full text-white'
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;



// import React, { useEffect, useState } from 'react';
// import { MdClose } from "react-icons/md";
// import { RiImageEditFill } from "react-icons/ri";

// const EditProfile = ({ open, onClose }) => {
//     const defaultImage = 'pic4.jpg'; // Set your default image URL here
//     const [newData, setNewData] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         oldPassword: "", 
//         image:  defaultImage
//     });

//     useEffect(() => {
//         const profileData = JSON.parse(localStorage.getItem('user'));
//         console.log("🚀 ~ useEffect ~  profileData:",  profileData)
        
//         if (profileData) {
//             setNewData((prevData) => ({
//                 ...prevData,
//                 image: profileData.image || defaultImage // Use default if no image
//             }));
//         }
//     }, []);

//     if (!open) return null;

//     const handleContentClick = (e) => {
//         e.stopPropagation();
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setNewData((prevData) => ({
//                 ...prevData,
//                 image: imageUrl
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('user', JSON.stringify(newData));
//         console.log("Updated data: ", newData);
//         onClose(); // Close modal after saving
//     };

//     return (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//             onClick={onClose}
//         >
//             <div
//                 className="relative bg-white rounded-lg shadow w-[600px] h-[580px] p-5"
//                 onClick={handleContentClick}
//             >
//                 <div className='flex justify-between items-center'>
//                     <p className='text-xl font-semibold'>Edit Profile</p>
//                     <button onClick={onClose}>
//                         <MdClose size={'25px'} className='text-black' />
//                     </button>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <div className='relative'>
//                         <img
//                             src={newData.image}
//                             alt="Profile"
//                             className='w-20 h-20 rounded-full object-cover mx-auto mt-2'
//                         />
//                         <input
//                             type='file'
//                             id='image'
//                             name='image'
//                             accept='image/*'
//                             onChange={handleImageChange}
//                             className='hidden' // Keep this hidden if you want to use the button to trigger
//                         />
//                         <button
//                             type='button'
//                             className='absolute bottom-4 right-[230px] transform translate-x-1 translate-y-1 bg-blue-600 rounded-full p-1 shadow text-white'
//                             onClick={() => document.getElementById('image').click()} // Trigger file input
//                         >
//                             <RiImageEditFill size={15} />
//                         </button>
//                     </div>

//                     <div className='flex mt-4'>
//                         <div className='flex flex-col mt-2'>
//                             <label htmlFor='fname' className='mb-2'>First Name</label>
//                             <input
//                                 type='text'
//                                 id='fname'
//                                 name='fname'
//                                 placeholder='First Name'
//                                 value={newData.fname}
//                                 onChange={handleInputChange}
//                                 className='w-[270px] p-2 rounded-full border-2'
//                             />
//                         </div>
//                         <div className='flex flex-col mt-2 ml-2'>
//                             <label htmlFor='lname' className='mb-2'>Last Name</label>
//                             <input
//                                 type='text'
//                                 id='lname'
//                                 name='lname'
//                                 placeholder='Last Name'
//                                 value={newData.lname}
//                                 onChange={handleInputChange}
//                                 className='w-[270px] p-2 rounded-full border-2'
//                             />
//                         </div>
//                     </div>

//                     <div className='flex flex-col mt-4'>
//                         <label htmlFor='email' className='mb-2'>Email</label>
//                         <input
//                             type='email'
//                             id='email'
//                             name='email'
//                             placeholder='abc@example.com'
//                             value={newData.email}
//                             onChange={handleInputChange}
//                             className='w-full p-2 rounded-full border-2'
//                         />
//                     </div>

//                     <div className='flex justify-between mt-10'>
//                         <div className='flex flex-col'>
//                             <label htmlFor='oldPassword' className='mb-2'>Old Password</label>
//                             <input
//                                 type='password'
//                                 id='oldPassword'
//                                 name='oldPassword'
//                                 value={newData.password} // Ensure this is the correct field
//                                 placeholder='Old Password'
//                                 onChange={handleInputChange}
//                                 className='w-[270px] p-2 rounded-full border-2'
//                             />
//                         </div>
//                         <div className='flex flex-col'>
//                             <label htmlFor='newPassword' className='mb-2'>New Password</label>
//                             <input
//                                 type='password'
//                                 id='newPassword'
//                                 name='newPassword'
//                                 placeholder='New Password'
//                                 className='w-[270px] p-2 rounded-full border-2'
//                             />
//                         </div>
//                     </div>

//                     <div className='flex justify-between mt-10'>
//                         <button
//                             type='button'
//                             className='bg-gray-500 py-2 px-7 rounded-full text-white'
//                             onClick={onClose}
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type='submit'
//                             className='bg-blue-600 py-2 px-7 rounded-full text-white'
//                         >
//                             Save Changes
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditProfile;


