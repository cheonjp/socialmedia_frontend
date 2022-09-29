import React from 'react'
import "./iconBox.css"

export default function IconBox({img,text,setClass}) {
  return (
    <div className={`iconBox ${setClass}`}>
        <img src={img} alt="" />
        <span>{text}</span>
    </div>
  )
}
