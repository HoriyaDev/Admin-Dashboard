


import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";

const EditProfile = ({ open, onClose }) => {
    const [newData, setNewData] = useState({
        fname: "",
        lname: "",
        email: "",
        oldPassword: ""
    });

    // Load user data from localStorage on component mount
    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('user'));
        if (profileData) {
            setNewData(profileData);
        }
    }, []);

    if (!open) return null;

    // Prevent click events from propagating to the background overlay
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission and save to localStorage
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
                    <img src='pic3.jpg' alt="Profile" className='w-20 h-20 rounded-full object-cover mx-auto mt-2' />

                    <div className='flex justify-between mt-10'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstName' className='mb-2'>First Name</label>
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
                        <div className='flex flex-col'>
                            <label htmlFor='lastName' className='mb-2'>Last Name</label>
                            <input
                                type='text'
                                id='lname'
                                name='lname'
                                placeholder='Last Name'
                                value={newData.lname}
                                onChange={handleInputChange}
                                className='w-[270px] p-2 rounded-full border-2'
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
                                placeholder='Old Password'
                                value={newData.oldPassword}
                                onChange={handleInputChange}
                                className='w-[270px] p-2 rounded-full border-2'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='newPassword' className='mb-8'></label>
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
