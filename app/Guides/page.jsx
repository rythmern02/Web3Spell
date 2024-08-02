"use client";
import React from "react";
import { FiBookOpen } from "react-icons/fi";

const guides = [
  {
    title: "Intro to Solana Development",
    description: "Learn the basics of Solana development and how to get started.",
    image: "/Coming.jpg" // Replace with your image paths
  },
  {
    title: "Intro to Blockchain Technology",
    description: "Understand the fundamental concepts of blockchain technology.",
    image: "/Coming.jpg" // Replace with your image paths
  },
  {
    title: "Hello this is RN",
    description: "Explore the latest trends and updates in the blockchain world.",
    image: "/Coming.jpg" // Replace with your image paths
  },
  {
    title: "Welcome in the world of Blockchain",
    description: "Get an overview of the blockchain ecosystem and its applications.",
    image: "/Coming.jpg" // Replace with your image paths
  }
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
              <a
                href="#"
                className="text-purple-500 hover:underline"
              >
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuidesPage;
