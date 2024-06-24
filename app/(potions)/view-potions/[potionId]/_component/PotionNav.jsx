"use client";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const PotionNav = ({ courseDetail, userCourse, setActiveChapter }) => {
  const [activeState, setActiveState] = useState(0);
  useEffect(() => {
    setActiveChapter(courseDetail?.chapter?.[0]);
  }, [])
  
  if (!courseDetail.chapter) {
    return <div className="text-white mt-24">Loading...</div>; // Corrected typo
  }

  return (
    <div className="">
      <div className="border-b border-violet-800 p-5">
        <h2 className="font-medium text-[20px]">
          {courseDetail.chapter[0].name}
        </h2>
      </div>
      <div>
        {courseDetail.chapter.map((chapter, index) => (
          <div
            key={index}
            className={`flex gap-2 text-white text-[16px] px-5 p-4 cursor-pointer hover:bg-violet-700 ${
              activeState == index ? "bg-violet-900" : ""
            }`}
            onClick={() => {
              setActiveState(index);
              setActiveChapter(chapter);
            }}
          >
            <div className="flex justify-center self-center items-center">
              {activeState == index ? <FiPauseCircle /> : <FiPlayCircle />}
            </div>
            <h2>{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotionNav;
