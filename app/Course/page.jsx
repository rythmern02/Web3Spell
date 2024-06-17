"use client"
import React, { useEffect, useState } from 'react'
import Courses from '@/components/main/Courses'
import { getCourseList } from '../_services'
import CategoryFilter from '@/components/sub/CategoryFilter'
import Link from 'next/link'
import CourseCard from '@/components/sub/CourseCard'

const Page = () => {
  
  const [Course, setCourse] = useState([]);

  useEffect(() => {
    getCourses();
  }, [])
  
  const getCourses = () => {
    getCourseList().then((res) => { 
      console.log(res);
      setCourse(res.courseLists);
    });
  };

  return (
    <div className='py-16 relative z-20'>
      <div className="flex flex-col items-center justify-center " id="Courses">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Our Courses
      </h1>
      <CategoryFilter />
      {Course.length > 0 && (
        <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-10">
          {Course.map((course) => (
            <Link href={"/course-preview/" + course.id}>
              <CourseCard
                key={course.id} 
                src={course.banner.url}
                title={course.name}
                description={course.description}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default Page
