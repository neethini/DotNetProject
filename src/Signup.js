import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isActive, setisActive] = useState('')
    console.log({ username, email, password, isActive })

    const handleAPI = () => {
        console.log({ username, email, password, isActive })
        axios.post('api/Registration/registration', {
            username: username,
            email: email,
            password: password,
            isActive: isActive
        }).then(resule => {
            console.log(resule)
           navigate('/login')

        })
            .catch(error => {
                console.log(error)
            })
    }

    
    return (

        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>

            <div className='bg-white p-3 rounded w-25'>

                
                    <div className='mb-3'>
                        <h2>Registration Page</h2>
                    </div>
                    <div className='mb-3'>
                        <label ><strong>User Name</strong></label>
                        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label ><strong>Password</strong></label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label ><strong>Email</strong></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label ><strong>IsActive</strong></label>
                        <input type="number" value={isActive} onChange={(e) => setisActive(e.target.value)} placeholder="isActive" className='form-control rounded-0' />
                    </div>
                    <button onClick={handleAPI} className='btn btn-success w-100'><strong>Log in </strong></button>
                    <p>
                       Already you have an account login
                    </p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login Account</Link>
                
            </div>
        </div>
    )

}

export default Signup;