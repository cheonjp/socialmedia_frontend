import React from 'react'
import "./friendProfile.css"

export default function FriendProfile() {
  return (
    <>
      <div className='profileBar'>
        {/* <img className='profileBarImg' src={userData[0].profilePicture} alt="" /> */}
        <img className='profileBarImg' src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
        {/* <span>{userData[0].username}</span> */}
        <span>Josh</span>
    </div>
    </>
  )
}
