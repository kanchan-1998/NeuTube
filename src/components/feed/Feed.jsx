import React, { useEffect } from 'react'
import './Feed.css'
import { NavLink } from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import { API_KEY, value_converter } from '../../data'
import { apiDataAction } from '../../store/apiDataSlice'
import moment from 'moment'

function Feed() {
    const dispatch =useDispatch()
    const data=useSelector(store=>store.data)
    const {category}=useSelector(store=>store.category)
    const fetchData= async ()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

        await fetch(videoList_url)
        .then(res=>res.json())
        .then(data=>dispatch(apiDataAction.addData(data.items)))
    }
    useEffect(()=>{
        fetchData()
    },[category])

  return (
    <div className="feed">
        {data.map((item,index)=>{
            return(
                <NavLink key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </NavLink>
            )
        })}
    </div>
    
  )
}

export default Feed


