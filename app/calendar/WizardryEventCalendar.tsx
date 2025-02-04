"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import enUS from "date-fns/locale/en-US"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./wizardry-calendar.css"
import MagicalParticles from "./MagicalParticles"

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
  type: "workshop" | "hackathon" | "meetup"
  description: string
  spell: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Superteam Gupshup",
    start: new Date(2025, 0, 18, 3, 0),
    end: new Date(2025, 0, 18, 6, 0),
    type: "meetup",
    description: "The focused gatherings to spark meaningful conversations and foster amazing connections in the Solana Ecosystem",
    spell: "GupShup---ERRATO",
  },
  {
    id: 2,
    title: "Arbitrum-Ignite Bootcamp",
    start: new Date(2025, 1, 10, 11, 0),
    end: new Date(2025, 1, 24, 1, 0),
    type: "hackathon",
    description: "Build innovative DeFi applications in this 3-day hackathon.",
    spell: "Expecto Patronum",
  },
  {
    id: 3,
    title: "Arbitrum-Ignite Hackathon",
    start: new Date(2025, 2, 1, 10, 0),
    end: new Date(2025, 2, 2, 9, 0),
    type: "hackathon",
    description: "Build innovative DeFi applications in this 3-day hackathon.",
    spell: "Expecto Patronum",
  }
]

const WizardryEventCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [view, setView] = useState<View>("month")
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window?.addEventListener("mousemove", handleMouseMove)
    return () => window?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const eventStyleGetter = (event: Event) => {
    const style = {
      backgroundColor:  "#FFD700",
      color: "black",
      border: "none",
      display: "block",
    }
    return { style }
  }

  const handleSelectSlot = (slotInfo: { start: Date; end: Date; action: string }) => {
    if (slotInfo.action === "click") {
      setSelectedDate(slotInfo.start)
    }
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.start.getDate() === date.getDate() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getFullYear() === date.getFullYear(),
    )
  }

  const handleNavigate = useCallback((newDate: Date) => setDate(newDate), [])

  const handleViewChange = useCallback((newView: View) => setView(newView), [])

  return (
    <div className="min-h-screen text-white p-8 overflow-hidden relative mt-14 lg:mt-22 z-20 cursor-pointer">
      <MagicalParticles />
      
      {/* Floating magical elements */}
      <div className="magical-elements">
        {["⚡", "🔮", "🧙‍♂️", "🧹", "🦉"].map((element, index) => (
          <motion.div
            key={index}
            className="magical-element"
            initial={{ x: Math.random() * window?.innerWidth, y: Math.random() * window?.innerHeight }}
            animate={{
              x: Math.random() * window?.innerWidth,
              y: Math.random() * window?.innerHeight,
              rotate: 360,
            }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            {element}
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-5xl font-bold mb-8 text-center font-harry-potter
        "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Magical Web3Spell Events
      </motion.h1>

      <motion.div
        className="relative bg-[#1C2F4A] bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={(event: any) => setSelectedEvent(event as Event)}
          onSelectSlot={handleSelectSlot}
          selectable
          view={view}
          onView={handleViewChange}
          date={date}
          onNavigate={handleNavigate}
          components={{
            event: ({ event }: any) => (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-2 font-harry-potter">
                {event.title}
              </motion.div>
            ),
          }}
          className="wizardry-calendar"
        />
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-[#1C2F4A] p-8 rounded-2xl max-w-md border-2 border-[#FFD700]"
              onClick={(e) => e.stopPropagation()}
              layoutId={`event-${selectedEvent.id}`}
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-harry-potter text-[#FFD700]">{selectedEvent.title}</h2>
              <p className="mb-4 text-[#B0C4DE]">{selectedEvent.description}</p>
              <p className="text-sm text-[#FFD700] mb-2">
                {format(selectedEvent.start as Date, "MMMM d, yyyy h:mm a")} -
                {format(selectedEvent.end as Date, "h:mm a")}
              </p>
              <p className="text-lg font-harry-potter text-[#9400D3]">Spell: {selectedEvent.spell}</p>
              <motion.button
                className="mt-4 px-6 py-2 bg-[#9400D3] text-white rounded-full hover:bg-[#800080] transition-colors font-harry-potter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(null)}
              >
                Finite Incantatem
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {selectedDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedDate(null)}
          >
            <motion.div
              className="bg-[#1C2F4A] p-8 rounded-2xl max-w-3xl w-full border-2 border-[#FFD700] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
            >
              <div className="absolute inset-0 bg-[url('/parchment-texture.jpg')] opacity-10" />
              
              <h2 className="text-4xl font-bold mb-6 font-harry-potter text-[#FFD700] text-center relative z-10">
                Magical Events on {format(selectedDate as Date, "MMMM d, yyyy")}
              </h2>
              <div className="space-y-6 relative z-10">
                {getEventsForDate(selectedDate).map((event) => (
                  <motion.div
                    key={event.id}
                    className="bg-[#0A1A2F] p-6 rounded-xl border border-[#FFD700] shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-harry-potter text-[#FFD700] mb-2">{event.title}</h3>
                    <p className="text-[#B0C4DE] mb-2">{event.description}</p>
                    <p className="text-sm text-[#FFD700] mb-2">
                      {format(event.start as Date, "h:mm a")} - {format(event.end as Date, "h:mm a")}
                    </p>
                    <p className="text-lg font-harry-potter text-[#9400D3]">Spell: {event.spell}</p>
                    <motion.div
                      className="mt-2 text-2xl"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      {event.type === "workshop" ? "🧙‍♂️" : "🏆"}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-6 px-6 py-2 bg-[#9400D3] text-white rounded-full hover:bg-[#800080] transition-colors font-harry-potter mx-auto block relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(null)}
              >
                Close Magical Scroll
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WizardryEventCalendar

