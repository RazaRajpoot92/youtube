import React from 'react'

const userIcon = "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
const ChatMessage = ({name, message}) => {
  
    return (
    <div className='w-full  mb-1 rounded-lg p-[2px] flex items-center gap-1'>
        
        <img className='w-8 h-8' src={userIcon} alt="" />
        <span className='font-semibold'>{name}</span>
        <span className='text-gray-600 text-sm ml-2'>{message}</span>
        
    </div>
  )
}

export default ChatMessage