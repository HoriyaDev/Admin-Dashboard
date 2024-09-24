import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    profession: "",
    email: "",
    password: "",
    image:""
  });

  const [error, setError] = useState({
    fnameError: "",
    lnameError: "",
    professionError: "",
    emailError: "",
    passwordError: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "fname" && value.trim() !== "") {
            setError((prev) => ({ ...prev, fnameError: "" }));
          }
         
          if (name === "email" && validateEmail(value)) {
            setError((prev) => ({ ...prev, emailError: "" }));
          }
          if (name === "password" && value.length >= 6) {
            setError((prev) => ({ ...prev, passwordError: "" }));
          }
          

          if(name === "lname" && value.trim()!==""){
            setError((prev) =>({...prev, lnameError:""}))
          }
          if(name === "profession" && value.trim()!==""){
            setError((prev) =>({...prev, professionError:""}))
          }
  };

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  const handleShow = () => {
    setShowPassword(!showPassword);
  }

  const Validation = () => {
    let isValid = true;

    let newError = {
      fnameError: "",
      lnameError: "",
      professionError: "",
      emailError: "",
      passwordError: ""
    };

    if (input.fname.trim() === "") {
      newError.fnameError = "First name is required.";
      isValid = false;
    }

    if (input.lname.trim() === "") {
      newError.lnameError = "Last name is required.";
      isValid = false;
    }

    if (input.profession.trim() === "") {
      newError.professionError = "Profession is required.";
      isValid = false;
    }

    if (!validateEmail(input.email)) {
      newError.emailError = "Invalid email.";
      isValid = false;
    }

    if (!validatePassword(input.password)) {
      newError.passwordError = "Password must be at least 8 characters long and include at least one number.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e,value) => {
    e.preventDefault();
    console.log("new user data ",e.target.value)
    if (Validation()) {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='bg-blue-gray-200 w-[700px] mx-auto mt-10 p-5'>
          <h1 className='text-center text-2xl font-bold'>Create an Account</h1>

          <div className='flex'>
            <div className='rounded-full flex flex-col mt-5 w-[320px]'>
              <label htmlFor='fname' className='text-blue-700'>First Name</label>
              <input
                type='text'
                id='fname'
                name='fname'
                value={input.fname}
                onChange={handleInput}
                className='focus:outline-none border-none p-2 rounded-xl'
              />
              <p className='text-red-500'>{error.fnameError}</p>
            </div>
            <div className='rounded-full flex flex-col mt-5 w-[320px] ml-3'>
              <label htmlFor='lname' className='text-blue-700'>Last Name</label>
              <input
                type='text'
                id='lname'
                name='lname'
                value={input.lname}
                onChange={handleInput}
                className='focus:outline-none border-none p-2 rounded-xl'
              />
              <p className='text-red-500'>{error.lnameError}</p>
            </div>
          </div>

          <div className='flex flex-col mt-5'>
            <label htmlFor='profession' className='text-blue-700'>Profession</label>
            <input
              type='text'
              id='profession'
              name='profession'
              value={input.profession}
              onChange={handleInput}
              className='focus:outline-none border-none p-2 rounded-xl'
            />
            <p className='text-red-500'>{error.professionError}</p>
          </div>

          <div className='flex flex-col mt-5'>
            <label htmlFor='email' className='text-blue-700'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={input.email}
              onChange={handleInput}
              className='focus:outline-none border-none p-2 rounded-xl'
            />
            <p className='text-red-500'>{error.emailError}</p>
          </div>

          <div className='flex flex-col mt-5 relative '>
            <label htmlFor='password' className='text-blue-700'>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              value={input.password}
              onChange={handleInput}
              className='focus:outline-none border-none p-2 rounded-xl'
            />
             <button 
          className='absolute inset-y-0 right-8 top-5 text-blue-700 z-20'
          onClick={handleShow}
          type='button'
        >
          {showPassword ? <BsEyeFill size={'20px'} /> : <BsEyeSlash size={'20px'} />}
        </button>
            <p className='text-red-500'>{error.passwordError}</p>
          </div>

          <div className='flex justify-center mt-4'>
            <button className='bg-blue-900 text-white px-4 py-1 rounded-3xl' type='submit'>
              Register
            </button>
          </div>

          <div className='flex mt-5 text-center justify-center'>
            <p>Already have an account?</p>
            <Link to='/' className='font-bold ml-1'>
              Login Here
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;



