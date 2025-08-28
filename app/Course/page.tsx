"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { getCourseList } from "../_services";
import Link from "next/link";
import CourseCard from "./_components/CourseCard";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const LoadingOrb = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-4 h-4 bg-white/30 rounded-full"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Number.POSITIVE_INFINITY,
    }}
    style={{
      filter: "blur(0.5px)",
    }}
  />
);

const CosmicLoader = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <HolographicBorder className="p-8 rounded-3xl backdrop-blur-xl bg-white/[0.02]">
      <div className="flex flex-col items-center space-y-6">
        {/* Quantum loading ring */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 border-2 border-white/40 rounded-full border-t-transparent"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-white/60 rounded-full border-r-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading orbs */}
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <LoadingOrb key={i} delay={i * 0.2} />
          ))}
        </div>

        <motion.p
          className="text-white/70 text-lg font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            textShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
        >
          Accessing Cosmic Library...
        </motion.p>
      </div>
    </HolographicBorder>
  </motion.div>
);

const EnhancedCourseCard = ({
  course,
  index,
}: {
  course: any;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <Link href={"/course-preview/" + course.id}>
        <HolographicBorder className="p-4 rounded-2xl backdrop-blur-xl bg-white/[0.02] shadow-2xl overflow-hidden h-full">
          {/* Quantum field effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Energy pulses */}
          {isHovered && (
            <>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/10"
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
                className="absolute inset-0 rounded-2xl border border-white/5"
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

          {/* Floating orbs on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(8)].map((_, i) => (
                <FloatingOrb key={i} delay={i * 0.1} size="small" />
              ))}
            </div>
          )}

          {/* Scan line effect */}
          {isHovered && <ScanLine />}

          {/* Course content */}
          <div className="relative z-10">
            <CourseCard
              src={course.banner.url}
              title={course.name}
              description={course.description}
            />
          </div>

          {/* Holographic corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />

          {/* Energy flow at bottom */}
          {isHovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
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
      </Link>
    </motion.div>
  );
};

const Page = () => {
  const [Course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    setIsLoading(true);
    getCourseList().then((res) => {
      console.log(res);
      setCourse(res.courseLists);
      setIsLoading(false);
    });
  };

  return (
    <div className="relative z-20 min-h-screen py-20">
      {/* Floating cosmic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <FloatingOrb
            key={i}
            delay={i * 0.2}
            size={i % 4 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"}
          />
        ))}
        {[...Array(15)].map((_, i) => (
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
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="flex flex-col items-center justify-center relative z-10"
        id="Courses"
      >
        {/* Enhanced title section */}
        <div className="flex justify-center pb-2 mb-16 relative">
          <motion.h2
            ref={sectionRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center relative"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            ✦ Scroll of Wisdom ✦{/* Quantum energy field around title */}
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

        {/* Cosmic library description */}
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p
            className="text-white/70 text-lg leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.2)",
            }}
          >
            Explore the infinite repository of cosmic knowledge, where ancient
            wisdom meets cutting-edge enchantments in our ethereal learning
            dimension
          </p>
        </motion.div>

        {/* Enhanced course grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <CosmicLoader />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-7xl mx-auto px-6"
            >
              {Course?.length > 0 && (
                <HolographicBorder className="p-8 rounded-3xl backdrop-blur-xl bg-white/[0.01] relative overflow-hidden">
                  {/* Quantum field around grid */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  {/* Floating orbs around grid */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(20)].map((_, i) => (
                      <FloatingOrb
                        key={i}
                        delay={i * 0.1}
                        size={i % 3 === 0 ? "medium" : "small"}
                      />
                    ))}
                  </div>

                  {/* Scan line across grid */}
                  <ScanLine />

                  {/* Course grid */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center ">
                    {Course?.map((course: any, index) => (
                      <EnhancedCourseCard
                        key={course.id}
                        course={course}
                        index={index}
                      />
                    ))}
                  </div>

                  {/* Grid status indicator */}
                  <motion.div
                    className="absolute top-4 right-4 flex items-center space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      style={{
                        boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                      }}
                    />
                    <span className="text-white/60 text-xs font-medium">
                      {Course.length} SCROLLS AVAILABLE
                    </span>
                  </motion.div>

                  {/* Energy streams at corners */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
                </HolographicBorder>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;
