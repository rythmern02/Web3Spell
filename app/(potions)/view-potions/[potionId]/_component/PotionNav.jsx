"use client";
import { FiCheckCircle, FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import React, { useEffect, useState } from "react";


const PotionNav = ({ courseDetail, userCourse, setActiveChapter, CompletedChapter, setCompletedChapter }) => {
  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    setActiveChapter(courseDetail?.chapter?.[0]);
  }, []);

  const isChapterCompleted = (chapterId) => {
    return CompletedChapter.find((item) => item.chapterId == chapterId);
  };
  if (!courseDetail.chapter) {
    return <div className="text-white mt-24">Loading...</div>; // Corrected typo
  }
  console.log("the courseDEtail is : ",courseDetail , "and the completedChapter is : ", CompletedChapter);
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-blue-800 p-5">
        <h2 className="font-medium text-[23px] text-white justify-center">
          {courseDetail.name}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {courseDetail.chapter.map((chapter, index) => (
          <div
            key={index}
            className={`flex gap-2 text-white text-[16px] px-5 p-4 cursor-pointer hover:bg-[#090167] ${
              activeState == index ? "bg-blue-900" : "" 
            } ${isChapterCompleted(chapter?.chapterNumber)&&activeState!=index?'bg-gradient-to-r from-[#072e9b] to-[#080020] bg-blend-multiply text-white':null}`}
            onClick={() => {
              console.log("hello hello hello", chapter?.chapterNumber)
              setActiveState(index);
              setActiveChapter(chapter);
            }}
          >
            <div className="flex justify-center self-center items-center">
              {activeState == index ? (
                <FiPauseCircle />
              ) : isChapterCompleted(chapter?.chapterNumber) ? (
                < FiCheckCircle/>
              ) : (
                <FiPlayCircle />
              )}
            </div>
            <h2>{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotionNav;
