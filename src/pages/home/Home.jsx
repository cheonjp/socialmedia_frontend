import React from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate,BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import LeftBar from '../../components/leftbar/LeftBar'
import Main from '../../components/main/Main'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import Account from '../account/Account'

export default function Home() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext)
  const [savedUser, setSavedUser] = useState([])
  const [action,setAction] = useState(false)

  const navigate = useNavigate()


  useEffect(()=>{
    const currentUser = sessionStorage.getItem("userInfo")
    setSavedUser(JSON.parse(currentUser))
    
  },[action])
  useEffect(()=>{
    const getUser = async () =>{
      !user && navigate("/login")
      const res = await axios.get("/users/"+user)
      sessionStorage.setItem("userInfo", JSON.stringify(res.data))
      setAction(true)
    }
    getUser()
  },[])
  return (
    <>
      <Header savedUser={savedUser}/>
      <Main savedUser ={savedUser}/>
    </>
  )
}
