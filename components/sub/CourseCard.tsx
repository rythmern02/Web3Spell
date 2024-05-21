import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const CourseCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg border border-[#2A0E61] ">
      <a
        href={
          "https://rythme.hashnode.dev/wormhole-bridging-the-fragmented-web3-landscape"
        }
      >
        
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
