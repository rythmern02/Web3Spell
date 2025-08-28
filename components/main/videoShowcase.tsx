"use client";

import { motion, useInView } from "framer-motion";
import { redirect } from "next/navigation";
import React, { useState, useRef } from "react";

const FloatingOrb = ({
  delay,
  size = "small",
}: {
  delay: number;
  size?: "small" | "medium" | "large";
}) => {
  const sizeClasses = {
    small: "w-1 h-1",
    medium: "w-2 h-2",
    large: "w-3 h-3",
  };

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
  );
};

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
);

const ScanLine = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ y: "-100%" }}
    animate={{ y: "100%" }}
    transition={{
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 5,
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
);

const HolographicBorder = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
          filter: "blur(1px)",
        }}
      />
      {/* Main border */}
      <div className="absolute inset-0 rounded-2xl border border-white/20" />
      {/* Inner highlight */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

const VideoShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="container mx-auto relative z-20 py-20">
      {/* Floating cosmic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingOrb
            key={i}
            delay={i * 0.2}
            size={i % 4 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <EnergyBeam key={`beam-${i}`} delay={i * 0.3} />
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
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ethereal title with quantum effects */}
      <div className="flex justify-center pb-2 mb-16 relative">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center relative"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        >
          ✦ Trending Spells ✦{/* Quantum energy field around title */}
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
          {/* Underline with energy flow */}
          <motion.div
            className="absolute -bottom-4 left-1/2 w-3/4 h-1 rounded-full"
            style={{
              transform: "translateX(-50%)",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            animate={{
              background: [
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                "linear-gradient(90deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.6))",
                "linear-gradient(90deg, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.3))",
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              ],
              scaleX: isInView ? 1 : 0,
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            initial={{ scaleX: 0 }}
          />
        </motion.h2>
      </div>

      {/* Holographic video container */}
      <motion.div
        className="flex justify-center m-10 relative"
        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
        animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: "1000px",
        }}
      >
        <HolographicBorder className="p-6 rounded-3xl backdrop-blur-xl bg-white/[0.02] shadow-2xl overflow-hidden max-w-4xl w-full">
          {/* Quantum field effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Energy pulses */}
          {isHovered && (
            <>
              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/10"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/5"
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
            </>
          )}

          {/* Floating orbs around video */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(20)].map((_, i) => (
                <FloatingOrb
                  key={i}
                  delay={i * 0.05}
                  size={i % 3 === 0 ? "medium" : "small"}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <EnergyBeam key={`video-beam-${i}`} delay={i * 0.1} />
              ))}
            </div>
          )}

          {/* Scan line effect */}
          {isHovered && <ScanLine />}

          {/* Video frame with holographic effects */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
            {/* Loading shimmer effect */}
            {!isVideoLoaded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            )}

            {/* Holographic corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/30 rounded-br-lg" />

            {/* Video element */}
            <motion.iframe
              src="https://www.youtube.com/embed/41AYzhQL5r4?si=PyUxqZuyCimfPIb-"
              title="Web3Spell Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-2xl relative z-10"
              onLoad={() => setIsVideoLoaded(true)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{
                filter: isHovered
                  ? "brightness(1.1) contrast(1.1)"
                  : "brightness(1) contrast(1)",
              }}
            />

            {/* Holographic overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                  "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                  "linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                  "linear-gradient(315deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            {/* Energy flow around video */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        </HolographicBorder>
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ethereal description */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p
          className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: "0 0 10px rgba(255,255,255,0.2)",
          }}
        >
          Witness the convergence of ancient magic and cosmic technology in this
          ethereal demonstration of our most powerful enchantments
        </p>

        {/* Floating action buttons */}
        <div className="flex justify-center space-x-6 mt-8">
          <HolographicBorder>
            <a href="/Course">
              <motion.button
                className="px-8 py-3 bg-white/[0.02] backdrop-blur-xl rounded-full font-semibold text-white relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">✦ Learn More</span>
              </motion.button>
            </a>
          </HolographicBorder>

          <HolographicBorder>
            <a href="https://youtube.com/@web3spell">
              <motion.button
                className="px-8 py-3 bg-white/[0.02] backdrop-blur-xl rounded-full font-semibold text-white relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">✦ Watch More</span>
              </motion.button>
            </a>
          </HolographicBorder>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoShowcase;
