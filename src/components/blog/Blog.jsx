import React, { useRef } from 'react'
import "./blog.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { useEffect } from 'react';
import noProfileImg from "../../images/noprofile.jpg"
import Moment from "react-moment";

export default function Blog({from,profilePicture,profileImg,username,post}) {
    const blogText = useRef()
    const [userPost,setUserPost]=useState(null)
    const [friendProfile,setFriendProfile]=useState(null)
    const [pageFrom,setPageFrom]=useState(null)
    const [postUser,setPostUser]=useState(null)
    const [postEmail,setEmail]=useState(null)
    const [postUserProfileImg,setPostUserProfileImg]=useState(null)


    const postProfileImg = ()=>{
        if(typeof profileImg === "object"){
            profileImg.map((img)=>{
                if(img._id === post.userId){
                    setPostUser(img.username)
                    setPostUserProfileImg(img.profilePicture)
                    // 여기까지 했음
                    setEmail(img.email)
                }
            })
        }
    }
    const renderProfileImg = ()=>{
        if(postUserProfileImg !==null){
            return <img onClick={()=>{console.log(post)}} src={postUserProfileImg ? postUserProfileImg:noProfileImg} className='profileImg' alt="" />
        }else if(postUserProfileImg === null){
            return <img src={profilePicture? profilePicture : noProfileImg} className='profileImg' alt="" />
        }
    }
    
    useEffect(()=>{
        setPageFrom(from)
        postProfileImg()
        renderProfileImg()
        
    },[profileImg,from])

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
                {renderProfileImg()}
                <div className="nameAndTime">
                    <div className="profileName">
                        {postUser ? postUser : username}
                    </div>
                    <div className="uploadDate">
                        {userPost && <Moment fromNow>{userPost.createdAt}</Moment>}
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
                        {userPost && userPost.postImg.map(img => {
                            return <img src={backendPublic+img} alt=""/>
                        })}
                    </div>
                </div>
        </div>
    )
}
