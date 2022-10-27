import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { CameraAlt, Work, School, Home, Favorite } from '@mui/icons-material/';
import { useRef } from 'react';
import "./account.css"
import Blog from '../../components/blog/Blog';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import noprofileImg from "../../images/noprofile.jpg"

export default function Account() {
    const friendsList = useRef()
    const userEmail = useParams().email
    const [profileData, setProfileData] = useState([])

    const [userId, setUserId] = useState("")
    const [posts, setPosts] = useState([])



    useEffect(() => {
        const getProfile = async () => {
            const res = await axios.get(`/users/${userEmail}`)
            setProfileData(res.data)
        }
        getProfile()
    }, [userEmail])
    
    useEffect(() => {
        const getUserPosts = async () => {
            setUserId(profileData._id)
            if(userId){
                const res = await axios.get(`/posts/${userId}`)
                setPosts(res.data.reverse())
                console.log(posts)
            }
        }
        getUserPosts()
    }, [profileData])



    const showFriends = () => {
        const index = friendsList.current.childElementCount
        let leftPosition = 0
        for (let i = 0; i < index; i++) {
            friendsList.current.children[i].style.transform = `translateX(${leftPosition}px)`
            leftPosition -= 10
        }
    }

    return (
        <>
            <Header savedUser={profileData} />
            <div className="account">
                <div className="profileHeader">
                    <div className="accountCoverImg">
                    </div>
                    <div className="accountProfileDetail">
                        <div className="imgContainer">
                            {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="accountProfileImg" /> */}
                            <img src={profileData.profilePicture} alt="" className="accountProfileImg" />
                            <CameraAlt className='i-camera' />
                        </div>
                        <div className="accountNameContainer">
                            <div className='userName'>{profileData.username}</div>
                            <div className='friendsNumber'>558 friends</div>
                            <div className='friendsList' ref={friendsList} onLoad={showFriends}>
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                            </div>
                        </div>
                        <div className="profileContainer">
                            <h2>Intro</h2>
                            <div className="profileText">
                                <Work />
                                <span>{profileData.job}</span>
                            </div>
                            <div className="profileText">
                                <School />
                                <span>{profileData.degree}</span>
                            </div>
                            <div className="profileText">
                                <Home />
                                <span>Lives in </span><span>{profileData.city}</span>
                            </div>
                            <div className="profileText">
                                <Favorite />
                                <span>{profileData.status}</span>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    posts.map((post) => {
                        return <Blog profileImg={profileData.profilePicture ? profileData.profilePicture : "../../images/noprofile.jpg"} username={profileData.username} post={post} />
                    })
                }
            </div>
        </>
    )
}
