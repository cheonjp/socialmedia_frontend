import React from 'react'
import "./profileBar.css"
import { userData } from '../../context/data'
import { useState } from 'react'
import { useEffect } from 'react'
import noprofileImg from "../../images/noprofile.jpg"

export default function ProfileBar({savedUser}) {
  const [user,setUser]=useState({})
  const [userName,setUserName]=useState("")
  const [userImg,setUserImg]=useState("")
  useEffect(()=>{
    if(savedUser){
      console.log('tstset')
      setUserName(savedUser.username)
      setUserImg(savedUser.profilePicture)
    }
  },[savedUser])

  return (
    <div className='profileBar'>
        {/* <img className='profileBarImg' src={userData[0].profilePicture} alt="" /> */}
        <img className='profileBarImg' src={userImg ? userImg : noprofileImg} alt="" />
        {/* <span>{userData[0].username}</span> */}
        <span>{userName}</span>
    </div>
  )
}
