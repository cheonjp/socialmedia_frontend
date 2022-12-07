import React from 'react'
import "./friendProfile.css"
import noProfile from "../../images/noprofile.jpg"
import { useNavigate } from 'react-router-dom'

export default function FriendProfile({username,email,profilePicture}) {
  const navigate = useNavigate()
  const linkFriend = () =>{
    navigate(`/profile/${email}`)
  }
  return (
    <>
      <div className='profileBar' onClick={linkFriend}>
        {/* <img className='profileBarImg' src={userData[0].profilePicture} alt="" /> */}
        <img className='profileBarImg' src={profilePicture !=="" ? profilePicture : noProfile} alt="" />
        {/* <span>{userData[0].username}</span> */}
        <span>{username}</span>
    </div>
    </>
  )
}
