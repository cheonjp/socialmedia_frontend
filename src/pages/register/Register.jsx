import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import "./register.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Register() {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity('Password is not matched')
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user)
                navigate("/login")

                // await axios.post("/auth/register", {
                //     username: username.current.value,
                //     email: email.current.value,
                //     password: password.current.value,
                // })
                // const response = await fetch("/auth/register", {
                //     method: "POST",
                //     header: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(user)
                // })
                // return response.json(user)
            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

    return (
        <>
            <div className="registerScreen">
                <div className="socialTextBox">
                    <h1 className="brand">JP social</h1>
                    <p className='brandText'>Connect with friends and the world<br /> around you on JP social</p>
                </div>
                <div className="signupBox">
                    <form onSubmit={handleSubmit}>
                        <input ref={username} placeholder='User Name' type="text" id="email" />
                        <input ref={email} placeholder='Email' type="text" id="email" />
                        <input ref={password} placeholder='Password' type="password" id="password" />
                        <input ref={confirmPassword} placeholder='Password confirm' type="password" id="passwordConfirm" />
                        <button type="submit" id="signUpBtn">Sign Up</button>
                        <button id="signInBtn">Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

