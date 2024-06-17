"use client"
import React, { useState } from 'react'

const CategoryFilter = () => {
    const [activeState, setActiveState] = useState(0)
    const itemslist = [
        {
            id:1,
            name:"all",
            value:"all"
        },
        {
            id:2,
            name:"Blockchain Basics",
            value:"Basics"
        },
        {
            id:3,
            name:"Intro to Solana",
            value:"Solana info"
        },
        {
            id:4,
            name:"Solana Development",
            value:"Solana Development"
        },
        {
            id:5,
            name:"Advance Development",
            value:"advance Development"
        }
        
    ]
  return (
    <div className='flex gap-5'>
        {
            itemslist.map((item, index)=>(
                <button key={index} onClick={()=>{setActiveState(index)}} className={`border border-blue-950 p-2 px-4 text-sm  text-white rounded-md hover:border-purple-600 font-semibold ${activeState == index ? "border-purple-300 ": []}`}>
                    <h2>{item.name}</h2>
                </button>
            ))
        }
    </div>
  )
}

export default CategoryFilter;
