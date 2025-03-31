"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Calendar, Clock, MapPin } from "lucide-react"

const workshopData = [
  {
    day: 1,
    title: "Introduction to Arbitrum",
    description: "Get started with Arbitrum ecosystem and fundamentals",
    icon: "🚀",
    time: "2:00 PM - 5:00 PM",
    location: "Workshop Center, Hall A",
  },
  {
    day: 2,
    title: "Introduction to Arbitrum Stylus",
    description: "Learn about Stylus and its capabilities",
    icon: "💻",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 3,
    title: "Setting Up Stylus Development Environment",
    description: "Configure your development environment for Stylus",
    icon: "⚙️",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 4,
    title: "Advanced Stylus Smart Contract Development",
    description: "Deep dive into Stylus smart contract development",
    icon: "📝",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 5,
    title: "Interoperability with EVM (Stylus)",
    description: "Learn how Stylus interacts with the EVM",
    icon: "🔄",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 6,
    title: "Building a Full Application with Stylus",
    description: "Create a complete application using Stylus",
    icon: "🏗️",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 7,
    title: "Real-World Applications and Best Practices (Stylus)",
    description: "Explore real-world use cases and best practices",
    icon: "🌐",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 8,
    title: "Introduction to Arbitrum Bold",
    description: "Get started with Arbitrum Bold",
    icon: "🔥",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 9,
    title: "Dispute Resolution in Bold",
    description: "Learn about dispute resolution mechanisms in Bold",
    icon: "⚖️",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 10,
    title: "Implementing Bold in Your Projects",
    description: "Integrate Bold into your blockchain projects",
    icon: "🛠️",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 11,
    title: "Advanced Topics and Practical Applications (Bold)",
    description: "Explore advanced topics and practical applications of Bold",
    icon: "🧠",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
  {
    day: 12,
    title: "Quiz and Recap of All Concepts",
    description: "Test your knowledge and review all concepts learned",
    icon: "📚",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium TIT",
  },
]

export default function WorkshopSchedule() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [visibleWorkshops, setVisibleWorkshops] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleWorkshops(1)
      } else if (window.innerWidth < 1024) {
        setVisibleWorkshops(2)
      } else {
        setVisibleWorkshops(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? workshopData.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setActiveIndex((prev) => (prev === workshopData.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleWorkshops = () => {
    const workshops = []
    for (let i = 0; i < visibleWorkshops; i++) {
      const index = (activeIndex + i) % workshopData.length
      workshops.push({ ...workshopData[index], index })
    }
    return workshops
  }

  return (
    <section id="workshops" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
            <span className="relative inline-block">
              12 Days of Cosmic Workshops
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on a 12-day journey through the Arbitrum universe, exploring Stylus and Bold technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16 overflow-hidden" ref={timelineRef}>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10"></div>
          <div className="flex justify-between relative py-8">
            {Array.from({ length: 12 }).map((_, index) => {
              const isActive = index === activeIndex % 12
              const isPast = index < activeIndex % 12

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      isActive
                        ? "border-white bg-white"
                        : isPast
                          ? "border-white/50 bg-white/50"
                          : "border-white/30 bg-transparent"
                    } relative z-10`}
                    onClick={() => {
                      setDirection(index > activeIndex % 12 ? 1 : -1)
                      setActiveIndex(index)
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute -inset-2 rounded-full border border-white/30"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    )}
                  </div>
                  <div className={`mt-2 text-xs font-medium ${isActive ? "text-white" : "text-white/50"}`}>
                    Day {index + 1}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/50 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/50 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          <div className="overflow-hidden">
            <div className="flex gap-6">
              <AnimatePresence initial={false} mode="wait">
                {getVisibleWorkshops().map((workshop, idx) => (
                  <motion.div
                    key={`workshop-${workshop.day}-${idx}`}
                    className={`w-full flex-shrink-0 ${idx === 0 ? "md:w-1/2 lg:w-1/3" : "hidden md:block md:w-1/2 lg:w-1/3"}`}
                    initial={{
                      x: direction > 0 ? 100 : -100,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{
                      x: direction > 0 ? -100 : 100,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative group h-full">
                      <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur-sm group-hover:bg-white/20 transition duration-300"></div>
                      <div className="relative bg-black p-6 rounded-lg border border-white/20 group-hover:border-white/40 transition duration-300 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-2xl bg-black">
                            {workshop.icon}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-white">Day {workshop.day}</h3>
                            <div className="flex items-center text-white/70 text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Workshop</span>
                            </div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white">{workshop.title}</h4>
                        <p className="text-gray-300 mb-6">{workshop.description}</p>

                        <div className="mt-auto pt-4 border-t border-white/10">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{workshop.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{workshop.location}</span>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white bg-transparent border border-white/30 rounded-full text-sm"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-10"></span>
                          <span className="relative">View Details</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {workshopData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === activeIndex % 12 ? "bg-white w-6" : "bg-white/30"
              }`}
              onClick={() => {
                setDirection(index > activeIndex % 12 ? 1 : -1)
                setActiveIndex(index)
              }}
              aria-label={`Go to day ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

