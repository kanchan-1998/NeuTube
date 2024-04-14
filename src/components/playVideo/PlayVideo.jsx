import React, { useEffect } from 'react'
import './PlayVideo.css'
import {useDispatch, useSelector} from 'react-redux'
import { API_KEY, value_converter } from '../../data'
import { apiVideoDataAction } from '../../store/apiVideoDataSlice'
import moment from 'moment'
import { apiChannelDataAction } from '../../store/apiChannelData'
import { apiCommentDataAction } from '../../store/apiCommnetData'
import { useParams } from 'react-router-dom'

function PlayVideo() {
    const {videoId}=useParams()
    const dispatch= useDispatch()
    const videodata=useSelector(store=>store.videodata)
    const channeldata=useSelector(store=>store.channeldata)
    const commentdata=useSelector(store=>store.commentdata)

    const fetchVideoData=async()=>{
        //feching video data
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

        await fetch(videoDetails_url)
        .then(res=>res.json())
        .then(data=>dispatch(apiVideoDataAction.addVideoData(data.items[0])))
    }

    const fetchOtherData= async ()=>{
        //feching channel data
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videodata.snippet.channelId}&key=${API_KEY}`

        await fetch(channelData_url)
        .then(res=>res.json())
        .then(data=>dispatch(apiChannelDataAction.addChannelData(data.items[0])))
    
        //feching comment data
        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

        await fetch(comment_url)
        .then(res=>res.json())
        .then(data=>dispatch(apiCommentDataAction.addCommentData(data.items)))
    }


    useEffect(()=>{
        fetchVideoData()
    },[videoId])

    useEffect(()=>{
        fetchOtherData()
    },[videodata])

  return (
    <div className='play-video'>
      {/* <video src="/images/video.mp4" controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <h3>{videodata?videodata.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{videodata?value_converter(videodata.statistics.viewCount):"16k"} Views &bull; {videodata?moment(videodata.snippet.publishedAt).fromNow():""}</p>
        <div>
            <span><img src="/images/like.png" alt="" />{videodata?value_converter(videodata.statistics.likeCount):155}</span>
            <span><img src="/images/dislike.png" alt="" /></span>
            <span><img src="/images/share.png" alt="" />Share</span>
            <span><img src="/images/save.png" alt="" />Save</span>
        </div>  
      </div>
      <hr/>

      <div className="publisher">
        <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{videodata?videodata.snippet.channelTitle:""}</p>
            <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):""} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{videodata?videodata.snippet.description.slice(0,375):"Description Here"}</p>
        <hr/>
        <h4>{videodata?value_converter(videodata.statistics.commentCount):23} comments</h4>

        {commentdata.map((item,index)=>{
            return(
                <div key={index} className="comment">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} </h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src="/images/like.png" alt="" />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src="/images/dislike.png" alt="" />
                        </div>
                    </div>
                </div>
            )
        })}     
      </div>
    </div>
  )
}

export default PlayVideo
