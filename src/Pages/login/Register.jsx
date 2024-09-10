import React, { useState } from 'react'
import { GiConsoleController } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
        
    };


    const handleSubmit =(e)=>{
         e.preventDefault()
        
        localStorage.setItem("user" , JSON.stringify(input))
        navigate('/login')
        
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='bg-blue-gray-200 w-[700px] mx-auto mt-10 p-6'>
        <h1 className='text-center text-2xl font-bold'>Create an Account</h1>

        
        <div className='border-blue-700 border-2 p-3 rounded-full flex flex-col mt-5 w-96'> 
            <label htmlFor='name' className='text-blue-700'>First Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={input.name}
              onChange={handleInput}
              className='focus:outline-none border-none'
            />
        </div>
        <div className='border-blue-700 border-2 p-3 rounded-full flex flex-col mt-5'> 
            <label htmlFor='name' className='text-blue-700'>Last Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={input.name}
              onChange={handleInput}
              className='focus:outline-none border-none'
            />
        </div>
        <div className='border-blue-700 border-2 p-3 rounded-full flex flex-col mt-5'> 
            <label htmlFor='name' className='text-blue-700'>Profession</label>
            <input
              type='text'
              id='name'
              name='name'
              value={input.name}
              onChange={handleInput}
              className='focus:outline-none border-none'
            />
        </div>
        
        
        <div className='border-blue-700 border-2 p-3 rounded-full flex flex-col mt-5'>
            <label htmlFor='email' className='text-blue-700'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={input.email}
              onChange={handleInput}
              className='focus:outline-none border-none'
            />
        </div>
        
       
        <div className='border-blue-700 border-2 p-3 rounded-full flex flex-col mt-5'>
            <label htmlFor='password' className='text-blue-700'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={input.password}
              onChange={handleInput}
              className='focus:outline-none border-none'
            />
        </div>

        
        <div className='flex justify-center mt-4'>
            <button className='bg-blue-900 text-white px-4 py-1 rounded-3xl' type='submit'>Register</button>
        </div>

        
        <div className='flex mt-5 text-center justify-center'>
            <p>Already have an account?</p>
            <Link to='/login' className='font-bold ml-1'>
              Login Here
            </Link>
        </div>
    </div>
    </form>
    </>
  );
}

export default Register;
