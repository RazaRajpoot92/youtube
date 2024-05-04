import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import ContentContainer from './ContentContainer'
import LiveChat from './LiveChat'
import VideoContainer from './VideoContainer'
const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchedParam] = useSearchParams()
    const param = searchedParam.get("v")

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full '>
      <div className='p-4 flex w-full '>
          
          <iframe className='rounded-lg flex-[1.5]' width="750" height="350" src={`https://www.youtube.com/embed/${param} `}
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                  web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>

          <div className=' pl-2 flex justify-center flex-1'>
            <LiveChat />
          </div>

      </div>
          <div className='flex  '>
              <div className='flex-[1.5]'>
                  <ContentContainer/>
                  <CommentContainer />
              </div>

              <div className=' flex  flex-1'>
                <VideoContainer />
              </div>
            </div>
    </div>

  )
}

export default WatchPage