import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"


export default function profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="assets/p9.png" alt="" />
            <img className='profileUserImg' src="assets/person/pro3.png" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends !</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  )
}
