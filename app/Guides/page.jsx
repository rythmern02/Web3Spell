"use client";
import Link from "next/link";
import React from "react";
import { FiBookOpen } from "react-icons/fi";

const guides = [
  {
    title: "Intro to Blockchain Technology",
    description: "Understand the fundamental concepts of blockchain technology.",
    image: "/introtoblockchain.png", 
    link: "https://github.com/rythmern02/Web3Spell/blob/main/Guides/Intro%20to%20Blockchain%20Technology.pdf"
  },
  {
    title: "Solana's Architecture: An in-depth explanation",
    description: "Unveiling the mystical secrets behind Solana's innovative blockchain design",
    image: "/solanaarchitecture.png", 
    link: "https://github.com/rythmern02/Web3Spell/blob/main/Guides/Solana's%20Architecture.pdf"
  },
  {
    title: "Rust Refresher: A Guide to complete beginners",
    description: "Explore the latest trends and updates in the Rust programming language.",
    image: "/rust-refresher.webp", 
    link: "https://github.com/rythmern02/Web3Spell/tree/main/Guides/Rust-Refresher"
  },
  {
    title: "Creating an SPL token with the help of Anchor",
    description: "This guide will walk you through each line of the code, providing a deep understanding of how the token program operates.",
    image: "/anchor-spl.webp", 
    link: "https://github.com/rythmern02/Web3Spell/tree/main/Guides/Anchor%20SPL%20Token%20Programme"
  },
  {
    title: "Security and best practices in Solana Development",
    description: "Understanding the significance of security in Solana Development",
    image: "/securityintro.png", 
    link: "https://github.com/rythmern02/Web3Spell/blob/main/Guides/Best%20practices%20in%20Solana%20Development.pdf"
  },
    {
    title: "Wormhole - Bridging the Fragmented Web3 Landscape",
    description: "Wormhole is a decentralized messaging protocol bridging different blockchains, enhancing interoperability and liquidity in the Web3 ecosystem.",
    image: "/wormhole.jpg", 
    link: "https://github.com/rythmern02/Web3Spell/blob/main/Guides/Best%20practices%20in%20Solana%20Development.pdf"
  },
];

const GuidesPage = () => {
  return (
    <div className="min-h-screen  mt-[70px] text-white relative">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-stars-pattern opacity-20"></div>
      </div>
      <div className="relative z-20 p-4 lg:p-8">
        <h1 className="text-3xl font-semibold mb-8">Guides</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <li
              key={index}
              className="p-6 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <FiBookOpen className="text-purple-500 text-2xl" />
                <h2 className="text-xl font-semibold">{guide.title}</h2>
              </div>
              <div className="mb-4">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {guide.description}
              </p>
              <Link
                href={guide.link}
                className="text-purple-500 hover:underline"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuidesPage;
