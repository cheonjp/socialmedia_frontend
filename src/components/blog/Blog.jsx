import React, { useRef } from 'react'
import "./blog.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Blog({profileImg,username,post}) {
    const blogText = useRef()
    const [word,setWord]=useState("")
    const [userPost,setUserPost]=useState(null)

    const showPostText=()=>{
        if(userPost.postText.length > 150){
            return(
                // `${userPost.postText.substring(0,150)}...`
                <span>{`${userPost.postText.substring(0,150)}...`} <span className="seeMore" onClick={(e)=>e.target.parentElement.textContent=post.postText}>Read More</span></span>
                    
                ) 
                
        }else{
            return userPost.postText
        }
    }

    useEffect(()=>{
        setUserPost(post)
    },[post])
    const backendPublic =process.env.REACT_APP_PUBLIC_URL

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
                <div className="blogContent" ref={blogText}>
                    <div className="blogText">
                        {userPost && showPostText()}
                        

                    </div>
                    <div className="blogImg">
                        {/* {post.postImg.map(img=>{
                            return (
                                <img src="test" alt="" />
                            )
                        })} */}
                        {userPost && userPost.postImg.map(img => {
                            return <img src={backendPublic+img} alt=""/>
                        })}
                        {/* <div className="extraBlogImgContainer">
                            <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                        </div> */}
                    </div>
                </div>
        </div>
    )
}
