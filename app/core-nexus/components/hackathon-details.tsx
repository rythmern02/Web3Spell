"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight, Brain, Gamepad2, Shield, Network } from "lucide-react"
import Link from "next/link"

export default function HackathonDetails() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="hackathon" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Animated elements */}
      <motion.div
        className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full border border-white/10 blur-sm"
        style={{
          y,
          opacity,
          x: "30%",
        }}
      />

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
              2-Day Galactic Hackathon
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
            After 12 days of cosmic exploration, put your skills to the test in our 2-day hackathon at TIT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur-sm group-hover:bg-white/15 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-lg border border-white/20 group-hover:border-white/30 transition duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Hackathon Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Date</h4>
                      <p className="text-gray-300">19-21st APRIL</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Duration</h4>
                      <p className="text-gray-300">48 hours of non-stop innovation</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Venue</h4>
                      <p className="text-gray-300">TIT Campus - Main Auditorium</p>
                      <p className="text-sm text-gray-400 mt-1">Different from the workshop venue</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Team Size</h4>
                      <p className="text-gray-300">2-5 members per team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur-sm group-hover:bg-white/15 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-lg border border-white/20 group-hover:border-white/30 transition duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Prizes & Opportunities</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Prize Pool</h4>
                      <p className="text-gray-300">₹5,00,000+ in Cash Prizes</p>
                      <p className="text-sm text-emerald-400 mt-1">Special Perks:</p>
                      <ul className="text-sm text-gray-300 mt-1 list-disc list-inside ml-2">
                        <li>Direct internship opportunities</li>
                        <li>API credits worth $5000 and more</li>
                        <li>Access to exclusive mentorship programs</li>
                        <li>Access to Top tier blockchain investment Opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Mentorship</h4>
                      <p className="text-gray-300">Guidance from industry experts</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Networking</h4>
                      <p className="text-gray-300">Connect with partners and potential investors</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Deployment Opportunities</h4>
                      <p className="text-gray-300">Chance to deploy on Arbitrum ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-10 text-white">Hackathon Tracks</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "DeFi & Payments",
                description: "Build next-gen decentralized financial applications, wallets, and payment solutions to revolutionize finance on-chain",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                title: "AI x Web3",
                description: "Explore how AI can enhance blockchain applications, from smart contract automation to decentralized AI models",
                icon: <Brain className="h-6 w-6" />,
              },
              {
                title: "NFTs, Gaming & Metaverse",
                description: "Leverage blockchain for immersive gaming, NFT marketplaces, play-to-earn models, and digital ownership",
                icon: <Gamepad2 className="h-6 w-6" />,
              },
              {
                title: "Privacy, Security & Identity",
                description: "Innovate on decentralized identity (DID), zero-knowledge proofs (ZKPs), and smart contract security",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                title: "Interoperability & Infrastructure",
                description: "Develop cross-chain solutions, decentralized storage, oracles, and blockchain scalability innovations",
                icon: <Network className="h-6 w-6" />,
              },
            ].map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-lg border border-white/20 group-hover:border-white/40 transition duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-white/30 flex items-center justify-center text-white">
                    {track.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{track.title}</h4>
                  <p className="text-gray-300">{track.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-transparent border border-white rounded-full shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-white via-white to-white group-hover:opacity-10"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-5"></span>
            <Link href="https://dorahacks.io/hackathon/core-nexus/">
            <span className="relative flex items-center">
              Register for Hackathon
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            </Link>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-white">
            <span className="relative inline-block">
              Cosmic Timeline
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h3>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white before:via-purple-500 before:to-transparent before:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {[
              {
                day: "Day 1 - April 19: The Grand Summoning Begins!",
                events: [
                  { time: "10:00 AM", title: "Gates to the Wizard's Realm Open", desc: "Step into the enchanted venue, collect your wizard robes (swag), and meet fellow spellcasters" },
                  { time: "11:00 AM", title: "The Sorcerer's Oath: Opening Ceremony", desc: "The High Council reveals the ancient scrolls of hackathon rules" },
                  { time: "12:00 PM", title: "Spellcasting Workshops & Wizard's Academy", desc: "Learn Web3 magic with expert enchanters and choose your school of wizardry" },
                  { time: "1:30 PM", title: "Feast of the Elders", desc: "Magical lunch before unleashing your first incantations" },
                  { time: "2:30 PM", title: "The Great Summoning: Hacking Begins!", desc: "Teams start brewing their enchanted projects" },
                  { time: "5:00 PM", title: "Wizardry Quests & Fun Challenges", desc: "Mini-games, meme battles, and cryptic Web3 riddles" },
                  { time: "8:00 PM", title: "Potion Brewing (Dinner Break)", desc: "Refuel your mana with delicious food" },
                  { time: "10:00 PM", title: "Magical Jamming Session & Chill Zone", desc: "Acoustic tunes and Web3 convos under the starry night" },
                  { time: "12:00 AM", title: "Midnight Wizard's Duel", desc: "Secret coding challenges and surprise bounties" },
                  { time: "1:30 AM", title: "Midnight Snacks & Energy Potions", desc: "Coffee and snacks to power through the night" }
                ]
              },
              {
                day: "Day 2 - April 20: The Journey into the Arcane Depths",
                events: [
                  { time: "8:00 AM", title: "Dawn of the Spellcasters", desc: "Breakfast & special morning bounties" },
                  { time: "12:00 PM", title: "Check-in with the Grand Wizards", desc: "Refine your projects with mentor guidance" },
                  { time: "2:00 PM", title: "The Grand Feast & Networking", desc: "Break and mingle with fellow sorcerers" },
                  { time: "4:00 PM", title: "The Dark Hour", desc: "Debugging & final enhancements" },
                  { time: "8:00 PM", title: "Wizard's Game Night", desc: "Multiplayer games and Web3-themed scavenger hunt" },
                  { time: "11:00 PM", title: "Midnight Feast", desc: "Power snacks and Web3 strategy talks" }
                ]
              },
              {
                day: "Day 3 - April 21: The Final Spell & The Grand Battle",
                events: [
                  { time: "8:00 AM", title: "Final Dawn", desc: "Last debugging and demo preparations" },
                  { time: "10:00 AM", title: "The Hourglass Turns", desc: "Hacking ends! Projects ready for judgment" },
                  { time: "11:00 AM", title: "The Grand Showcase", desc: "Teams present their magical creations" },
                  { time: "2:00 PM", title: "Battle of the Titans", desc: "Final judging round" },
                  { time: "4:00 PM", title: "The Coronation", desc: "Prize ceremony & closing rituals" },
                  { time: "6:00 PM", title: "The Final Celebration", desc: "Dance of the Wizards & Networking" }
                ]
              }
            ].map((day, dayIndex) => (
              <div key={day.day} className="relative group">
                <div className="ml-10 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="absolute left-0 mt-1">
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                        <span className="text-white text-sm">{dayIndex + 1}</span>
                      </div>
                    </div>
                    <div className="bg-black/50 p-6 rounded-lg border border-white/20 w-full">
                      <h4 className="text-xl font-bold text-white mb-4">{day.day}</h4>
                      <div className="space-y-4">
                        {day.events.map((event, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <span className="text-purple-400 font-mono">{event.time}</span>
                            <div>
                              <h5 className="text-white font-semibold">{event.title}</h5>
                              <p className="text-gray-400 text-sm">{event.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

