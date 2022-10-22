import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import "./register.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()

    const [validationText, setValidationText] = useState(false)

    const removeInvalid = () =>{
        if(username.current.parentElement.className === "inputWrapper invalidName"){
            username.current.parentElement.className ="inputWrapper"
        }
        if(email.current.parentElement.className === "inputWrapper invalidMail"){
            email.current.parentElement.className ="inputWrapper"
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        if(!user.username && !user.email && !user.password){
            alert("Please fill the form out")
        }
        if (confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity('Password is not matched')
        } else {
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
                if (error.response.data.includes("user")) {
                    setValidationText(true)
                    username.current.parentElement.classList.add("invalidName")
                } else if (error.response.data.includes("mail")) {
                    setValidationText(true)
                    // email.current.parentElement.className = "invalidMail"
                    email.current.parentElement.classList.add("invalidMail")

                }

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
                        <div className="inputWrapper">
                            <input onFocus={removeInvalid} ref={username} placeholder='User Name' type="text" id="username" />
                        </div>
                        <div className="inputWrapper">
                            <input onFocus={removeInvalid} ref={email} placeholder='Email' type="email" id="email" />
                        </div>
                        <input ref={password} placeholder='Password' type="password" id="password" />
                        <input ref={confirmPassword} placeholder='Password confirm' type="password" id="passwordConfirm" />
                        <button type="submit" id="signUpBtn">Sign Up</button>
                        <Link to="/login"><button id="signInBtn">Sign In</button></Link>
                        {/* <button id="signInBtn">Sign In</button> */}
                    </form>
                </div>
            </div>
        </>
    )
}

