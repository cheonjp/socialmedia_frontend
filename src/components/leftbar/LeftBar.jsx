import React, { useState } from 'react'
import IconBox from '../iconBox/IconBox'
import ProfileBar from '../profileBar/ProfileBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./leftbar.css"

export default function LeftBar({savedUser}) {
  const [hide,setHide]=useState('hide')
  const [hideBtn,setHideBtn]= useState(false)
  const showBtn = ()=>{
    setHideBtn(!hideBtn)
    console.log(hideBtn)
    hideBtn ? setHide('hide') : setHide('')
  }
  return (
    <div className='leftBar'>
        <ProfileBar savedUser={savedUser}/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" text="Friends"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" text="Groups"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" text="Marketplace"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" text="Watch"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" text="Memories"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" text="Saved"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" text="Pages"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" text="Events"/>

        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png" setClass={hide} text="Ad Center"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png" setClass={hide} text="Ads Manager"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png" setClass={hide} text="Climate Science Center"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/WreZVYrGEZH.png" setClass={hide} text="Community Help"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" setClass={hide} text="COVID-19 Information Center"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png" setClass={hide} text="Emotional Health"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png" setClass={hide} text="Facebook Pay"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png" setClass={hide} text="Favorites"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png" setClass={hide} text="Fundraisers"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png" setClass={hide} text="Gaming Video"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png" setClass={hide} text="Live Videos"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png" setClass={hide} text="Messenger"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png" setClass={hide} text="Messenger Kids"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/chERa2RCrrg.png" setClass={hide} text="Meta Quest"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" setClass={hide} text="Most Recent"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png" setClass={hide} text="Play Games"/>
        <IconBox img="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png" setClass={hide} text="Recent ad activity"/>

        <div className="seeMoreBtn"  onClick={showBtn}>
          {!hideBtn? <KeyboardArrowDownIcon className='i-seeMore' />: <KeyboardArrowUpIcon className='i-seeMore' />}
        <span>{!hideBtn ? "See More" : "See Less"}</span>
        </div>
    </div>
  )
}
