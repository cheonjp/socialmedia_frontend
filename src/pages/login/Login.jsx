import axios from 'axios'
import React, { useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"

import { Refresh } from '@mui/icons-material/';

export default function Login() {

  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const { user, isFetching, error, dispatch } = useContext(AuthContext)


  const HandleLogin = async (e) => {
    e.preventDefault()
    
    dispatch({ type: "LOGIN_START" })
    
    password.current.parentElement.classList.remove("wrongPassword")
    email.current.parentElement.classList.remove("wrongMail")
    try {
      const res = await axios.post("/auth/login", {
        email: email.current.value,
        password: password.current.value
      })
      // dispatch({ type: "LOGIN_SUCCESS", payload: email.current.value })
      dispatch({ type: "LOGIN_SUCCESS", payload: email.current.value })
      navigate('/')
    } catch (error) {
      { error.response.status === 400 && password.current.parentElement.classList.add("wrongPassword") }
      { error.response.status === 404 && email.current.parentElement.classList.add("wrongMail") }
      dispatch({ type: "LOGIN_FAILURE" })
      console.log(error)
    }
  }
  return (
    <>
      <div className="loginScreen">
        <div className="socialTextBox">
          <h1 className="brand">JP social</h1>
          <p className='brandText'>Connect with friends and the world<br /> around you on JP social</p>
        </div>
        <div className="loginBox">
          <form onSubmit={HandleLogin}>
            <div className="inputWrapper">
              <input ref={email} placeholder='Email' type="text" id="email" />
            </div>
            <div className="inputWrapper">
              <input ref={password} placeholder='Password' type="password" id="password" />
            </div>
            <button id="signInBtn">Sign In {isFetching ? <Refresh className="loading" /> : ""}</button>
            <a href="#">Forget password?</a>
            <hr />
            <Link to="/register">
              <button id="signUpBtn">Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
