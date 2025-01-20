"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // More accurate breakpoints and dynamic sizing
      if (width <= 680) {
        setScreenSize("mobile");
      } else if (width <= 1200) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";
  {
    if (isMobile) {
      return (
        <div
          className={`navbar fixed top-0 right-0 w-full z-50 transition-transform duration-500 ease-in-out backdrop-filter backdrop-blur-lg ${
            isOpen ? "translate-y-0 " : "-translate-y-full mt-[55px]"
          }`}
        >
          <div className="flex flex-row gap-8   ">
            <button
              onClick={toggleMenu}
              className={`${
                isOpen ? "hidden" : ""
              } hamburger-button  focus:outline-none text-white font-bold py-2 px-4 rounded`}
            >
              <Image src={"/hamburger.png"} width={40} height={40} alt="" />
            </button>
            <span className="items-center self-center align-middle itzimg sm:ml-24">
              <Image src={"/WEB3SPELL.png"} width={200} height={250} alt="" />
            </span>
          </div>
          {isOpen && (
            <div className="w-full h-[65px] fixed top-0 mt-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
              <div className="w-full h-full flex flex-col items-center  m-auto px-[10px]">
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                  <div className="mt-auto flex flex-col items-center justify-between w-full h-auto border border-[#7042f861]  mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 bg-black  opacity-80">
                    <button
                      onClick={toggleMenu}
                      className={`hamburger-button focus:outline-none justify-self-end text-white font-bold py-2 px-4 rounded`}
                    >
                      <Image
                        src={"/close.png"}
                        className="opacity-70"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </button>
                    <Link href="/" className="cursor-pointer">
                      Home
                    </Link>

                    {user && (
                      <Link href="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    )}
                    <Link href="/Course" className="cursor-pointer">
                      Courses
                    </Link>
                    <Link href="/Events" className="cursor-pointer">
                      Events
                    </Link>
                    <Link href="/Guides" className="cursor-pointer">
                      Guides
                    </Link>
                    <div className="flex flex-row gap-4">
                      {!user ? (
                        <Link href={"/sign-in"}>
                          <div className="voltage-button">
                            <button>Get Started</button>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 234.6 61.3"
                              preserveAspectRatio="none"
                            >
                              <filter id="glow">
                                <feGaussianBlur
                                  className="blur"
                                  result="coloredBlur"
                                  stdDeviation="2"
                                ></feGaussianBlur>
                                <feTurbulence
                                  type="fractalNoise"
                                  baseFrequency="0.075"
                                  numOctaves="0.3"
                                  result="turbulence"
                                ></feTurbulence>
                                <feDisplacementMap
                                  in="SourceGraphic"
                                  in2="turbulence"
                                  scale="30"
                                  xChannelSelector="R"
                                  yChannelSelector="G"
                                  result="displace"
                                ></feDisplacementMap>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                  <feMergeNode in="coloredBlur"></feMergeNode>
                                  <feMergeNode in="displace"></feMergeNode>
                                  <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                              </filter>
                              <path
                                className="voltage line-1"
                                d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
                                fill="transparent"
                                stroke="#fff"
                              ></path>
                              <path
                                className="voltage line-2"
                                d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                                fill="transparent"
                                stroke="#fff"
                              ></path>
                            </svg>
                            <div className="dots">
                              <div className="dot dot-1"></div>
                              <div className="dot dot-2"></div>
                              <div className="dot dot-3"></div>
                              <div className="dot dot-4"></div>
                              <div className="dot dot-5"></div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <span />
                      )}
                      <div className="h-9">
                        <UserButton />
                        {user?.username}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#170a6053]/50  bg-[#03001417]  backdrop-blur-md z-50 px-10 hellonav">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
            href="/"
            className="h-auto w-auto flex flex-row items-center pl-4"
          >
            <Image
              src="/W3S.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin border-separate rounded opacity-70 "
            />
          </Link>
          <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#170a60e2] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <Link href="/" className="cursor-pointer px-3">
                Home
              </Link>
              {user && (
                <Link href="/dashboard" className="cursor-pointer px-3">
                  Dashboard
                </Link>
              )}
              <Link href="/Course" className="cursor-pointer px-3">
                Courses
              </Link>
              <Link href="/Events" className="cursor-pointer px-3">
                Events
              </Link>
              <Link href="/Guides" className="cursor-pointer px-3">
                Guides
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            {!user ? (
              <Link href={"/sign-in"}>
                <div className="voltage-button">
                  <button>Get Started</button>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 234.6 61.3"
                    preserveAspectRatio="none"
                  >
                    <filter id="glow">
                      <feGaussianBlur
                        className="blur"
                        result="coloredBlur"
                        stdDeviation="2"
                      ></feGaussianBlur>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.075"
                        numOctaves="0.3"
                        result="turbulence"
                      ></feTurbulence>
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="turbulence"
                        scale="30"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="displace"
                      ></feDisplacementMap>
                      <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="displace"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                    <path
                      className="voltage line-1"
                      d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
                      fill="transparent"
                      stroke="#fff"
                    ></path>
                    <path
                      className="voltage line-2"
                      d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                      fill="transparent"
                      stroke="#fff"
                    ></path>
                  </svg>
                  <div className="dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                    <div className="dot dot-4"></div>
                    <div className="dot dot-5"></div>
                  </div>
                </div>
              </Link>
            ) : (
              <span />
            )}
            <div className="h-9 gap-3 flex items-center">
              {" "}
              {/* Use flexbox for alignment */}
              <UserButton />
              <span className="text-white self-center">{user?.username}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
