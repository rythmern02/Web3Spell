'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Award, Users, Calendar, Clock, MapPin, Zap, Gift, Coffee } from 'lucide-react'

export default function HackathonPage() {
  const [hoveredDay, setHoveredDay] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  const bootcampDays = [
    "Introduction to Arbitrum",
    "Introduction to Arbitrum Stylus",
    "Setting Up Stylus Development Environment",
    "Advanced Stylus Smart Contract Development",
    "Interoperability with EVM (Stylus)",
    "Building a Full Application with Stylus",
    "Real-World Applications and Best Practices (Stylus)",
    "Introduction to Arbitrum Bold",
    "Dispute Resolution in Bold",
    "Implementing Bold in Your Projects",
    "Advanced Topics and Practical Applications (Bold)",
    "Quiz and Recap of All Concepts"
  ]

  const hackathonSchedule = [
    { day: 13, events: [
      { time: "09:00 AM", title: "Hackathon Kickoff", description: "Introduction to rules and objectives" },
      { time: "10:30 AM", title: "Team Formation", description: "Form teams and brainstorm project ideas" },
      { time: "12:00 PM", title: "Development Begins", description: "Start building projects using Arbitrum Stylus and Bold" }
    ]},
    { day: 14, events: [
      { time: "09:00 AM", title: "Development Continues", description: "Continue working on projects" },
      { time: "03:00 PM", title: "Project Presentations", description: "Present projects and receive feedback" },
      { time: "05:00 PM", title: "Awards Ceremony", description: "Judging and awarding the best projects" }
    ]}
  ]

  const faqItems = [
    {
      question: "Who can participate in the bootcamp and hackathon?",
      answer: "The event is open to all developers, designers, and blockchain enthusiasts. Whether you're a beginner or an experienced professional, you're welcome to join and learn about Arbitrum, Stylus, and Bold."
    },
    {
      question: "Do I need prior blockchain experience?",
      answer: "While some programming experience is helpful, prior blockchain experience is not required. Our bootcamp is designed to cater to various skill levels, from beginners to advanced developers."
    },
    {
      question: "What should I bring to the event?",
      answer: "Participants should bring their own laptop, charger, and any other devices they might need. We'll provide the learning materials, mentorship, and a conducive environment for coding and collaboration."
    },
    {
      question: "Is there a registration fee?",
      answer: "The registration process and any associated fees will be announced soon. Please check our website or follow our social media channels for updates."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, we'll have experienced mentors from the blockchain industry available throughout the hackathon to guide participants and answer questions."
    }
  ]

  return (
    <div className="min-h-screen bg-[#020817] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white overflow-hidden magical-bg relative z-20">
      <main className="container mx-auto px-4 py-16  ">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-4 animate-pulse glow p-4">
            Arbitrum Ignite By Web3Spell
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 animate-float">
            12 Days of Sorcery & 2 Days of Legendary Spellcasting
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
            Our Aim
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To empower the next generation of blockchain developers with cutting-edge skills in Arbitrum, Stylus, and Bold. Our mission is to bridge the gap between theoretical knowledge and practical application, fostering innovation in the Web3 space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-300">The Enchanted Bootcamp</h2>
            <p className="mb-4">Embark on a 12-day journey into the arcane arts of Arbitrum, Stylus, and Bold. Master the mystical craft of blockchain sorcery in the heart of India.</p>
            <ul className="list-disc list-inside space-y-2 text-purple-200">
              <li>Unravel the secrets of Arbitrum</li>
              <li>Craft powerful spells with Stylus</li>
              <li>Harness the arcane energies of Bold</li>
              <li>Test your mettle in magical challenges</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              Register for Bootcamp
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-300">The Grand Spellcasting Hackathon</h2>
            <p className="mb-4">Following your training, prove your worth in a 2-day hackathon where your newly acquired powers will be put to the ultimate test.</p>
            <ul className="list-disc list-inside space-y-2 text-blue-200">
              <li>Form alliances with fellow sorcerers</li>
              <li>Conjure innovative blockchain solutions</li>
              <li>Compete for a prize pool of 100,000+ rupees</li>
              <li>Enjoy magical snacks and beverages</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              Register for Hackathon
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-pulse">
            The 12 Trials of Mastery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bootcampDays.map((day, index) => (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                custom={index}
                animate={controls}
                initial={{ opacity: 0, y: 20 }}
              >
                <div className={`h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 ${hoveredDay === index ? 'ring-2 ring-purple-500' : ''}`}>
                  <span className="text-lg font-semibold text-center">Day {index + 1}</span>
                </div>
                {hoveredDay === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center p-4 z-20"
                  >
                    <p className="text-sm">{day}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text animate-pulse">
            The Legendary Hackathon
          </h2>
          {hackathonSchedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Day {day.day}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    whileHover={{ scale: 1.05 }}
                    className="bg-yellow-900/30 p-4 rounded-lg backdrop-blur-sm border border-yellow-500/30"
                  >
                    <p className="text-yellow-400 font-bold">{event.time}</p>
                    <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                    <p className="text-sm">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text animate-pulse text-center">
            Magical Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PrizeCard
              icon={<Award className="w-12 h-12 text-yellow-400" />}
              title="1st Place"
              description="50,000 rupees + Internship opportunity"
            />
            <PrizeCard
              icon={<Gift className="w-12 h-12 text-gray-400" />}
              title="2nd Place"
              description="30,000 rupees + Exclusive mentorship"
            />
            <PrizeCard
              icon={<Zap className="w-12 h-12 text-orange-400" />}
              title="3rd Place"
              description="20,000 rupees + Blockchain course voucher"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text animate-pulse text-center">
            Our Esteemed Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SponsorLogo name="Arbitrum" />
            <SponsorLogo name="Ethereum Foundation" />
            <SponsorLogo name="Polygon" />
            <SponsorLogo name="Chainlink" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-700/50"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text animate-pulse">
            The Gathering Place
          </h2>
          <p className="text-xl mb-8">Join us in the mystical city of Bhopal, Madhya Pradesh</p>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Bhopal, Madhya Pradesh"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
              <p className="text-white text-xl font-bold">Bhopal: Where Magic Meets Technology</p>
            </div>
          </div>
        </motion.div>

        <SparkleEffect />
        <FloatingRunes />
      </main>
    </div>
  )
}

function PrizeCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30 flex flex-col items-center text-center"
    >
      {icon}
      <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function SponsorLogo({ name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white/10 p-4 rounded-lg flex items-center justify-center"
    >
      <Image
        src={`/placeholder.svg?text=${name}&width=150&height=80`}
        alt={name}
        width={150}
        height={80}
      />
    </motion.div>
  )
}

function SparkleEffect() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  )
}

function FloatingRunes() {
  const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ']

  return (
    <>
      {runes.map((rune, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl text-purple-500/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {rune}
        </motion.div>
      ))}
    </>
  )
}

