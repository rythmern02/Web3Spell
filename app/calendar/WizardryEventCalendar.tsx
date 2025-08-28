"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar"
import { format, parse, startOfWeek, getDay, addDays, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"
import {enUS} from "date-fns/locale/en-US"
import { ChevronLeft, ChevronRight, CalendarIcon, Clock, MapPin, Users, Zap } from 'lucide-react'

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

interface Event {
  id: number
  title: string
  start: Date
  end: Date
  type: "workshop" | "hackathon" | "meetup" | "conference"
  description: string
  location: string
  attendees: number
  priority: "low" | "medium" | "high" | "critical"
   link: string | any
}

const events: Event[] = [
  {
    id: 1,
    title: "Superteam Gupshup",
    start: new Date(2025, 5, 18, 15, 0),
    end: new Date(2025, 6, 18, 18, 0),
    type: "meetup",
    description: "Focused gatherings to spark meaningful conversations and foster amazing connections in the Solana Ecosystem",
    location: "Virtual Space",
    attendees: 150,
    priority: "high",
    link: null
  },
  {
    id: 2,
    title: "Arbitrum-Ignite Bootcamp",
    start: new Date(2025, 1, 10, 11, 0),
    end: new Date(2025, 1, 24, 13, 0),
    type: "hackathon",
    description: "Build innovative DeFi applications in this intensive bootcamp program",
    location: "Metaverse Hub",
    attendees: 300,
    priority: "critical",
    link: null
  },
  {
    id: 3,
    title: "Arbitrum-Ignite Hackathon",
    start: new Date(2025, 2, 1, 10, 0),
    end: new Date(2025, 2, 2, 21, 0),
    type: "hackathon",
    description: "Build innovative DeFi applications in this 2-day hackathon challenge",
    location: "Cosmic Arena",
    attendees: 500,
    priority: "critical",
    link: null
  },
  {
    id: 4,
    title: "Web3 Workshop Series",
    start: new Date(2025, 0, 25, 14, 0),
    end: new Date(2025, 0, 25, 17, 0),
    type: "workshop",
    description: "Learn advanced smart contract development techniques",
    location: "Digital Realm",
    attendees: 75,
    priority: "medium",
    link: null
  },
  {
    id:5,
    title: "EthGlobal Co-Working Hours Bhopal",
    start: new Date(2025, 8, 11, 11, 0),
    end: new Date(2025, 8, 11, 15, 0),
    type: "workshop",
    description: "Come have fun and develop with best developers in the City.",
    location: "Bhopal",
    attendees: 40,
    priority: "high",
    link: "https://luma.com/ethglobal-cowork-bhopal"
  }
]

const CosmicParticle = ({ delay, type = "orb" }: { delay: number; type?: "orb" | "star" | "diamond" | "triangle" }) => {
  const shapes = {
    orb: "w-1 h-1 bg-white/30 rounded-full",
    star: "w-2 h-2 bg-white/40",
    diamond: "w-1 h-1 bg-white/35 rotate-45",
    triangle: "w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-transparent border-b-white/30",
  }

  return (
    <motion.div
      className={`absolute ${shapes[type]}`}
      style={{
        filter: type === "orb" ? "blur(0.5px)" : "none",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        clipPath:
          type === "star"
            ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
            : "none",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 300 - 150],
        y: [0, Math.random() * -200 - 50],
        rotate: type !== "orb" ? [0, 360] : 0,
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 3 + 2,
        ease: "easeOut",
      }}
    />
  )
}

const QuantumBeam = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-px h-16 bg-gradient-to-t from-transparent via-white/30 to-transparent"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      filter: "blur(0.5px)",
    }}
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scaleY: [0, 1, 0],
      rotate: [0, 180],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 4 + 3,
    }}
  />
)

const HolographicScanLine = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ y: "-100%" }}
    animate={{ y: "100%" }}
    transition={{
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 12,
      ease: "linear",
    }}
  >
    <div
      className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      style={{
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
      }}
    />
  </motion.div>
)

const AdvancedHolographicBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer energy field */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: [
            "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(225deg, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(315deg, transparent, rgba(255,255,255,0.1), transparent)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          filter: "blur(1px)",
        }}
      />

      {/* Main holographic border */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/20"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 0 30px rgba(255,255,255,0.2)",
        }}
      />

      <div className="relative">{children}</div>
    </div>
  )
}

const CosmicEventCard = ({ event, index }: { event: Event; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 })

  const priorityColors = {
    low: "rgba(255,255,255,0.3)",
    medium: "rgba(255,255,255,0.5)",
    high: "rgba(255,255,255,0.7)",
    critical: "rgba(255,255,255,0.9)",
  }

  const typeIcons = {
    workshop: <Zap className="w-4 h-4" />,
    hackathon: <Users className="w-4 h-4" />,
    meetup: <CalendarIcon className="w-4 h-4" />,
    conference: <MapPin className="w-4 h-4" />,
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 3)
    mouseY.set((e.clientY - centerY) / 3)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="relative group cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
      >
        <AdvancedHolographicBorder className="p-4 rounded-xl backdrop-blur-xl bg-white/[0.02] overflow-hidden">
          {/* Quantum energy field */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: isHovered
                ? `radial-gradient(circle at 50% 50%, ${priorityColors[event.priority]} 0%, transparent 70%)`
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Energy pulses */}
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-xl border border-white/20"
                  animate={{
                    scale: [1, 1.05 + i * 0.02, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </>
          )}

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
              {[...Array(8)].map((_, i) => (
                <CosmicParticle key={i} delay={i * 0.1} type={["orb", "star"][i % 2] as any} />
              ))}
            </div>
          )}

          <div className="relative z-10">
            {/* Event header */}
            <div className="flex items-center justify-between mb-3">
              <motion.div
                className="flex items-center space-x-2 text-white"
                animate={{
                  filter: isHovered ? "drop-shadow(0 0 10px rgba(255,255,255,0.8))" : "none",
                }}
              >
                {typeIcons[event.type]}
                <span className="text-xs font-medium uppercase tracking-wider">{event.type}</span>
              </motion.div>
              <motion.div
                className="text-xs text-white/60"
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                }}
              >
                {event.attendees} attendees
              </motion.div>
            </div>

            {/* Event title */}
            <motion.h3
              className="text-sm font-bold text-white mb-2 leading-tight"
              style={{
                textShadow: isHovered ? "0 0 10px rgba(255,255,255,0.5)" : "none",
              }}
            >
              {event.title}
            </motion.h3>

            {/* Event time */}
            <div className="flex items-center space-x-1 text-xs text-white/70 mb-2">
              <Clock className="w-3 h-3" />
              <span>{format(event.start, "h:mm a")}</span>
            </div>

            {/* Priority indicator */}
            <motion.div
              className="absolute top-2 right-2 w-2 h-2 rounded-full"
              style={{
                backgroundColor: priorityColors[event.priority],
                boxShadow: `0 0 10px ${priorityColors[event.priority]}`,
              }}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [1, 0.5, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              }}
            />
          </div>

          {/* Holographic corners */}
          <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-white/30 rounded-tl-md" />
          <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-white/30 rounded-tr-md" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-white/30 rounded-bl-md" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-white/30 rounded-br-md" />
        </AdvancedHolographicBorder>
      </motion.div>
    </motion.div>
  )
}

const CosmicCalendarCell = ({
  date,
  events: dayEvents,
  onEventClick,
}: {
  date: Date
  events: Event[]
  onEventClick?: (event: Event) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const isToday = new Date().toDateString() === date.toDateString()
  const hasEvents = dayEvents.length > 0

  return (
    <motion.div
      className="relative h-24 border border-white/10 bg-white/[0.01] backdrop-blur-sm cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{
        background: isToday
          ? "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
          : hasEvents
          ? "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)"
          : "transparent",
      }}
    >
      {/* Quantum field effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isHovered
            ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
            : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Energy pulses for today */}
      {isToday && (
        <motion.div
          className="absolute inset-0 border border-white/30"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      )}

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <CosmicParticle key={i} delay={i * 0.1} type="orb" />
          ))}
        </div>
      )}

      {/* Date number */}
      <div className="absolute top-1 left-2 text-sm font-medium text-white/80">
        {format(date, "d")}
      </div>

      {/* Events */}
      <div className="absolute bottom-1 left-1 right-1 space-y-1">
        {dayEvents.slice(0, 2).map((event, index) => (
          <div key={event.id} onClick={() => onEventClick?.(event)}>
            <CosmicEventCard event={event} index={index} />
          </div>
        ))}
        {dayEvents.length > 2 && (
          <motion.div
            className="text-xs text-white/60 text-center"
            whileHover={{ scale: 1.1 }}
          >
            +{dayEvents.length - 2} more
          </motion.div>
        )}
      </div>

      {/* Corner accents */}
      {hasEvents && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20" />
        </>
      )}
    </motion.div>
  )
}

const CosmicEventModal = ({ event, onClose }: { event: Event; onClose: () => void }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AdvancedHolographicBorder className="backdrop-blur-2xl bg-white/[0.02] rounded-3xl p-8 overflow-hidden">
          {/* Quantum field background */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              background: isHovered
                ? [
                    "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                    "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  ]
                : "transparent",
            }}
            transition={{
              duration: 4,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            }}
          />

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(15)].map((_, i) => (
                <CosmicParticle key={i} delay={i * 0.1} type={["orb", "star", "diamond"][i % 3] as any} />
              ))}
              {[...Array(5)].map((_, i) => (
                <QuantumBeam key={`beam-${i}`} delay={i * 0.2} />
              ))}
            </div>
          )}

          {/* Scan line */}
          <HolographicScanLine />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <motion.h2
                  className="text-3xl font-black text-white mb-2"
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                >
                  {event.title}
                </motion.h2>
                <div className="flex items-center space-x-4 text-white/70">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium uppercase tracking-wider">
                    {event.type}
                  </span>
                  <span className="text-sm">Priority: {event.priority}</span>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Event details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <AdvancedHolographicBorder className="p-4 rounded-xl bg-white/[0.01]">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Schedule</span>
                </div>
                <div className="text-white/70 space-y-1">
                  <div>{format(event.start, "MMMM d, yyyy")}</div>
                  <div>
                    {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                  </div>
                </div>
              </AdvancedHolographicBorder>

              <AdvancedHolographicBorder className="p-4 rounded-xl bg-white/[0.01]">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Location</span>
                </div>
                <div className="text-white/70">{event.location}</div>
              </AdvancedHolographicBorder>

              <AdvancedHolographicBorder className="p-4 rounded-xl bg-white/[0.01]">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Attendees</span>
                </div>
                <div className="text-white/70">{event.attendees} registered</div>
              </AdvancedHolographicBorder>

              <AdvancedHolographicBorder className="p-4 rounded-xl bg-white/[0.01]">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Type</span>
                </div>
                <div className="text-white/70 capitalize">{event.type}</div>
              </AdvancedHolographicBorder>
            </div>

            {/* Description */}
            <AdvancedHolographicBorder className="p-6 rounded-xl bg-white/[0.01] mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Description</h3>
              <p className="text-white/70 leading-relaxed">{event.description}</p>
            </AdvancedHolographicBorder>

            {/* Action buttons */}
            <div className="flex space-x-4">
              <a href={event.link}>

              <motion.button
                className="flex-1 py-3 px-6 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }} 
                >
                Join Event
              </motion.button>
                </a>
              <motion.button
                className="py-3 px-6 bg-white/5 text-white/70 rounded-xl font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled
              >
                Add to Calendar
              </motion.button>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-xl" />
        </AdvancedHolographicBorder>
      </motion.div>
    </motion.div>
  )
}

const CosmicCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [view, setView] = useState<View>("month")
  const [date, setDate] = useState(new Date())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const calendarRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(calendarRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleNavigate = useCallback((newDate: Date) => setDate(newDate), [])
  const handleViewChange = useCallback((newView: View) => setView(newView), [])

  const getEventsForDate = (targetDate: Date) => {
    return events.filter(
      (event) =>
        event.start.getDate() === targetDate.getDate() &&
        event.start.getMonth() === targetDate.getMonth() &&
        event.start.getFullYear() === targetDate.getFullYear()
    )
  }

  const monthDays = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })

  // Helper to get week days for the current date
  const getWeekDays = (targetDate: Date) => {
    const start = startOfWeek(targetDate, { weekStartsOn: 0 })
    return Array.from({ length: 7 }, (_, i) => addDays(start, i))
  }

  // For day view, just show the current date
  const dayDays = [date]
  const weekDays = getWeekDays(date)

  return (
    <div className="min-h-screen text-white p-8 overflow-hidden relative z-20">
      {/* Advanced particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <CosmicParticle key={i} delay={i * 0.2} type={["orb", "star", "diamond", "triangle"][i % 4] as any} />
        ))}
        {[...Array(10)].map((_, i) => (
          <QuantumBeam key={`beam-${i}`} delay={i * 0.4} />
        ))}
      </div>

      {/* Dynamic cosmic grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
        }}
      />

      <div className="container mx-auto relative z-10 mt-10 mb-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          ref={calendarRef}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center relative"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          >
            <span className="relative inline-block">
              Calendar
              {/* Underline with energy flow */}
              <motion.div
                className="absolute left-0 right-0 -bottom-2 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                }}
                animate={
                  isInView
                    ? {
                        scaleX: 1,
                        background: [
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                          "linear-gradient(90deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.6))",
                          "linear-gradient(90deg, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.3))",
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                        ],
                      }
                    : { scaleX: 0 }
                }
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                initial={{ scaleX: 0 }}
              />
            </span>
            {/* Quantum energy field around title */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(ellipse at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            {/* Orbital rings around title */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/10 rounded-full"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/5 rounded-full"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mt-8"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Navigate through time and space to discover extraordinary Web3 events across the digital cosmos
          </motion.p>
        </motion.div>

        {/* Calendar navigation */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <AdvancedHolographicBorder className="flex items-center space-x-4 p-4 rounded-xl backdrop-blur-xl bg-white/[0.02]">
            <motion.button
              onClick={() => handleNavigate(addDays(date, -30))}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.h2
              className="text-2xl font-bold text-white min-w-[200px] text-center"
              style={{
                textShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
            >
              {format(date, "MMMM yyyy")}
            </motion.h2>

            <motion.button
              onClick={() => handleNavigate(addDays(date, 30))}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </AdvancedHolographicBorder>

          <AdvancedHolographicBorder className="flex items-center space-x-2 p-4 rounded-xl backdrop-blur-xl bg-white/[0.02]">
            {(["month", "week", "day"] as View[]).map((viewOption) => (
              <motion.button
                key={viewOption}
                onClick={() => handleViewChange(viewOption)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  view === viewOption
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  textShadow: view === viewOption ? "0 0 10px rgba(255,255,255,0.5)" : "none",
                }}
              >
                {viewOption.charAt(0).toUpperCase() + viewOption.slice(1)}
              </motion.button>
            ))}
          </AdvancedHolographicBorder>
        </motion.div>

        {/* Calendar grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <AdvancedHolographicBorder className="backdrop-blur-2xl bg-white/[0.01] rounded-3xl p-6 overflow-hidden">
            {/* Scan line */}
            <HolographicScanLine />

            {/* Quantum field background */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            {/* Calendar header */}
            <div className="grid grid-cols-7 gap-1 mb-4 relative z-10">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center py-3 text-white/70 font-medium text-sm uppercase tracking-wider"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar body */}
            <div className={`grid grid-cols-7 gap-1 relative z-10`}>
              {view === "month" &&
                monthDays.map((day) => {
                  const dayEvents = getEventsForDate(day)
                  return (
                    <CosmicCalendarCell
                      key={day.toISOString()}
                      date={day}
                      events={dayEvents}
                      onEventClick={setSelectedEvent}
                    />
                  )
                })}
              {view === "week" &&
                weekDays.map((day) => {
                  const dayEvents = getEventsForDate(day)
                  return (
                    <CosmicCalendarCell
                      key={day.toISOString()}
                      date={day}
                      events={dayEvents}
                      onEventClick={setSelectedEvent}
                    />
                  )
                })}
              {view === "day" &&
                dayDays.map((day) => {
                  const dayEvents = getEventsForDate(day)
                  return (
                    <CosmicCalendarCell
                      key={day.toISOString()}
                      date={day}
                      events={dayEvents}
                      onEventClick={setSelectedEvent}
                    />
                  )
                })}
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-xl" />
          </AdvancedHolographicBorder>
        </motion.div>

        {/* Event statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { label: "Total Events", value: events.length, icon: <CalendarIcon className="w-6 h-6" /> },
            { label: "This Month", value: events.filter(e => e.start.getMonth() === date.getMonth()).length, icon: <Clock className="w-6 h-6" /> },
            { label: "Attendees", value: events.reduce((sum, e) => sum + e.attendees, 0), icon: <Users className="w-6 h-6" /> },
            { label: "Locations", value: new Set(events.map(e => e.location)).size, icon: <MapPin className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
            >
              <AdvancedHolographicBorder className="p-6 rounded-xl backdrop-blur-xl bg-white/[0.02] text-center">
                <div className="flex justify-center mb-3 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </AdvancedHolographicBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Event modal */}
      <AnimatePresence>
        {selectedEvent && (
          <CosmicEventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CosmicCalendar
