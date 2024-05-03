import React from 'react'

const channelIcon = "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png"

const SubscribeContainer = () => {
  return (
    <div className='mt-6  flex justify-between items-center  h-16'>

        <div className='flex items-center gap-2'>

            <img className='h-12 w-12 rounded-full' src={channelIcon} alt="" />
            <div className='flex flex-col justify-center'>
                <p className=' font-semibold text-gray-800'>Coding With Expert</p>
                <p className='text-sm text-gray-700'>24M Subscribers</p>
            </div>
            <button className='w-24 h-10 ml-4 bg-black text-white rounded-full'>Subscribe</button>
        </div>

        <div className='flex items-center'>

            <button className='w-20 h-10 ml-4 bg-gray-300 text-black rounded-full'>Like</button>
            <button className='w-20 h-10 ml-4 bg-gray-300 text-black rounded-full'>Share</button>
            <button className='px-4 py-2  ml-4 bg-gray-300 text-black rounded-full'>Download</button>
            <button className='px-4 py-2  ml-4 bg-gray-300 text-black rounded-full'>Save</button>

        </div>
    </div>
  )
}

export default SubscribeContainer
