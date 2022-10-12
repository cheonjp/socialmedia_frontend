import React, { useEffect } from 'react'
import { useState } from 'react'
import "./maindisplay.css"
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Blog from '../blog/Blog';
import { userData } from '../../context/data'; 
import { useRef } from 'react';
import axios from "axios"

export default function MainDisplay({savedUser}) {
  const [profilePicture,setProfilePicture] = useState("")
  const [userName, setUserName] = useState("")
  const postText = useRef()


  useEffect(()=>{
    if(savedUser !== null){
      setProfilePicture(savedUser.profilePicture)
      setUserName(savedUser.username)
    }

  },[savedUser])

  const creatingPost = async()=>{
    const newPost = await axios.post("/posts/post",{
      userId:savedUser._id,
      postText:postText.current.value,
      postImg:"http://localhost:1000/public/images/hero_1.jpg"
    })
  }
  return (
    <div className='mainDisplay'>
      <div className="postBox">
        <div className="opinionContainer">
          <div className="myOpinion">
          <img src={profilePicture} alt="" />
          <input type="text" className="opinionBox" ref={postText} placeholder={`What's on your mind, ${userName}`} />
          </div>
          <div className="uploadFileBox">
            <label className='uploadLabel'>
              <input type="file" multiple/>
              <LiveTvIcon className='uploadIcon uploadLiveIcon'/>
              <span>Live video</span>
            </label>
            <label className='uploadLabel'>
              <input type="file" multiple/>
              <AddPhotoAlternateOutlinedIcon className='uploadIcon uploadImgIcon'/>
              <span>Photo</span>
            </label>
            <label className='uploadLabel'>
              <input type="file" multiple/>
              <EmojiEmotionsOutlinedIcon className='uploadIcon uploadFeelingIcon'/>
              <span>Feeling/activity</span>
            </label>
          </div>
          <button onClick={creatingPost}>Post</button>
        </div>
        {userData.map((user)=>{
          return(
            <Blog profileImg={user.profilePicture} username={user.username} postText={user.postText}/>
          )
        })}
      </div>
    </div>
  )
}
