import axios from 'axios'
import React from 'react'
import { useState } from 'react';


export default function Login({ setLogin }) {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please enter valid credentails")
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/login", {
                email, password
            });
            setLogin(res.data);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div>
            <p>This is a Login Page</p>

            <form onSubmit={handleFormSubmit}>
                <div className="">
                    <label>Enter email : </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <br />
                <div className="">
                    <label>Enter password : </label>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <br />
                <br />
                <button type='submit'>Login user</button>
            </form>
        </div>
    )
}
