import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const url =`https://localhost:7032/api/Registration/registration`;

        const data = {
            UserName : name,
            Email : email,
            Password : pass
        }
        axios.post(url,data)
        .then((result) => {
            clear();
            const dt = result.data;
            let fail = false; 


            fail(dt.statusCode === 200)
            {
                alert(dt.statusMessage);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        }
        const clear = () => {
            setName('');
            setEmail('');
            setPass('');
        }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="Username">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor=""></label>
            <label htmlFor=""></label>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}