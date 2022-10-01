import React, { useRef } from 'react'
import "./blog.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Blog({profileImg,username,postText}) {
    const blogText = useRef()
    const [word,setWord]=useState("")

    const showAllText = (e)=>{
        // e.target.classList.add("hide")
        e.target.parentElement.classList.add("hide")
        e.target.parentElement.parentElement.textContent = postText
        

    }

    return (
        <div className='blogContainer'>
            <div className="blogProfileContainer">
                <img src={profileImg} className='profileImg' alt="" />
                <div className="nameAndTime">
                    <div className="profileName">
                        {username}
                    </div>
                    <div className="uploadDate">
                        7h
                    </div>
                </div>
                <div className="iconWrapper">
                    <MoreHorizIcon className="uploadMenu" />
                </div>
            </div>
                <div className="blogContent" ref={blogText} onLoad={()=>blogText.current.textContent.subString(5)}>
                    <div className="blogText">
                    {postText.length < 150 ? postText : postText.substring(0,150)} {postText.length > 150 && <span > ...<span onClick={(event)=> showAllText(event)} className='seeMore'>See more</span></span>}
                    </div>
                    <div className="blogImg">
                        <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                        <img src="https://images.unsplash.com/photo-1516108317508-6788f6a160e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                        <img src="https://images.unsplash.com/photo-1556958540-2378bacb6f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div className="extraBlogImgContainer">
                            <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                        </div>
                    </div>
                </div>
        </div>
    )
}
