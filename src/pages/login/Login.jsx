import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <>
        <div className="loginScreen">
                <div className="socialTextBox">
                    <h1 className="brand">JP social</h1>
                    <p className='brandText'>Connect with friends and the world<br/> around you on JP social</p>
                </div>
                <div className="loginBox">
                    <form>
                        <input placeholder='Email' type="text" id="email" />
                        <input placeholder='Password' type="password" id="password" />
                        <button id="signInBtn">Sign In</button>
                        <a href="#">Forget password?</a>
                        <hr />
                        <button id="signUpBtn">Sign Up</button>
                    </form>
                </div>
            </div>
    </>
  )
}
