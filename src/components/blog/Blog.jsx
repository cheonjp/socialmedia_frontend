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
    const [postUserProfileImg,setPostUserProfileImg]=useState(null)

    
    const postProfileImg = ()=>{
        setPageFrom(from)
        if(pageFrom){

            profileImg.map((img)=>{
                if(img._id === post.userId){
                    // test =img.username
                    setPostUser(img.username)
                    setPostUserProfileImg(img.profilePicture)
                }
            })
        }
    }
    const renderProfileImg = ()=>{
        if(postUserProfileImg !==null){
            return <img src={postUserProfileImg ? postUserProfileImg:noProfileImg} className='profileImg' alt="" />
        }else if(postUserProfileImg === null){
            return <img src={profilePicture? profilePicture : noProfileImg} className='profileImg' alt="" />
        }
    }
    
    useEffect(()=>{
        postProfileImg()
        
    },[profileImg])

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
                {/* {postUserProfileImg !==null &&  <img src={postUserProfileImg ? postUserProfileImg:noProfileImg} className='profileImg' alt="" />} */}
                {/* {postUserProfileImg !==null && console.log("not null")} */}
                {/* {profilePicture && <img src={profilePicture? profilePicture : noProfileImg} className='profileImg' alt="" />} */}
                {/* <img src={profilePicture} className='profileImg' alt="" /> */}
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
