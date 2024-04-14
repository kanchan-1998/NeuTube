import React from 'react'
import './SideBar.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { categoryAction } from '../../store/categorySlice'

function SideBar() {
  const {category}=useSelector(store=>store.category)
  const dispatch= useDispatch()
  const sideBar = useSelector((store)=>store.sideBar)
  return (
    <div className={`sidebar ${sideBar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>dispatch(categoryAction.home())}>
          <img src="/images/home.png" alt="" />
          <p>Home</p>
        </div>

        <div className={`side-link ${category===20?"active":""}`} onClick={()=>dispatch(categoryAction.gaming())} >
          <img src="/images/game_icon.png" alt="" />
          <p>Gaming</p>
        </div>
        
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>dispatch(categoryAction.automobiles())} >
          <img src="/images/automobiles.png" alt="" />
          <p>Automobiles</p>
        </div>

        <div className={`side-link ${category===17?"active":""}`} onClick={()=>dispatch(categoryAction.sports())} >
          <img src="/images/sports.png" alt="" />
          <p>Sports</p>
        </div>

        <div className={`side-link ${category===24?"active":""}`} onClick={()=>dispatch(categoryAction.entertainment())} >
          <img src="/images/entertainment.png" alt="" />
          <p>Entertainment</p>
        </div>

        <div className={`side-link ${category===28?"active":""}`} onClick={()=>dispatch(categoryAction.technology())} >
          <img src="/images/tech.png" alt="" />
          <p>Technology</p>
        </div>

        <div className={`side-link ${category===10?"active":""}`}  onClick={()=>dispatch(categoryAction.music())}>
          <img src="/images/music.png" alt="" />
          <p>Music</p>
        </div>

        <div className={`side-link ${category===22?"active":""}`} onClick={()=>dispatch(categoryAction.blogs())}>
          <img src="/images/blogs.png" alt="" />
          <p>Blogs</p>
        </div>

        <div className={`side-link ${category===25?"active":""}`} onClick={()=>dispatch(categoryAction.news())}>
          <img src="/images/news.png" alt="" />
          <p>News</p>
        </div>
        <hr/>
      </div>   

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src="/images/me.jpg" alt="" />
          <p>Jennifer</p>
        </div>

        <div className="side-link">
          <img src="/images/simon.png" alt="" />
          <p>MrSimon</p>
        </div>

        <div className="side-link">
          <img src="/images/tom.png" alt="" />
          <p>MrTom</p>
        </div>

        <div className="side-link">
          <img src="/images/megan.png" alt="" />
          <p>Crafts</p>
        </div>

        <div className="side-link">
          <img src="/images/cameron.png" alt="" />
          <p>MrCameron</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
