"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, Award, Zap, Code, Users } from "lucide-react"

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const achievements = [
    {
      icon: <Calendar className="h-8 w-8" />,
      count: "25+",
      label: "Events Organized",
      description: "Successfully hosted over 25 blockchain events across Central India",
    },
    {
      icon: <Code className="h-8 w-8" />,
      count: "25+",
      label: "Projects Produced",
      description: "Facilitated the development of more than 25 blockchain projects",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      count: "5+",
      label: "Active Projects",
      description: "Currently supporting 5+ thriving projects in the blockchain ecosystem",
    },
    {
      icon: <Users className="h-8 w-8" />,
      count: "300+",
      label: "Community Members",
      description: "Built a vibrant community of blockchain enthusiasts and developers",
    },
  ]

  return (
    <section id="who-we-are" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>

      <motion.div
        className="absolute left-0 top-1/4 w-[300px] h-[300px] rounded-full border border-white/10 blur-sm"
        style={{
          y,
          opacity,
          x: "-10%",
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
              Who We Are
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
            Web3Spell - Pioneering blockchain innovation and education in Central India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-white/10 rounded-lg blur-sm"></div>
              <div className="relative bg-black p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At Web3Spell, we're dedicated to fostering blockchain innovation and education throughout Central
                  India. Our mission is to empower developers, entrepreneurs, and enthusiasts with the knowledge and
                  resources they need to build the decentralized future.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through workshops, hackathons, and community events, we're creating a vibrant ecosystem that connects
                  talent with opportunities and transforms ideas into impactful blockchain solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-lg border border-white/10 group-hover:border-white/20 transition duration-300 h-full flex flex-col">
                  <div className="text-white mb-3">{achievement.icon}</div>
                  <h4 className="text-3xl font-bold text-white mb-1">{achievement.count}</h4>
                  <p className="text-gray-300 font-medium mb-2">{achievement.label}</p>
                  <p className="text-gray-400 text-sm mt-auto">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-white/5 rounded-lg blur-sm"></div>
          <div className="relative bg-black p-8 rounded-lg border border-white/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Impact</h3>
                <p className="text-gray-300 mb-4">
                  Since our inception, we've been at the forefront of blockchain education and innovation in Central
                  India, creating a lasting impact on the regional tech ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-white mr-2 mt-0.5" />
                    <span className="text-gray-300">Established Central India's premier blockchain community</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-white mr-2 mt-0.5" />
                    <span className="text-gray-300">Connected local talent with global blockchain opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-white mr-2 mt-0.5" />
                    <span className="text-gray-300">Facilitated funding for promising blockchain startups</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-8 md:border-l border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white">Core Nexus</h3>
                <p className="text-gray-300 mb-4">
                  Core Nexus represents our most ambitious initiative yet—bringing together the best of Arbitrum's
                  technology with Central India's brightest minds.
                </p>
                <p className="text-gray-300">
                  Through 12 days of intensive workshops and a 2-day hackathon, we're creating the perfect environment
                  for innovation, collaboration, and breakthrough blockchain development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

