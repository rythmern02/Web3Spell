"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Core Nexus",
      date: "2025-03-20",
      time: "02:30",
      description:
        "Master the fundamentals of blockchain magic in this Amazing Course.",
      category: "Workshop & Hackathon",
      imageUrl: "/core-nexus.png",
      spots: 200,
      url: "/core-nexus",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-20 relative">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r text-white text-transparent bg-clip-text mb-4 p-4"
          >
            Magical Events
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-xl text-white"
          >
            <SparkleIcon className="w-6 h-6 animate-pulse" />
            <p>Discover the Next Web3 Adventure</p>
            <SparkleIcon className="w-6 h-6 animate-pulse" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-center">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-black/40 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Header */}
        <div className="relative">
          <div className="absolute top-2 right-2 z-10 px-3 py-1 bg-purple-500/20 rounded-full text-white text-sm backdrop-blur-sm">
            {event.category}
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r text-white text-transparent bg-clip-text mb-2">
              {event.title}
            </h3>
            <p className="text-white text-sm">{event.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 space-y-2">
          <div className="flex items-center gap-2 text-white">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm">
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <ClockIcon className="w-4 h-4" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <UsersIcon className="w-4 h-4" />
            <span className="text-sm">{event.spots} spots available</span>
          </div>
        </div>

        {/* Footer */}
        <Link href={"/core-nexus"} passHref>
          <div className="p-6">
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5">
              Register Now
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

// Custom Icons
function SparkleIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.813 1.912a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.813-1.912a2 2 0 001.272-1.272L12 3z" />
    </svg>
  );
}

function CalendarIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UsersIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
