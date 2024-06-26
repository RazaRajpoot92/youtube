import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCart,{topViewCart} from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{

    const [videos, setVideos] = useState([])

    const TopView = topViewCart(VideoCart)

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async()=>{
           const data = await fetch(YOUTUBE_VIDEOS_API);
           const json = await data.json()

           setVideos(json.items)
    }

    return(
        <div className=" gap-1 flex justify-center flex-wrap">
            {
                videos.map((video)=>(
                    <Link key={video.id} to={"/watch?v="+video.id} >
                        {       // For top rated videos cards, extra styling.
                            // video.statistics.viewCount > 600000? <TopView key={video.id} info = {video} />: <VideoCart info={video} />
                        }
                        <VideoCart info={video} />

                    </Link>
                ))
            }
        </div>
    )
}
export default VideoContainer;