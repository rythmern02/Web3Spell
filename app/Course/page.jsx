"use client"
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../_services'
import Link from 'next/link'
import CategoryFilter from './_components/CategoryFilter'
import CourseCard from './_components/CourseCard'

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
    <div className=' relative z-20 '>
      <div className="flex flex-col items-center justify-center " id="Courses">
      <h1 className="text-[30px] text-transparent text-white bg-clip-text mt-16 lg:mt-24  mb-5">
        Our Courses
      </h1>
      <div  className='flex flex-col'>
      <CategoryFilter />
      </div>
      {Course?.length > 0 && (
        <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-10">
          {Course?.map((course) => (
            <Link key={course.id} href={"/course-preview/" + course.id}>
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
