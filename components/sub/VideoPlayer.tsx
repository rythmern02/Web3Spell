import React from 'react'

const VideoPlayer = ({videoURL}: any) => {
  return (
    <div className='border border-gray-900 rounded-lg p-[30px] bg-black bg-opacity-20'>
        <h2 className='text-gray-600 mb-3'> Course Preview</h2>
        <video width={1000}  height={250} controls controlsList='nodownload'>
            <source src={videoURL} type='video/mp4'/>
        </video>
    </div>
  )
}

export default VideoPlayer