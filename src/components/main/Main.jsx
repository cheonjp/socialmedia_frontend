import React from 'react'
import LeftBar from '../leftbar/LeftBar'
import MainDisplay from '../mainDisplay/MainDisplay'
import RightBar from '../rightbar/RightBar'
import "./main.css"

export default function Main({savedUser}) {
  return (
    <div className='main'>
        <LeftBar savedUser={savedUser}/>
        <MainDisplay savedUser ={savedUser}/>
        <RightBar savedUser ={savedUser}/>
    </div>
  )
}
