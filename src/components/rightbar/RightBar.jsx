import React from 'react'
import FriendProfile from '../friendProfile/FriendProfile'
import ProfileBar from '../profileBar/ProfileBar'
import "./rightbar.css"

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="contactOptionContainer">
        <span>Contacts</span>
      </div>
      <div className="friendListContainer">
        <FriendProfile/>
        <FriendProfile/>
        <FriendProfile/>
      </div>
    </div>
  )
}
