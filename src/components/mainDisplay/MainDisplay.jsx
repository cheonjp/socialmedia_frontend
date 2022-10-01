import React, { useEffect } from 'react'
import { useState } from 'react'
import "./maindisplay.css"
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Blog from '../blog/Blog';
import { userData } from '../../context/data'; 

export default function MainDisplay({savedUser}) {
  const [profilePicture,setProfilePicture] = useState("")
  const [userName, setUserName] = useState("")


  useEffect(()=>{
    if(savedUser !==null){
      setProfilePicture(savedUser.profilePicture)
      setUserName(savedUser.username)
    }
  },[savedUser])
  return (
    <div className='mainDisplay'>
      <div className="postBox">
        <div className="opinionContainer">
          <div className="myOpinion">
          <img src={profilePicture} alt="" />
          <input type="text" className="opinionBox" placeholder={`What's on your mind, ${userName}`} />
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
