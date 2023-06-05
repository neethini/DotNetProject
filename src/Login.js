import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAPI = () => {
        console.log({ email, password })
        axios.post('api/Registration/login', {
            email: email,
            password: password
        }).then(resule => {
            console.log(resule)
            toast.success('Email and Password are correctly sent');
            navigate('/home')
        })
            .catch(error => {
                console.log(error)
            })
    }



    return(
       
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            
            <div className='bg-white p-3 rounded w-25'>
                
                <ToastContainer />
                    <div className='mb-3'>
                        <h2>Login Page</h2>
                    </div>
                    <div className='mb-3'>
                        <label ><strong>Email</strong></label>
                        <input value={email} onChange={handleEmail} type='text' placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label ><strong>Password</strong></label>
                        <input value={password} onChange={handlePassword} type='password' placeholder='Enter password' className='form-control rounded-0' />
                    </div>
                    <button onClick={handleAPI}  className='btn btn-success w-100'><strong>Log in </strong></button>
                    <p>
                        You Don't have an account
                    </p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
               
            </div>
        </div>
    )
    
}

export default Login;