import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Slices/ManiSlice';

export default function Registration() {
    const [user, setuser] = useState('');
    const [password, setPasword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const login2 = () => {
        dispatch(login({
            name: user,
            email: email,
            password: password,
            loggedIn: true,
        }))
    }
    return (
        <div>
            <div className='w-50 d-fex flex-column  m-auto py-5 border-0'>
                <label htmlFor="name" className='control-form'>User Name :</label>
                <input type="text" value={user} onChange={(e) => setuser(e.target.value)} className='form-control' name="name" id="name" />
                <br />
                <label htmlFor="email" className='control-form'>User Name :</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} 
                className='form-control' name="email" id="email" />
                <br />
                <label htmlFor="psw">Password :</label>
                <input type="password" value={password} onChange={(e) => setPasword(e.target.value)} className='form-control' name="psw" id="psw" />
                <br />
                <button type='submit' className='btn btn-success' onClick={(e) => login2(e)} >Login</button>
            </div>
        </div>
    )
}
