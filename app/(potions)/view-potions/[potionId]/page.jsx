"use client";
import React, { useEffect, useState } from "react";
import PotionNav from "./_component/PotionNav";
import PotionVideoPlayer from "./_component/PotionVideoPlayer";
import { useUser } from "@clerk/nextjs";
import { getCourseById } from "@/app/_services";
const Page = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  const [activeChapter, setActiveChapter] = useState();
  const { user } = useUser();
  useEffect(() => {
    getCourses();
  }, [user]);

  const getCourses = async () => {
    await getCourseById(
      params.potionId,
      user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      setCourseDetail(res.courseList);
      setUserCourse(res.userEnrollCourses[0]);
      console.log("This is RNNNNNNN!", res);
    });
  };
  return (
    <div className=" flex mt-20 relative z-20">
      <div className=" w-72 border border-violet-900 shadow-sm h-screen text-white">
        <PotionNav courseDetail={courseDetail} userCourse={userCourse}  setActiveChapter={(chapter)=>{setActiveChapter(chapter)}}/>
      </div>
      <div className=" text-white">
        <PotionVideoPlayer
          courseDetail={courseDetail}
          userCourse={userCourse}
          activeChapter={activeChapter}
        />
      </div>
    </div>
  );
};

export default Page;
