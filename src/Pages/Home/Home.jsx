import React from 'react'
import "./Home.css"
import SideBar from '../../components/sidebar/SideBar'
import {useSelector} from 'react-redux'
import Feed from '../../components/feed/Feed'

function Home() {
  const sideBar=useSelector((store)=>store.sideBar)
  return (
    <>
      <SideBar/>
      <div className={`container ${sideBar?"":"large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
