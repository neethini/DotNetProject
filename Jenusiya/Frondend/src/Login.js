import React, { useState } from "react";
import axios from "axios";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const data = {
            Email : email,
            Password : pass
        }
        const url = `https://localhost:7032/api/Registration/login`;
        axios.post(url,data)
        .then((result) => {
            const dt = result.data;
            alert(dt.statusMessage);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <label htmlFor=""></label>
                <label htmlFor=""></label>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}