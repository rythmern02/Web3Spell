import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full mt-24 bg-transparent text-gray-200 shadow-lg p-[15px] z-30 relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <Link href={'https://www.youtube.com/@Web3Spell'}>
              <span className="text-[15px] ml-[6px]">Youtube</span>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <Link href={''}>
              <span className="text-[15px] ml-[6px]">Github</span>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <Link href={'https://discord.com/invite/BrH3ZDyz'}>
              <span className="text-[15px] ml-[6px]">Discord</span>
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <Link
                href={
                  "https://www.instagram.com/web3spell?igsh=MWR6c2J6NmY3cnh2cg=="
                }
              >
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <Link href={"https://www.x.com/@web3spell"}>
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <Link href="https://www.linkedin.com/company/web3spell/">
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <Link href={'https://x.com/RythmeNagr64107'}>
              <span className="text-[15px] ml-[6px]">about me RN</span>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">web3spell@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; web3spell 2023 Inc. 
        </div>
      </div>
    </div>
  );
};

export default Footer;
