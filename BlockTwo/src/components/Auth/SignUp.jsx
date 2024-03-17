import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Button from "../ui/Button"
const SignUp = () => {
  const [username, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnSubmit = async () => {
    try {

      // Check if all fields are entered
      if (!username || !mail || !phone || !password) {
        setErrorMessage('Please enter all the fields.');
        return;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(mail)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        setErrorMessage('Phone number must have exactly 10 digits.');
        return;
    }
      // Password validation
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }


      const currentDate = new Date();

      // Make a POST request to the backend to save the name
      await axios.post('http://localhost:3001/api/submitName', {
        username,
        mail,
        phone, password,
        createdAt: currentDate.toISOString()
      });

      alert('Successful Registration...!!!');
      setName('');
      setMail('');
      setPhone('');
      setPassword('');

    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data. Please try again.');
    }
  };


  return (
    <div className="w-full h-[40rem] grid place-items-center">
    <div className="w-[22rem] h-[30rem] flex-col gap-2 px-2 py-3 mx-auto mt-10 ">
        <h3 className="font-bold text-slate-50 text-3xl text-center mt-5">Get On Board</h3>
        <div className="w-full px-4 flex flex-col gap-4 my-5">
            <input type="text" onChange={(e) => setName(e.target.value)} value={username} placeholder="username"></input>
            <input type="text" onChange={(e) => setMail(e.target.value)} value={mail} placeholder="E-mail"></input>
            <input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} pattern="[0-9]{10}" title="Phone number must have exactly 10 digits." placeholder="Enter Phone-no"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password"></input>
        </div>
        <div className="w-full flex flex-col place-items-center gap-4">
            <button onClick={handleOnSubmit} className={`font-medium border-[1px] duration-300 transition-all ease-in border-black-500  rounded-md text-slate-900 bg-white cursor-pointer px-2 py-2 text-[0.8rem] hover:bg-red-500  bg-transparent hover:text-slate-50 md:text-[1rem] `}> SignUp </button>
            <p className="text-red-900">{errorMessage}</p>
            <p>You already have an account ? <Link className="text-indigo-500 text-medium text-xl" to="/signin">Sign In</Link></p>
        </div>
    </div>
</div>
  )
}

export default SignUp
