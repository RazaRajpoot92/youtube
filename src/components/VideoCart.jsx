const VideoCart = ({info})=>{
     const {snippet, statistics} = info
     const {thumbnails, title, channelTitle} = snippet
     const {viewCount} = statistics
    return(
        <div className="w-[350px] flex flex-col gap-1 items-start p-1">
            <img className="rounded-md" src={thumbnails.medium.url} alt="" />
            <h2 className="text-gray-700 font-bold text-sm">{title}</h2>
            <h2 className="">{channelTitle} ✔</h2>
            <h3>{viewCount} views</h3>
        </div>
    )
}

export default VideoCart;