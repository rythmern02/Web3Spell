"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const judges = [
  {
    name: "Rachit Agarwal",
    role: "DevRel at Plume Network",
    image: "/rachit.jpg?height=200&width=200",
    bio: "Developer Relations expert specializing in blockchain ecosystem development",
    Twitter: "https://x.com/rachitag112",
    Linkedin:"https://www.linkedin.com/in/rachitag112/"
  },
  {
    name: "Grahil Khandelwal",
    role: "Ecosystem at Mantra Network",
    image: "/grahil.webp?height=200&width=200",
    bio: "Experienced in building and nurturing blockchain ecosystems",
    Twitter: "https://x.com/grahilk",
    Linkedin:"https://www.linkedin.com/in/grahilkhandelwal/"
  },
  {
    name: "Sanket Agarwal",
    role: "QuillAI Network",
    image: "/sanket.jpeg?height=200&width=200",
    bio: "Ensuring AI Agents don't go rogue | Cheff at QuillAI Network",
    Twitter: "https://x.com/",
    Linkedin: "https://www.linkedin.com/in/gmsanketagarwal/"
  },
  {
    name: "Dayitva Goel",
    role: "Developer Support at Uniswap Foundation",
    image: "/dayitva.jpg?height=200&width=200",
    bio: "Building and growing the Uniswap ecosystem | DeFi enthusiast and blockchain ecosystem developer",
    Twitter: "https://x.com/dayitva_goel",
    Linkedin: "https://www.linkedin.com/in/dayitvagoel/"
  },
];

export default function Judges() {
  return (
    <section id="judges" className="py-20 relative overflow-hidden">
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
              Visionary Judges
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
            Meet our esteemed panel of judges who will evaluate your innovative
            projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
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
                        src={judge.image || "/placeholder.svg"}
                        alt={judge.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 rounded-full border border-white/30 bg-black flex items-center justify-center text-white hover:border-white/60"
                      >
                        <Link href={judge.Twitter}>
                        <Twitter className="h-3 w-3" />
                        </Link>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 rounded-full border border-white/30 bg-black flex items-center justify-center text-white hover:border-white/60"
                      >
                      <Link href={judge.Linkedin}>
                        <Linkedin className="h-3 w-3" />
                      </Link>
                      </motion.button>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {judge.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">{judge.role}</p>
                    <p className="text-gray-400 text-sm">{judge.bio}</p>
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
          <p className="text-gray-300 mb-4">
            Stay tuned as we announce more distinguished judges!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
