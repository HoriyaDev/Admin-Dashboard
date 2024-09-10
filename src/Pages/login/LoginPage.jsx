import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { LocalLaundryService } from '@mui/icons-material';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [input , setInput] = useState({
    email:"",
    password:"",
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) =>{
    e.preventDefault()
    const loggedData = JSON.parse(localStorage.getItem("user"))
    if(input.email===loggedData.email && input.password === loggedData.password) {
      localStorage.setItem("logged" ,true )
      navigate('/dashboard')
    }
    else{
      alert("inCorrect")
    }
    
   

  }
  

  // function validateEmail(email) {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // }

  // function validatePassword(password) {
  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   return passwordRegex.test(password);
  // }

  const handleShow = () => {
    setShowPassword(!showPassword);
  }

  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);

  //   if (validateEmail(value)) {
  //     setEmailError('');
  //   } else {
  //     setEmailError('*Please enter a valid email address.');
  //   }
  // };

  // const handlePasswordChange = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);

  //   if (validatePassword(value)) {
  //     setPasswordError('');
  //   } else {
  //     setPasswordError('*Please enter a valid password.');
  //   }
  // };

  // const validation = () => {
  //   let isValid = true;

  //   if (email.trim() === '') {
  //     setEmailError('*Email field is required');
  //     isValid = false;
  //   } else if (!validateEmail(email)) {
  //     setEmailError('*Please enter a valid email address.');
  //     isValid = false;
  //   } else {
  //     setEmailError('');
  //   }

  //   if (password.trim() === '') {
  //     setPasswordError('*Password field is required');
  //     isValid = false;
  //   } else if (!validatePassword(password)) {
  //     setPasswordError('*Please enter a valid password.');
  //     isValid = false;
  //   } else {
  //     setPasswordError('');
  //   }

  //   if (isValid) {
  //     navigate('/dashboard');  
  //   }

  //   return isValid;
  // };

  

  return (
    <div className='w-1/2 h-[500px] mx-auto mt-20 flex flex-col items-center justify-center'>
      <img src='Logo.png' className='mx-auto mb-6' alt='Logo' />
      <h1 className='mb-10 text-center'>Let’s get you Login!</h1>
      
      <form onSubmit={handleLogin}>
      <div className="relative mb-8">
        <label
          htmlFor="email"
          className="absolute top-3 left-6 z-10 text-blue-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name='email'
          value={input.email}
          onChange={handleInput}
          className="w-[520px] h-[70px] pl-5 pt-6 border-blue-600 border-2 text-xl rounded-full focus:outline-none"
        />
        {/* <p className='text-red-700 ml-5 '>{emailError}</p> */}
      </div>

      <div className="relative mb-8">
        <label
          htmlFor="password"
          className="absolute top-3 left-6 z-10 text-blue-700"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={input.password}
          onChange={handleInput}
          name='password'
        
          className="w-[520px] h-[70px] pl-5 pt-6 border-blue-600 border-2 text-xl no-outline focus:outline-none rounded-full"
        />
        {/* <p className='text-red-700 ml-5'>{passwordError}</p> */}
        <button 
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

      <div>
        <p>Don't have an account? 
          <Link to="/" className='font-bold'>
           Regitser Here
          </Link>
        </p>
      </div>
      </form>
    </div>
  );
};

export default LoginPage;
