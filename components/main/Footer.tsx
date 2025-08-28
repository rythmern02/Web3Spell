"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {  RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx"
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"
import Link from "next/link"
import { disableNavWithFooter } from "@/utils/disableNavWithFooter"
import { usePathname } from "next/navigation"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"

const CosmicParticle = ({ delay, type = "orb" }: { delay: number; type?: "orb" | "star" | "diamond" | "triangle" }) => {
  const shapes = {
    orb: "w-2 h-2 bg-white/30 rounded-full",
    star: "w-3 h-3 bg-white/40",
    diamond: "w-2 h-2 bg-white/35 rotate-45",
    triangle: "w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white/30",
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
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
        x: [0, Math.random() * 600 - 300],
        y: [0, Math.random() * -400 - 100],
        rotate: type !== "orb" ? [0, 360] : 0,
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 4 + 2,
        ease: "easeOut",
      }}
    />
  )
}

const QuantumBeam = ({
  delay,
  direction = "vertical",
}: { delay: number; direction?: "vertical" | "horizontal" | "diagonal" }) => {
  const beamStyles = {
    vertical: "w-px h-24 bg-gradient-to-t from-transparent via-white/40 to-transparent",
    horizontal: "h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent",
    diagonal: "w-px h-24 bg-gradient-to-t from-transparent via-white/40 to-transparent rotate-45",
  }

  return (
    <motion.div
      className={`absolute ${beamStyles[direction]}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: "blur(0.5px)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: direction === "diagonal" ? [0, 180] : [0, 90],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5 + 3,
      }}
    />
  )
}

const HolographicScanLine = ({ direction = "horizontal" }: { direction?: "horizontal" | "vertical" }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={direction === "horizontal" ? { y: "-100%" } : { x: "-100%" }}
    animate={direction === "horizontal" ? { y: "100%" } : { x: "100%" }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 10,
      ease: "linear",
    }}
  >
    <div
      className={`${direction === "horizontal" ? "w-full h-px bg-gradient-to-r" : "h-full w-px bg-gradient-to-t"} from-transparent via-white/50 to-transparent`}
      style={{
        boxShadow: direction === "horizontal" ? "0 0 30px rgba(255,255,255,0.6)" : "0 0 30px rgba(255,255,255,0.6)",
      }}
    />
  </motion.div>
)

const AdvancedHolographicBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer energy field */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
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
          filter: "blur(2px)",
        }}
      />

      {/* Main holographic border */}
      <div
        className="absolute inset-0 rounded-3xl border border-white/20"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 0 40px rgba(255,255,255,0.3)",
        }}
      />

      {/* Inner light reflection */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 30%)",
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%)",
            "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 30%)",
            "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 30%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <div className="relative">{children}</div>
    </div>
  )
}

const MagneticSocialIcon = ({
  href,
  icon,
  label,
  index,
}: { href: string; icon: React.ReactNode; label: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

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

  // Choose the wrapper: <a> for external, <Link> for internal
  const isExternal = href && (href.startsWith("http") || href.startsWith("mailto:"));

  const Wrapper: React.ElementType = isExternal ? "a" : "span"; // fallback to span for empty href

  const wrapperProps = isExternal
    ? { href, target: "_blank", rel: "noopener noreferrer", className: "block h-full w-full" }
    : href
      ? { href, className: "block h-full w-full" }
      : {};

  // If using Next.js Link for internal, you can do:
  // import Link from "next/link";
  // and use: <Link href={href} ...>...</Link>
  // For simplicity, here is the <a> version for both, but you can adjust as needed.

  return (
    <motion.div
      className="relative group cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1, y: -10 }}
    >
      {href ? (
        isExternal ? (
          <a {...wrapperProps}>
            {/* Everything inside the button */}
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
              }}
              animate={{ rotateZ: isHovered ? [0, 5, -5, 0] : 0 }}
              transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            >
              <AdvancedHolographicBorder className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] overflow-hidden">
                {/* Quantum energy field */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: isHovered
                      ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)"
                      : "transparent",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Magnetic field lines */}
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-2xl border border-white/20"
                        animate={{
                          scale: [1, 1.1 + i * 0.05, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Floating particles around icon */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {[...Array(12)].map((_, i) => (
                      <CosmicParticle key={i} delay={i * 0.1} type={["orb", "star", "diamond"][i % 3] as any} />
                    ))}
                  </div>
                )}

                {/* Icon container */}
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <motion.div
                    className="text-4xl text-white relative"
                    animate={{
                      filter: isHovered
                        ? "drop-shadow(0 0 20px rgba(255,255,255,0.8)) brightness(1.5)"
                        : "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon}
                    {/* Icon energy rings */}
                    {isHovered && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/30"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-white/20"
                          animate={{
                            scale: [1, 3, 1],
                            opacity: [0.4, 0, 0.4],
                            rotate: [360, 180, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Icon label */}
                  <span className="text-white font-semibold tracking-wide">{label}</span>
                </div>

                {/* Energy pulse at bottom */}
                {isHovered && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.5)",
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

                {/* Holographic corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
              </AdvancedHolographicBorder>
            </motion.div>
          </a>
        ) : (
          // For internal links, use Next.js Link
          <Link href={href} className="block h-full w-full">
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
              }}
              animate={{ rotateZ: isHovered ? [0, 5, -5, 0] : 0 }}
              transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            >
              <AdvancedHolographicBorder className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] overflow-hidden">
                {/* Quantum energy field */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: isHovered
                      ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)"
                      : "transparent",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Magnetic field lines */}
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-2xl border border-white/20"
                        animate={{
                          scale: [1, 1.1 + i * 0.05, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Floating particles around icon */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {[...Array(12)].map((_, i) => (
                      <CosmicParticle key={i} delay={i * 0.1} type={["orb", "star", "diamond"][i % 3] as any} />
                    ))}
                  </div>
                )}

                {/* Icon container */}
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <motion.div
                    className="text-4xl text-white relative"
                    animate={{
                      filter: isHovered
                        ? "drop-shadow(0 0 20px rgba(255,255,255,0.8)) brightness(1.5)"
                        : "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon}
                    {/* Icon energy rings */}
                    {isHovered && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/30"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-white/20"
                          animate={{
                            scale: [1, 3, 1],
                            opacity: [0.4, 0, 0.4],
                            rotate: [360, 180, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Icon label */}
                  <span className="text-white font-semibold tracking-wide">{label}</span>
                </div>

                {/* Energy pulse at bottom */}
                {isHovered && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.5)",
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

                {/* Holographic corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
              </AdvancedHolographicBorder>
            </motion.div>
          </Link>
        )
      ) : (
        // fallback for empty href
        <div>
          {/* Everything inside the button */}
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }}
            animate={{ rotateZ: isHovered ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
          >
            <AdvancedHolographicBorder className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] overflow-hidden">
              {/* Quantum energy field */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: isHovered
                    ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)"
                    : "transparent",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Magnetic field lines */}
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-2xl border border-white/20"
                      animate={{
                        scale: [1, 1.1 + i * 0.05, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Floating particles around icon */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(12)].map((_, i) => (
                    <CosmicParticle key={i} delay={i * 0.1} type={["orb", "star", "diamond"][i % 3] as any} />
                  ))}
                </div>
              )}

              {/* Icon container */}
              <div className="flex flex-col items-center space-y-4 relative z-10">
                <motion.div
                  className="text-4xl text-white relative"
                  animate={{
                    filter: isHovered
                      ? "drop-shadow(0 0 20px rgba(255,255,255,0.8)) brightness(1.5)"
                      : "drop-shadow(0 0 0px rgba(255,255,255,0))",
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                  {/* Icon energy rings */}
                  {isHovered && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.8, 0, 0.8],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-white/20"
                        animate={{
                          scale: [1, 3, 1],
                          opacity: [0.4, 0, 0.4],
                          rotate: [360, 180, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Icon label */}
                <span className="text-white font-semibold tracking-wide">{label}</span>
              </div>

              {/* Energy pulse at bottom */}
              {isHovered && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
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

              {/* Holographic corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
            </AdvancedHolographicBorder>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const Footer = () => {
  const path = usePathname()
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const socialLinks = [
    { href: "https://www.youtube.com/@Web3Spell", icon: <FaYoutube />, label: "YouTube" },
    { href: "", icon: <RxGithubLogo />, label: "GitHub" },
    { href: "https://t.me/web3spellhq", icon: <FaTelegram />, label: "Telegram" },
    {
      href: "https://www.instagram.com/web3spell?igsh=MWR6c2J6NmY3cnh2cg==",
      icon: <RxInstagramLogo />,
      label: "Instagram",
    },
    { href: "https://www.x.com/@web3spell", icon: <RxTwitterLogo />, label: "Twitter" },
    { href: "https://www.linkedin.com/company/web3spell/", icon: <RxLinkedinLogo />, label: "LinkedIn" },
  ]

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <motion.footer
          ref={footerRef}
          className="w-full mt-32 bg-transparent text-white z-30 relative overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
        >
          {/* Advanced particle system */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <CosmicParticle key={i} delay={i * 0.2} type={["orb", "star", "diamond", "triangle"][i % 4] as any} />
            ))}
            {[...Array(15)].map((_, i) => (
              <QuantumBeam
                key={`beam-${i}`}
                delay={i * 0.4}
                direction={["vertical", "horizontal", "diagonal"][i % 3] as any}
              />
            ))}
          </div>

          {/* Dynamic cosmic grid */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
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
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
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

          {/* Main footer container */}
          <div className="container mx-auto px-8 py-16">
            <AdvancedHolographicBorder className="backdrop-blur-2xl bg-white/[0.02] rounded-[3rem] p-12 relative overflow-hidden">
              {/* Multiple scan lines */}
              <HolographicScanLine direction="horizontal" />
              <HolographicScanLine direction="vertical" />

              {/* Quantum field background */}
              <motion.div
                className="absolute inset-0 rounded-[3rem]"
                animate={{
                  background: [
                    "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                    "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.06) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              {/* Header section */}
              <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.h2
                  className="text-5xl font-black text-white mb-6 relative"
                  style={{
                    textShadow: "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
                      "0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  ✦ Connect Across The Cosmos ✦{/* Orbital rings around title */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-white/20 rounded-full"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 40,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/15 rounded-full"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </motion.div>
                </motion.h2>

                <motion.p
                  className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                  style={{
                    textShadow: "0 0 15px rgba(255,255,255,0.3)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  Join our interdimensional community and explore the infinite possibilities of Web3 magic
                </motion.p>
              </motion.div>

              {/* Social media grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 relative z-20">
                {socialLinks.map((link, index) => (
                  <MagneticSocialIcon
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    index={index}
                  />
                ))}
              </div>

              {/* Contact section */}
              <motion.div
                className="text-center mb-12 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <AdvancedHolographicBorder className="max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div whileHover={{ scale: 1.05, y: -5 }} className="relative">
                      <div className="text-2xl mb-2">✉️</div>
                      <div className="text-white/80 font-medium">Email</div>
                      <div className="text-white/60 text-sm">web3spell@gmail.com</div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} className="relative">
                      <div className="text-2xl mb-2">🤝</div>
                      <div className="text-white/80 font-medium">Sponsor</div>
                      <Link
                        href="mailto:rythmenagrani@gmail.com"
                        className="text-white/60 text-sm hover:text-white/80 transition-colors"
                      >
                        Become a Partner
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} className="relative">
                      <div className="text-2xl mb-2">👨‍💻</div>
                      <div className="text-white/80 font-medium">Creator</div>
                      <Link
                        href="https://x.com/web3spell"
                        className="text-white/60 text-sm hover:text-white/80 transition-colors"
                      >
                        About Us
                      </Link>
                    </motion.div>
                  </div>
                </AdvancedHolographicBorder>
              </motion.div>

              {/* Enhanced copyright */}
              <motion.div
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2, duration: 1 }}
              >
                <AdvancedHolographicBorder className="inline-block px-12 py-6 rounded-full backdrop-blur-xl bg-white/[0.02]">
                  <motion.div
                    className="text-white/70 font-medium text-lg relative"
                    style={{
                      textShadow: "0 0 15px rgba(255,255,255,0.5)",
                    }}
                    animate={{
                      textShadow: [
                        "0 0 15px rgba(255,255,255,0.5)",
                        "0 0 25px rgba(255,255,255,0.7)",
                        "0 0 15px rgba(255,255,255,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    ✦ © 2025 Web3Spell Inc. - Weaving Digital Magic Across Infinite Dimensions ✦
                    {/* Floating particles around copyright */}
                    <div className="absolute inset-0 pointer-events-none overflow-visible">
                      {[...Array(8)].map((_, i) => (
                        <CosmicParticle key={i} delay={i * 0.3} type="star" />
                      ))}
                    </div>
                  </motion.div>
                </AdvancedHolographicBorder>
              </motion.div>

              {/* Energy streams at footer corners */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-4 border-t-4 border-white/30 rounded-tl-2xl" />
              <div className="absolute top-6 right-6 w-12 h-12 border-r-4 border-t-4 border-white/30 rounded-tr-2xl" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-l-4 border-b-4 border-white/30 rounded-bl-2xl" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-4 border-b-4 border-white/30 rounded-br-2xl" />
            </AdvancedHolographicBorder>
          </div>
        </motion.footer>
      )}
    </>
  )
}

export default Footer
