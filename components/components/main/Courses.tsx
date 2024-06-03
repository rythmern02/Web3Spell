import React from "react";
import CourseCard from "../sub/CourseCard";

const Courses = () => {
  return (
    <div
      className="flex flex-col items-center justify-center z-[20] "
      id="Courses"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Our Courses
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      
        <CourseCard
          src="/Wormhole.jpg"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CourseCard
          src="/Push.jpeg"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CourseCard
          src="/Coming.jpg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-5">
        <CourseCard
          src="/Coming.jpg"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CourseCard
          src="/Coming.jpg"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CourseCard
          src="/Coming.jpg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Courses;
