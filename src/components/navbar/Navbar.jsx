import React from 'react'
import './Navbar.css'
import {useDispatch} from 'react-redux'
import { sideBarAction } from '../../store/sidebarSlice'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const dispatch=useDispatch()
  return (
    <nav className='flex-div '>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src="/images/menu.png" alt="" onClick={()=>dispatch(sideBarAction.toggle())}  />
        <NavLink to='/'><img className='logo' src="/images/Logo_neutube.png" alt="" /> </NavLink>
        <NavLink to='/'><p>NeuTube</p></NavLink>
      </div>

      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src="/images/search.png" alt="" />
        </div>  
      </div>

      <div className="nav-right flex-div">
        <img src="/images/upload.png" alt="" />
        <img src="/images/more.png" alt="" />
        <img src="/images/notification.png" alt="" />
        <img src="/images/me.jpg" className='user-icon' alt="" />
      </div>
      
    </nav>
  )
}

export default Navbar
