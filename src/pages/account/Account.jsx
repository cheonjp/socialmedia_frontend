import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { CameraAlt, Work, School, Home,Favorite } from '@mui/icons-material/';
import { useRef } from 'react';
import "./account.css"
import Blog from '../../components/blog/Blog';
import { userData } from '../../context/data'; 

export default function Account() {
    const friendsList = useRef()
    const test = () => {
        const index = friendsList.current.childElementCount
        let leftPosition = 0
        for (let i = 0; i < index; i++) {
            friendsList.current.children[i].style.transform = `translateX(${leftPosition}px)`
            leftPosition -= 10
        }
    }
    console.log(userData)
    
    return (
        <>
            <Header />
            <div className="account">
                <div className="profileHeader">
                    <div className="accountCoverImg">
                    </div>
                        <div className="accountProfileDetail">
                            <div className="imgContainer">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="accountProfileImg" />
                                <CameraAlt className='i-camera' />
                            </div>
                            <div className="accountNameContainer">
                                <div className='userName'>Josh</div>
                                <div className='friendsNumber'>558 friends</div>
                                <div className='friendsList' ref={friendsList} onLoad={test}>
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                </div>
                            </div>
                            <div className="profileContainer">
                                <h2>Intro</h2>
                                <div className="profileText">
                                    <Work />
                                    <span>Former Sergeant at Republic of Korea Army</span>
                                </div>
                                <div className="profileText">
                                    <School />
                                    <span>College of New Caledonia</span>
                                </div>
                                <div className="profileText">
                                    <Home />
                                    <span>Lives in </span><span>Seoul</span>
                                </div>
                                <div className="profileText">
                                    <Favorite />
                                    <span>Single</span>
                                </div>
                            </div>

                        </div>
                </div>
                {userData.map((user)=>{
                    return(
                        <Blog profileImg={user.profilePicture} username={user.username} postText={user.postText}/>
                    )
                })}
            </div>
        </>
    )
}
