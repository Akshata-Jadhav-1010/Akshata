import React, { useState } from 'react';
import axios from 'axios';
import Button from "../ui/Button"

const SignIn = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async () => {  
    try {
  
        // Check if both name and age are entered
        if (!mail || !password) {
          alert('Please enter all the fields.');
          return;
        }
  
        const currentDate = new Date();
  
        // Make a POST request to the backend to save the name
        await axios.post('http://localhost:3001/api/signIn', { 
            mail,password,
            createdAt: currentDate.toISOString()
          });
          alert('Account exists...ready to SIGN IN');

      } catch (error) {
        alert('Enter Not registered user');
      }
    };

    return (
      <div className="w-full h-[40rem] grid place-items-center">
        <div className="w-[22rem] h-[30rem] flex-col gap-2 px-2 py-3 mx-auto mt-10 items-center justify-center ">
          <h3 className="font-bold text-slate-50 text-3xl text-center mt-5">Hello there, Welcome back</h3>
          <div className="w-full px-4 flex flex-col gap-8 my-5">
            <input type="text" onChange={(e) => setMail(e.target.value)} value={mail} placeholder="E-mail"></input>
            <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password"></input>
          </div>
          <div className="w-full flex flex-col place-items-center gap-4">
            <button onClick={handleOnSubmit} className={`font-medium border-[1px] duration-300 transition-all ease-in border-black-500  rounded-md text-slate-900 bg-white cursor-pointer px-2 py-2 text-[0.8rem] hover:bg-red-500  bg-transparent hover:text-slate-50 md:text-[1rem] `}> Sign In</button>
 
          </div>
        </div>
      </div>
    )
  }

  export default SignIn

/*import React, { useState} from 'react';
import axios from 'axios';

import Button from "../ui/Button"

const SignIn = () => {
  const [mail, setMail] =useState('');
  const [password, setPassword] =useState('');


  const handleOnSubmit = async () => {
    console.log("handleOnSubmit");  
    try {
  
        // Check if both name and age are entered
        if (!username || !mail || !phone || !password) {
          alert('Please enter all the fields.');
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

      } catch (error) {
        console.error('Error submitting data:', error);
        alert('Error submitting data. Please try again.');
      }
    };
  


  return (
    <div className="w-full h-[40rem] grid place-items-center">
        <div className="w-[22rem] h-[30rem] flex-col gap-2 px-2 py-3 mx-auto mt-10 items-center justify-center ">
        <h3 className="font-bold text-slate-50 text-3xl text-center mt-5">Hello there, Welcome back</h3>
        <div className="w-full px-4 flex flex-col gap-8 my-5">
            
        <input type="text" value={mail} placeholder="E-mail"></input>
       
        <input type="text" value={password} placeholder="Enter password"></input> 
        </div>
        <div className="w-full flex flex-col place-items-center gap-4">
            <Button text={"Sign In"}/>
        
        </div>
        </div>
    </div>
  )
}

export default SignIn
*/