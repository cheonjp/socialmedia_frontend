import React from 'react'
import "./header.css"
import IconButton from '@mui/material/IconButton';
import { Notifications, ChatBubble } from '@mui/icons-material/';
import noProfileImg from "../../images/noprofile.jpg"
import { useEffect } from 'react';
import { useState } from 'react';
import ProfileBar from '../profileBar/ProfileBar';
import { useRef } from 'react';

export default function Header({ savedUser }) {
    const [profilePicture, setProfilePicture] = useState("")
    const [activeModal, setActiveModal] = useState(false)
    const profileModal = useRef()
    let defendClose = true

    useEffect(() => {
        savedUser && setProfilePicture(savedUser.profilePicture)
    }, [savedUser])

    window.onclick = (e) => {
        if (e.target.closest(".profileBtn") !== null || e.target.closest(".profileModal") !== null) {
            if(profileModal.current.classList.contains("hide")){
                setActiveModal(true)
            }
            if(profileModal.current.classList.contains("hide")){
                setActiveModal(false)
            }
            
        }else if((e.target.closest(".profileBtn") === null || e.target.closest(".profileModal") === null)){
            setActiveModal(false)
        }
        
    }

    useEffect(() => {
        activeModal ? profileModal.current.classList.remove("hide") : profileModal.current.classList.add("hide")

    }, [activeModal])


    return (
        <header>
            <div className="headerContent">
                <div className="headerLogoBox">
                    <div className="logo">JP SOCIAL</div>
                    <div className="inputWrapper">
                        <input type="text" placeholder='JP SOCIAL search' />
                    </div>
                </div>
                <div className="headerIconBox">
                    <IconButton className="iconButton">
                        <ChatBubble />
                        <span className="child">1</span>
                    </IconButton>
                    <IconButton className="iconButton">
                        <Notifications />
                    </IconButton>
                    {/* {profilePicture ? <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="profileBtn" /> : <img src={noProfileImg} alt="" className="profileBtn" />} */}
                    {profilePicture ? <img src={profilePicture} alt="" className="profileBtn" onClick={() => setActiveModal(!activeModal)} /> : <img src={noProfileImg} alt="" className="profileBtn" onClick={() => setActiveModal(!activeModal)} />}
                </div>
                <div className={activeModal ? "profileModal modal" : "profileModal modal hide"} ref={profileModal}>
                    <ProfileBar savedUser={savedUser}/>
                    <hr />
                    <div className='editProfile' >Edit profiles</div>
                </div>
            </div>
        </header>
    )
}
