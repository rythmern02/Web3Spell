import { BookOpenIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CourseDetail = ({courseDetail}: any) => {
  return (
    <div className='mt-5 p-5 rounded-lg border border-gray-900 bg-black bg-opacity-20 '>
        <h2 className='text-[20px] text-white font-medium'>
            {courseDetail?.name}
        </h2>
        <div className='flex items-center gap-2 mt-2'>
            <BookOpenIcon className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1'/>
            <h2 className='text-[12px] text-white'> {courseDetail?.spellbookLength} Spells</h2>
        </div>
        <p className='line-clam-4 mt-3 text-white'>{courseDetail?.description}</p>
    </div>
    
  )
}

export default CourseDetail