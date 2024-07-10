import React from "react";

const VideoShowcase = () => {
  return (
    <div className="container mx-auto py-12 relative z-20 ">
      <h1 className="font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 text-2xl md:text-3xl">
        ✨ Trending Spells in Web3Spell ✨
      </h1>
      <div className="flex justify-center wrapperif m-16">
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
