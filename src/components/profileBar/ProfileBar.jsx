import React from 'react'
import "./profileBar.css"
// import { userData } from '../../context/data'
import { useState } from 'react'
import { useEffect } from 'react'
import noprofileImg from "../../images/noprofile.jpg"
import { Link, useNavigate } from 'react-router-dom'


export default function ProfileBar({savedUser}) {
  const [user,setUser]=useState({})
  const [userName,setUserName]=useState("")
  const [userImg,setUserImg]=useState("")
  const [userId,setUserId]=useState("")

  const navigate = useNavigate()

  useEffect(()=>{
    if(savedUser){
      setUserName(savedUser.username)
      setUserImg(savedUser.profilePicture)
      setUserId(savedUser._id)
    }
  },[savedUser])

  const showProfile = ()=>{
    navigate(`/profile/${userId}`)
  }
  
  return (
    <div className='profileBar' onClick={showProfile}>
        {/* <img className='profileBarImg' src={userData[0].profilePicture} alt="" /> */}
        <img className='profileBarImg' src={userImg ? userImg : noprofileImg} alt="" />
        {/* <span>{userData[0].username}</span> */}
        <span>{userName}</span>
    </div>
  )
}
