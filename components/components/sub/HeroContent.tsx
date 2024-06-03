"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // More accurate breakpoints and dynamic sizing
      if (width <= 680) {
        setScreenSize('mobile');
      } else if (width <= 1200) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex ${isMobile ? 'flex-col mt-0 justify-end px-2 ml-2' : isTablet ? 'flex-row mt-10' : 'flex-row'} items-center justify-center px-4 py-8 md:px-8 lg:px-16 z-[20]`}
    >
      <div className={`h-full w-full flex flex-col gap-5 justify-center text-start ${isMobile ? 'px-4 items-center' : isTablet ? 'px-10' : 'px-20'}`}>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] opacity-[0.9] rounded-lg" // Use Tailwind's rounded-lg class
        >
          <h1 className="Welcome-text text-lg p-4"> {/* Adjust font size as needed */}
            <Image
              src={"/WEB3SPELL.png"}
              alt=""
              width={isMobile ? 200 : isTablet ? 300 : 450}
              height={isMobile ? 200 : isTablet ? 300 : 400}
              // Consider using layout="fill" for responsive image scaling
            />
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`flex flex-col gap-5 mt-6 font-bold text-white max-w-[600px] w-auto h-auto ${isMobile ? 'text-xl mt-0' : isTablet ? 'text-2xl' : 'text-4xl'}`}
        >
          <span>Learn the Magic, Build the future</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`my-5 max-w-[600px] ${isMobile ? 'text-sm my-0' : isTablet ? 'text-md' : 'text-lg'} text-slate-400`}
        >
          Summon the arcane knowledge of the digital age! Our interactive
          courses weave enchantments in Web3, Blockchain, AI, UI/UX, and other
          potent spells. Unleash your inner wizard and forge a path to
          wondrous career possibilities!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" // Use Tailwind's rounded-lg class
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className={`w-full h-full flex ${isMobile ? 'justify-center mt-2' : 'justify-end'} items-center`}
      >
        <Image
          src={"/robo-cat.png"}
          alt="Mine Robo cat"
          // Consider using layout="fill" or setting responsive width/height based on screen size
          width={isMobile ? '300' : isTablet ? '400' : '600'}
          height={isMobile ? '300' : isTablet ? '400' : '600'}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
