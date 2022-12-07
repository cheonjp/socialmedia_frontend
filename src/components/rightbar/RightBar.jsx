import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FriendProfile from '../friendProfile/FriendProfile'
import ProfileBar from '../profileBar/ProfileBar'
import "./rightbar.css"

export default function RightBar({ savedUser }) {

  const [friendsList, setFriendsList] = useState([])

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/my_friends/jane@gmail.com")
      setFriendsList(res.data)
    }
    getFriends()
  }, [savedUser])

  return (
    <div className='rightBar'>
      <div className="contactOptionContainer">
        <span>Contacts</span>
      </div>
      <div className="friendListContainer">
        {
          friendsList.map((friend) => {
            return (
              <FriendProfile 
              username={friend.username} 
              email={friend.email} 
              profilePicture={friend.profilePicture} 
              />
            )
          })
        }
      </div>
    </div>
  )
}
