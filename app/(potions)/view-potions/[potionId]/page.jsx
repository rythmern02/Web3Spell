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
  const [CompletedChapter, setCompletedChapter] = useState()
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
      setCompletedChapter(res?.userEnrollCourses[0]?.completedChapter);
      console.log("This is RNNNNNNN!", res);
    });
  };

  return (
    courseDetail?.name && CompletedChapter &&  (
      <div>
          <div className="flex flex-col lg:flex-row mt-16 lg:mt-20 relative z-20  h-screen">
            <div className="w-full lg:w-1/4 xl:w-1/5 border-b lg:border-r border-blue-900 shadow-lg h-64 lg:h-full bg-[#000000] bg-opacity-20">
              {courseDetail ? (
                <PotionNav
                  courseDetail={courseDetail}
                  userCourse={userCourse}
                  setActiveChapter={setActiveChapter}
                  CompletedChapter={CompletedChapter}
                  setCompletedChapter={setCompletedChapter}
                />
              ) : null}
            </div>
            <div className="flex-1 flex justify-center items-center bg-[#2c2e45] p-4 lg:p-8 bg-opacity-5">
              <PotionVideoPlayer
                courseDetail={courseDetail}
                userCourse={userCourse}
                activeChapter={activeChapter}
                CompletedChapter={CompletedChapter}
                setCompletedChapter={setCompletedChapter}
              />
            </div>
          </div>
      </div>
    )
  );
};

export default Page;
