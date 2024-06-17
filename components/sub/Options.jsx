import Image from 'next/image'
import React from 'react'

const Options = () => {
    const optionsList =[
        {
            id:1,
            name:"Github",
            icon:"/github-mark-white.png"
        },
        {
            id:2,
            name:"Demo",
            icon:"/demo.png"
        },
        {
            id:3,
            name:"Youtube",
            icon:"/youtube-svgrepo-com.svg"
        }
    ]
  return (
    <div className=' flex items-center justify-center gap-3'>
        {optionsList.map((option, index)=>{
            return(
            <div key={index} className='p-2 border border-gray-900 rounded-lg flex flex-col items-center w-full bg-black bg-opacity-20 cursor-pointer'>
                <Image src={option.icon} width={35} height={35} />
                <h2 className='text-[18px] text-white  '>{option.name}</h2>
                </div>)
        })
        }
    </div>
  )
}

export default Options