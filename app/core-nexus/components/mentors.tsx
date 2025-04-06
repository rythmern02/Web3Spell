"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const mentors = [
  {
    name: "Rythme Nagrani",
    role: "Blockchain Expert",
    image: "/rythme.webp?height=200&width=200",
    bio: "Blockchain specialist with expertise in Arbitrum ecosystem",
    Twitter: "https://x.com/RythmeNagr64107",
    Linkedin: "https://www.linkedin.com/in/rythme-nagrani-170ab1265/"
  },
  {
    name: "Sumit Choudhary",
    role: "Smart Contract Developer",
    image: "/sumit.jpg?height=200&width=200",
    bio: "Experienced smart contract developer and security expert",
    Twitter: "https://x.com/itscoolsem",
    Linkedin: "https://www.linkedin.com/in/coolsem/"
  },
  {
    name: "Kushagra Sarathe",
    role: "DeFi Specialist",
    image: "/kushagra.webp?height=200&width=200",
    bio: "DeFi expert with deep knowledge of financial protocols",
    Twitter: "https://x.com/kushagrasarathe",
    Linkedin: "https://www.linkedin.com/in/kushagrasarathe"
  },
  {
    name: "Eshan Sharma",
    role: "Full Stack Developer",
    image: "/eshan.webp?height=200&width=200",
    bio: "Full stack developer with focus on blockchain applications",
    Twitter: "https://x.com/Eshan_Sharma__",
    Linkedin: "https://www.linkedin.com/in/eshan-s-a87b12190/"
  },
  {
    name: "Itachi Uchiha",
    role: "Developer Relations",
    image: "/itachi.jpg?height=200&width=200",
    bio: "Developer Advocate at Hackquest and AvoWallet",
    Twitter: "https://x.com/ItachiOnChain",
    Linkedin: ""
  }
]

export default function Mentors() {
  return (
    <section id="mentors" className="py-20 relative overflow-hidden">
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
              Stellar Mentors
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
            Learn from industry experts who will guide you through your blockchain journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-white/5 rounded-xl blur-sm group-hover:bg-white/10 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-xl border border-white/20 group-hover:border-white/40 transition duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/30 p-1">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 rounded-full border border-white/30 bg-black flex items-center justify-center text-white hover:border-white/60"
                      >
                        <Link href={mentor.Twitter}>
                        <Twitter className="h-3 w-3" />
                        </Link>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 rounded-full border border-white/30 bg-black flex items-center justify-center text-white hover:border-white/60"
                      >
                        <Link href={mentor.Linkedin}>
                        <Linkedin className="h-3 w-3" />
                        </Link>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 rounded-full border border-white/30 bg-black flex items-center justify-center text-white hover:border-white/60"
                      >
                        <Github className="h-3 w-3" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                    <p className="text-white/70 text-sm mb-3">{mentor.role}</p>
                    <p className="text-gray-400 text-sm">{mentor.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">More industry experts will be joining us for the hackathon!</p>
                  </motion.div>
      </div>
    </section>
  )
}

