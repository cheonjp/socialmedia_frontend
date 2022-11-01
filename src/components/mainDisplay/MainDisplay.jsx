import React, { useEffect } from 'react'
import { useState } from 'react'
import "./maindisplay.css"
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Blog from '../blog/Blog';
import { useRef } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function MainDisplay({ savedUser }) {
  const [profilePicture, setProfilePicture] = useState("")
  const [userName, setUserName] = useState("")
  const [userId,setUserId]=useState(null)
  const [timelinePosts,setTimelinePosts]=useState(null)
  const [uploadedImages, setUploadedImages] = useState([])
  // const [userId,setUserId]=useState("")
  const [imgArray, setImgArray] = useState([])
  const [userPost,setUserPost]=useState([])

  let imgName = []
  
  const navigate = useNavigate()
  
  const postText = useRef()
  const formRef = useRef()


  useEffect( () => {
    if (savedUser !== null) {
      setProfilePicture(savedUser.profilePicture)
      setUserName(savedUser.username)
      setUserId(savedUser._id)

    }
  }, [savedUser])

  useEffect(()=>{
    if(userId){
      const timelinePosts = async()=>{
        try {
          const res = await axios.get(`posts/timeline/${userId}`)
          setTimelinePosts(res.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      timelinePosts()
    }
  },[userId])

  const creatingPost = async (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const timeStamp = new Date().getTime()
    
    if (uploadedImages.length !== 0) {
      imgName = []
      for (let i = 0; i < uploadedImages.length; i++) {
        imgArray.push(uploadedImages[i].name)
        formData.append("file",uploadedImages[i].name)
      }
      
      try {
        const res = await axios.post("/upload",formData)
        imgArray.forEach((each)=>{
          each =res.data+"_"+each
          imgName.push(each)
        })  
        
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res = await axios.post("/posts/post",{
        userId:savedUser._id,
        postText:postText.current.value,
        postImg:imgName,
      })
      window.location.reload()
      navigate("/")
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await axios.get("/posts/"+savedUser._id)
      setUserPost(res.data)
    } catch (error) {
      console.log(error)
    }

    setImgArray([])
    navigate("/")
  }
  return (
    <div className='mainDisplay'>
      <div className="postBox">
        <form id="postForm" onSubmit={(e)=>creatingPost(e)} ref={formRef}>
          <div className="opinionContainer">
            <div className="myOpinion">
              <img src={profilePicture} alt="" />

              <input type="text" className="opinionBox" ref={postText} placeholder={`What's on your mind, ${userName}`} />
            </div>
            <div className="uploadFileBox">
              <label className='uploadLabel'>
                <LiveTvIcon className='uploadIcon uploadLiveIcon' />
                <span>Live video</span>
              </label>
              <label className='uploadLabel'>
                <input type="file" id="file" name="file" multiple onChange={(e) => setUploadedImages(e.target.files)} />
                <AddPhotoAlternateOutlinedIcon className='uploadIcon uploadImgIcon' />
                <span>Photo</span>
              </label>
              <label className='uploadLabel'>
                <input type="file" multiple />
                <EmojiEmotionsOutlinedIcon className='uploadIcon uploadFeelingIcon' />
                <span>Feeling/activity</span>
              </label>
            </div>
            <button type="submit">Post</button>
          </div>
        </form>
        {timelinePosts && timelinePosts.posts.map(post => {
          return <Blog from={"main"} profilePicture={profilePicture} username={userName} post={post} profileImg={timelinePosts.friends}/>
        })}
        {/* {timelinePosts && timelinePosts.map((post) => {
          return <Blog post={post}/>
        })} */}
      </div>
    </div>
  )
}
