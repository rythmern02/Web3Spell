import React from "react";

const VideoShowcase = () => {
  return (
    <div className="container mx-auto  relative z-20 ">
      <h1 className=" text-center mb-8 sm:mb-1 bg-clip-text text-white py-5 text-2xl md:text-3xl text-[30px]">
        ✨ Trending Spells in Web3Spell ✨
      </h1>
      <div className="flex justify-center wrapperif m-10 ">
            <iframe
              src="https://www.youtube.com/embed/41AYzhQL5r4?si=PyUxqZuyCimfPIb-"
              title="Web3Spell Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
      </div>
    </div>
  );
};

export default VideoShowcase;
