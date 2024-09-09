import React from 'react';
import { MdClose } from "react-icons/md";

const EditProfile = ({ open, onClose }) => {
    if (!open) return null;

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[600px]  h-[580px] p-5 overflow-hidden"
                onClick={handleContentClick}
            >
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold'>Edit Profile</p>
                    <button className=" bg-blue-gray-100  text-white rounded-full" onClick={onClose}>
                        <MdClose size={'25px'} className='text-black' />
                    </button>
                </div>

                <img src='pic3.jpg' className='w-20 h-20 rounded-full object-cover mx-auto mt-2' />

                <div className='flex justify-between mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='mb-2'>Name</label>  
                        <input type='text' id='name' name='name' placeholder='Name' className='w-[270px] p-2 rounded-full focus:outline-none border-blue-gray-100 border-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='lastName' className='mb-2'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' placeholder='Last Name' className='w-[270px] p-2 rounded-full focus:outline-none border-blue-gray-100 border-2' />
                    </div>
                </div>

                <div className='flex flex-col mt-4'>
                    <label htmlFor='email' className='mb-2'>Email</label>
                    <input type='email' id='email' name='email' placeholder='abc@gamil.com' className='w-[270px] p-2 rounded-full focus:outline-none border-blue-gray-100 border-2' />
                </div>

                <div className='flex justify-between mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='oldPassword' className='mb-2 font-semibold'>Change Password</label>  
                        <input type='password' id='oldPassword' name='oldPassword' placeholder='Old Password' className='w-[270px] p-2 rounded-full focus:outline-none border-blue-gray-100 border-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='newPassword' className='mb-8'></label>
                        <input type='password' id='newPassword' name='newPassword' placeholder='New Password' className='w-[270px] p-2 rounded-full focus:outline-none border-blue-gray-100 border-2' />
                    </div>
                </div>

                <div className='flex justify-between mt-10 '>
                    <button type='button' className='bg-blue-gray-600 py-2 px-7 rounded-full text-white'>Cancel</button>
                    <button type='button' className='bg-blue-600 py-2 px-7 rounded-full text-white'>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;

