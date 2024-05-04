import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'

const liveIcon = "https://companieslogo.com/img/orig/LVC.WA-dbc2d581.png"

const LiveChat = () => {
    const chatMessages = useSelector((store)=>store.chat.messages)
    const dispatch = useDispatch()

    const [liveMessage, setLiveMessage] = useState("")

    useEffect(()=>{
      const i = setInterval(()=>{
        
        dispatch(addMessage({
            name: generateRandomName(),
            message:"This app is just amazing!!!"
        }))
        console.log("its work")
    
    }
      
      ,2000)

        return()=> clearInterval(i)
    }
    ,[])



  return (
    <div className='w-[80%] rounded-lg gap-2 p-2 h-[350px] border flex flex-col-reverse  border-gray-400 '>
        <div className='flex justify-center gap-1'>
            <h2 className='font-semibold text-lg'>LiveChat</h2>
            <img className='w-6 h-6' src={liveIcon} alt="" />
        </div>
        
        <form className='flex gap-2' onSubmit={(e)=>{
                                        
                        e.preventDefault()
                        dispatch(addMessage({
                            name:"Raza Rajpoot",
                            message:liveMessage
                        }))
                        setLiveMessage("")
        }}>
           
            <input
            value={liveMessage}
            onChange={(e)=> setLiveMessage(e.target.value)}
            
            type="text" className='w-full h-10 text-sm focus:outline-none border p-2 border-gray-300 rounded-md' />
            <button  className='px-4  bg-blue-400 text-white rounded-md'>Send</button>
        
        </form>


        <div className=' flex flex-col-reverse h-full bg-gray-100 rounded-md overflow-y-hidden'>
        {// don't use index as key.
            chatMessages.map((chat,index)=>(
            
                <ChatMessage key={index} name={chat.name} message={chat.message} />
            ))
        }

        </div>
        
    </div>
  )
}

export default LiveChat