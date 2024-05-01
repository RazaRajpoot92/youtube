import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async()=>{
           const data = await fetch(YOUTUBE_VIDEOS_API);
           const json = await data.json()
            console.log(json)
           setVideos(json.items)
    }

    return(
        <div className="p-3 gap-1 flex flex-wrap">
            {
                videos.map((video)=>(
                    <Link to={"/watch?v="+video.id} >
                    <VideoCart key={video.id} info = {video} />
                    </Link>
                ))
                
            }
         
        </div>
    )
}
export default VideoContainer;