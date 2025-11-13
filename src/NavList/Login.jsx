import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Slices/ManiSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setuser] = useState('');
  const [psw, setPsw] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const login2 = (e) => {
    // e.preventDefault();
    dispatch(login({
      name: user,
      password: psw,
      loggedIn: true,
    })),
      alert("Login Successfully...");
      navigate("/")
  }
  return (
    <div className='w-50 d-fex flex-column  m-auto py-5 border-0'>
      {/* <form action="" onSubmit={(e)=>login2(e)}> */}
        <label htmlFor="name" className='control-form'>User Name :</label>
        <input type="text" value={user} onChange={(e) => setuser(e.target.value)} className='form-control' name="name" id="name" />
        <br />
        <label htmlFor="psw">Password :</label>
        <input type="password" value={psw} onChange={(e) => setPsw(e.target.value)} className='form-control' name="psw" id="psw" />
        <br />
        <button type='submit' className='btn btn-success' 
        onClick={(e) => login2(e)}
         >Login</button>
      {/* </form> */}
    </div>
  )
}
