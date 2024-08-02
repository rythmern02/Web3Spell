import React, { useEffect, useState } from "react";
import {  FaRegCheckCircle } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { markChapterCompletedG } from "@/app/_services";

const PotionVideoPlayer = ({ activeChapter , CompletedChapter, setCompletedChapter,  userCourse}) => {
  const [url, setUrl] = useState();

  const isChapterCompleted = (chapterId) => {
    return CompletedChapter.find((item) => item.chapterId == chapterId);
  };

  const markChapterCompleted= async()=>{
    if(!CompletedChapter?.length){
      setCompletedChapter([]);
    }
    CompletedChapter?setCompletedChapter(
      [
        ...CompletedChapter,{
          chapterId:activeChapter?.chapterNumber+""
        }
      ]
    ):setCompletedChapter([{
      chapterId:activeChapter?.chapterNumber+""
    }]);

    await markChapterCompletedG(userCourse?.id, activeChapter?.chapterNumber).then(resp=>{
      console.log("the resp is the :",resp);
    })
    console.log(CompletedChapter);
  }
  useEffect(() => {
    setUrl(activeChapter?.youtubleUrl);
  }, [activeChapter]);

  if (!activeChapter) {
    return <div className="mt-24 text-white">Loading....</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-75%">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer 
            url={url} 
            controls 
            width="100%" 
            height="100%" 
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>
      <div className="p-5 mt-5 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-800 bg-opacity-20">
        <div className="w-full lg:w-auto">
          <h2 className="text-[25px] flex justify-center font-medium mb-4 lg:mb-0 lg:px-4 text-white">{activeChapter.name}</h2>
        </div>
        {!isChapterCompleted(activeChapter.chapterNumber)?
        <button className="cursor-pointer p-2 bg-gradient-to-r from-blue-700 to-[#04003b] text-white rounded-lg text-[16px] mt-2 lg:mt-0 lg:ml-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out" onClick={()=>markChapterCompleted()}>
          <span className="flex items-center justify-center">
            <FaRegCheckCircle />
            <span className="ml-2">Mark As Completed!</span>
          </span>
        </button> :
            null
        }
      </div>
    </div>
  );
};

export default PotionVideoPlayer;
