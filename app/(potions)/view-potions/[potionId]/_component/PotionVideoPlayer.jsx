import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PotionVideoPlayer = ({ activeChapter }) => {
  console.log("Active chapter is :", activeChapter?.video?.url);
  if (!activeChapter) {
    return <div className="mt-24 text-white">Loading....</div>;
  }
  return (
    <div className="">
  <video width={1000} height={250} controls controlsList="nodownload" key={activeChapter?.video?.url}>
    <source src={activeChapter?.video?.url} type="video/mp4" />
  </video>
  <div className="p-5 border border-purple-900 rounded-lg mt-5 flex justify-center items-center">
    <div className="flex">

    <h2 className="text-[20px] font-medium px-20">{activeChapter.name}</h2>
    <br></br>
    <button
      className="cursor-pointer p-2 w-full bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-lg text-[16px] mt-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out"
    >
      <span className="flex justify-center self-center items-center">
        <FaRegCheckCircle />
      </span>
      <h2 className="ml-2">Mark As Completed!</h2>
    </button>
    </div>
  </div>
</div>
  );
};

export default PotionVideoPlayer;
