"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Skill_data, Tech_skills } from "@/constants"
import SkillDataProvider from "../sub/SkillDataProvider"
import SkillText from "../sub/SkillText"
import { motion, useInView } from "framer-motion"

const FloatingOrb = ({ delay, size = "small" }: { delay: number; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-1 h-1",
    medium: "w-2 h-2",
    large: "w-3 h-3",
  }

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} bg-white/20 rounded-full`}
      style={{
        filter: "blur(0.5px)",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 400 - 200],
        y: [0, Math.random() * -300 - 100],
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

const EnergyBeam = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-px h-20 bg-gradient-to-t from-transparent via-white/40 to-transparent"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
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
      repeatDelay: Math.random() * 4 + 2,
    }}
  />
)

const ScanLine = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ y: "-100%" }}
    animate={{ y: "100%" }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 6,
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

const HolographicBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
          filter: "blur(1px)",
        }}
      />
      {/* Main border */}
      <div className="absolute inset-0 rounded-2xl border border-white/20" />
      {/* Inner highlight */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

const EnhancedSkillIcon = ({ skill, index, sectionIndex }: { skill: any; index: number; sectionIndex: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        delay: sectionIndex * 0.5 + index * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.1, y: -10, rotateY: 5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <HolographicBorder className="p-4 rounded-xl backdrop-blur-xl bg-white/[0.02] shadow-2xl overflow-hidden">
        {/* Quantum field effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            background: isHovered
              ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Energy pulses */}
        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 rounded-xl border border-white/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl border border-white/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.3,
              }}
            />
          </>
        )}

        {/* Floating orbs on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            {[...Array(6)].map((_, i) => (
              <FloatingOrb key={i} delay={i * 0.1} size="small" />
            ))}
          </div>
        )}

        {/* Skill icon */}
        <div className="relative z-10">
          <SkillDataProvider src={skill.Image} width={skill.width} height={skill.height} index={index} />
        </div>

        {/* Holographic corners */}
        <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-white/30 rounded-tl-md" />
        <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-white/30 rounded-tr-md" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-white/30 rounded-bl-md" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-white/30 rounded-br-md" />

        {/* Energy flow indicator */}
        {isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              boxShadow: "0 0 10px rgba(255,255,255,0.4)",
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        )}
      </HolographicBorder>
    </motion.div>
  )
}

const SkillSection = ({
  skills,
  title,
  sectionIndex,
}: {
  skills: any[]
  title: string
  sectionIndex: number
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: sectionIndex * 0.3, duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HolographicBorder className="p-8 rounded-3xl backdrop-blur-xl bg-white/[0.01] relative overflow-hidden">
        {/* Section quantum field */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{
            background: isHovered
              ? [
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                ]
              : "transparent",
          }}
          transition={{
            duration: 4,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        />

        {/* Floating orbs around section */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(15)].map((_, i) => (
              <FloatingOrb key={i} delay={i * 0.1} size={i % 3 === 0 ? "medium" : "small"} />
            ))}
            {[...Array(5)].map((_, i) => (
              <EnergyBeam key={`section-beam-${i}`} delay={i * 0.2} />
            ))}
          </div>
        )}

        {/* Scan line across section */}
        {isHovered && <ScanLine />}

        {/* Section title */}
        <motion.h3
          className="text-2xl font-bold text-white text-center mb-8 relative"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
          animate={{
            textShadow: isHovered
              ? ["0 0 20px rgba(255,255,255,0.5)", "0 0 30px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.5)"]
              : "0 0 20px rgba(255,255,255,0.5)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          ✦ {title} ✦{/* Orbital ring around section title */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{
              duration: 10,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              ease: "linear",
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/10 rounded-full"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>
        </motion.h3>

        {/* Skills grid */}
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center relative z-10">
          {skills.map((skill, index) => (
            <EnhancedSkillIcon key={index} skill={skill} index={index} sectionIndex={sectionIndex} />
          ))}
        </div>

        {/* Section status indicator */}
        <motion.div
          className="absolute top-4 right-4 flex items-center space-x-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: sectionIndex * 0.3 + 0.5, duration: 0.5 }}
        >
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
            }}
          />
          <span className="text-white/60 text-xs font-medium">{skills.length} ABILITIES</span>
        </motion.div>

        {/* Energy streams at corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
      </HolographicBorder>
    </motion.div>
  )
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden pb-20 py-20 z-20"
    >
      {/* Floating cosmic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.2} size={i % 4 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"} />
        ))}
        {[...Array(20)].map((_, i) => (
          <EnergyBeam key={`global-beam-${i}`} delay={i * 0.3} />
        ))}
      </div>

      {/* Cosmic grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Enhanced background video */}
      <div className="w-full h-full absolute z-0">
        <div className="w-full h-full absolute flex items-center justify-center bg-cover">
          <motion.video
            className="w-full h-full object-cover"
            preload="auto"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2 }}
            style={{
              filter: "blur(0.5px) brightness(0.85) contrast(1.1)",
            }}
          />
          {/* Video overlay effects */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.15) 100%)",
            }}
          />
        </div>
      </div>

      {/* Enhanced skill text */}
      <motion.div
        className="relative z-10 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <SkillText />
      </motion.div>

      {/* Skills sections */}
      <div className="relative z-10 w-full px-6">
        <SkillSection skills={Skill_data} title="Fellow Keepers Of Spell" sectionIndex={0} />

        <SkillSection skills={Tech_skills} title="Advanced Frameworks" sectionIndex={1} />
      </div>

      {/* Ethereal summary section */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <HolographicBorder className="max-w-4xl mx-auto px-6">
          <motion.div
            className="p-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Quantum field around summary */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            <p
              className="text-white/70 text-lg leading-relaxed relative z-10"
              style={{
                textShadow: "0 0 10px rgba(255,255,255,0.2)",
              }}
            >
              Mastery of { Tech_skills.length} cosmic technologies, each one a gateway to infinite
              possibilities in the digital realm
            </p>

            {/* Floating summary orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(8)].map((_, i) => (
                <FloatingOrb key={i} delay={i * 0.2} size="small" />
              ))}
            </div>
          </motion.div>
        </HolographicBorder>
      </motion.div>
    </section>
  )
}

export default Skills
