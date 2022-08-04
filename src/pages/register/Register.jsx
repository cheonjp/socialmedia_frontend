import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <>
            <div className="registerScreen">
                <div className="socialTextBox">
                    <h1 className="brand">JP social</h1>
                    <p className='brandText'>Connect with friends and the world<br/> around you on JP social</p>
                </div>
                <div className="signupBox">
                    <form>
                        <input placeholder='Email' type="text" id="email" />
                        <input placeholder='Password' type="password" id="password" />
                        <input placeholder='Password confirm' type="password" id="passwordConfirm" />
                    </form>
                </div>
            </div>
        </>
    )
}

