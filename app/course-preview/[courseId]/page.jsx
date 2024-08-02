"use client";
import { getCourseById } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseDetail from "../_component/CourseDetail";
import EnrollmentSection from "../_component/EnrollmentSection";
import Options from "../_component/Options";
import VideoPlayer from "../_component/VideoPlayer";

const Page = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  const {user} = useUser();
  
  useEffect(() => {
    getCourses();
  }, [user]);

  const getCourses = async() => {
     await getCourseById(params.courseId,user?.primaryEmailAddress?.emailAddress ).then((res) => {
      setCourseDetail(res.courseList);
      setUserCourse(res.userEnrollCourses[0]);
      console.log("Here is the user Course",params.courseId);
    });
  };

  if (!courseDetail.chapter || !courseDetail.chapter[0].youtubleUrl) {
    return <div className="mt-40 text-white">Loading...</div>;
  }

  return (
    <div className="mt-24 z-20 relative grid md:grid-cols-3 p-4">
      <div className="col-span-2">
        {courseDetail?.chapter[0]? <VideoPlayer videoURL={courseDetail.chapter[0].youtubleUrl}/>: null}
        <CourseDetail courseDetail={courseDetail} />
      </div>
      <div className="p-5">
        <div className="mx-5 md:mt-[50px]">
        <Options />
        <EnrollmentSection courseDetail={courseDetail} params={params} userCourse={userCourse}/>
        </div>
      </div>
    </div>

);
};

export default Page;
