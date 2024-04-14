import React, { useEffect } from 'react'
import './Recommended.css'
import {useSelector ,useDispatch} from 'react-redux'
import { API_KEY, value_converter} from '../../data'
import { apiDataAction } from '../../store/apiDataSlice'
import { NavLink } from 'react-router-dom'

function Recommended({categoryId}) {

  const dispatch =useDispatch()
    const data=useSelector(store=>store.data)

    const fetchData= async ()=>{
        const relatedvideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(relatedvideo_url)
        .then(res=>res.json())
        .then(data=>dispatch(apiDataAction.addData(data.items)))
    }
    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div className='recommended'>
      {data.map((item,index)=>{
        return(
          <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </NavLink>
        )
      })}
      
    </div>
  )
}

export default Recommended
