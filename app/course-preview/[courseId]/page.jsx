"use client";
import { getCourseById } from "@/app/_services";
import CourseDetail from "@/components/sub/CourseDetail";
import EnrollmentSection from "@/components/sub/EnrollmentSection";
import Options from "@/components/sub/Options";
import VideoPlayer from "@/components/sub/VideoPlayer";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseById(params.courseId).then((res) => {
      setCourseDetail(res.courseList);
    });
  };


  if (!courseDetail.chapter || !courseDetail.chapter[0].video.url) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-24 z-20 relative grid md:grid-cols-3 p-4">
      <div className="col-span-2">
        <VideoPlayer videoURL={courseDetail.chapter[0].video.url}/>
        <CourseDetail courseDetail={courseDetail}/>
      </div>
      <div className="p-5">
        <div className="mx-5 md:mt-[50px]">
        <Options />
        <EnrollmentSection courseDetail={courseDetail}/>
        </div>
      </div>
    </div>

);
};

export default Page;
