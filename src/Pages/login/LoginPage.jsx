import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedData = JSON.parse(localStorage.getItem("user"));
  
    if (input.email.trim() === "" && input.password.trim() === "") {
      toast.warn('Fill the fields', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (loggedData && input.email === loggedData.email && input.password === loggedData.password) {
      toast.success('Login Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      // Delay the navigation to the dashboard to allow the success toast to show
      setTimeout(() => {
        localStorage.setItem("logged", "true");
        navigate('/dashboard');
      }, 2000); // Delay of 2 seconds (matches the toast duration)
      
    } else {
      toast.warn('Incorrect email and password', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-1/2 h-[500px] mx-auto mt-20 flex flex-col items-center justify-center'>
      <img src='Logo.png' className='mx-auto mb-6' alt='Logo' />
      <h1 className='mb-10 text-center'>Let’s get you Login!</h1>

      <form onSubmit={handleLogin}>
        <div className="relative mb-8">
          <label htmlFor="email" className="absolute top-3 left-6 z-10 text-blue-700">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            value={input.email}
            onChange={handleInput}
            className="w-[520px] h-[70px] pl-5 pt-6 border-blue-600 border-2 text-xl rounded-full focus:outline-none"
          />
        </div>

        <div className="relative mb-8">
          <label htmlFor="password" className="absolute top-3 left-6 z-10 text-blue-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={input.password}
            onChange={handleInput}
            name='password'
            className="w-[520px] h-[70px] pl-5 pt-6 border-blue-600 border-2 text-xl rounded-full focus:outline-none"
          />
          <button
            type='button'
            className='absolute inset-y-0 right-8 text-blue-700 z-20'
            onClick={handleShow}
          >
            {showPassword ? <BsEyeFill size={'20px'} /> : <BsEyeSlash size={'20px'} />}
          </button>
        </div>

        <button
          type='submit'
          className='w-[520px] h-[50px] mt-2 text-white bg-blue-500 rounded-full text-xl'
        >
          Login
        </button>

        <div className='mt-5 text-center'>
          <p>Don't have an account?
            <Link to="/register" className='font-bold'> Register Here</Link>
          </p>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide} // Using Slide transition
      />
    </div>
  );
};

export default LoginPage;