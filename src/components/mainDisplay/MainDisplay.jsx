import React, { useEffect } from 'react'
import { useState } from 'react'
import "./maindisplay.css"
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

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
              <input type="file"/>
              <LiveTvIcon className='uploadIcon uploadLiveIcon'/>
              <span>Live video</span>
            </label>
            <label className='uploadLabel'>
              <input type="file"/>
              <AddPhotoAlternateOutlinedIcon className='uploadIcon uploadImgIcon'/>
              <span>Photo</span>
            </label>
            <label className='uploadLabel'>
              <input type="file"/>
              <EmojiEmotionsOutlinedIcon className='uploadIcon uploadFeelingIcon'/>
              <span>Feeling/activity</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
