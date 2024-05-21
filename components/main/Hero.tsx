import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="Hero">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-0.5 w-0.5 left-0 z-[1] object-cover "
      >
        <source src="/spin.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
