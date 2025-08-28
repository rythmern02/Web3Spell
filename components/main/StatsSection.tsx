"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  Trophy,
  Star,
  Zap,
  Crown,
  Award,
  Target,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  icon: React.ReactNode;
  suffix?: string;
  description: string;
}

const stats: StatItem[] = [
  {
    label: "Active Wizards",
    value: 417,
    icon: <Users className="w-7 h-7" />,
    description: "Magical beings exploring the cosmos",
  },
  {
    label: "Potions Crafted",
    value: 27,
    icon: <Zap className="w-7 h-7" />,
    suffix: "+",
    description: "Mystical brews created with precision",
  },
  {
    label: "Epic Events",
    value: 66,
    icon: <Calendar className="w-7 h-7" />,
    description: "Celestial gatherings across dimensions",
  },
  {
    label: "Active Projects",
    value: 9,
    icon: <BookOpen className="w-7 h-7" />,
    description: "Ancient wisdom teachings unlocked",
  },
];

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
    className="absolute inset-0 pointer-events-none"
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

const RippleEffect = ({
  x,
  y,
  trigger,
}: {
  x: number;
  y: number;
  trigger: boolean;
}) => (
  <AnimatePresence>
    {trigger && (
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: x - 50,
          top: y - 50,
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        exit={{ scale: 6, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="w-24 h-24 border border-white/30 rounded-full"
          style={{
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / 2500, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * value);

        setDisplayValue(currentValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="font-black text-white"
      style={{
        textShadow: "0 0 20px rgba(255,255,255,0.5)",
      }}
    >
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

function HolographicBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 2);
    mouseY.set((e.clientY - centerY) / 2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 600);
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.02, z: 20 }}
    >
      <HolographicBorder className="p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] shadow-2xl overflow-hidden">
        {/* Magnetic field effect */}
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
                scale: [1, 1.05, 1],
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
                scale: [1, 1.1, 1],
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
            {[...Array(15)].map((_, i) => (
              <FloatingOrb
                key={i}
                delay={i * 0.05}
                size={i % 3 === 0 ? "medium" : "small"}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <EnergyBeam key={`beam-${i}`} delay={i * 0.2} />
            ))}
          </div>
        )}

        {/* Scan line effect */}
        {isHovered && <ScanLine />}

        {/* Ripple effect */}
        <RippleEffect x={ripplePos.x} y={ripplePos.y} trigger={showRipple} />

        {/* Icon with quantum field */}
        <motion.div
          className="flex justify-center mb-6 relative"
          animate={{
            rotateY: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          <div className="relative p-4 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
            {/* Quantum field rings */}
            {isHovered && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </>
            )}

            <motion.div
              className="text-white relative z-10"
              animate={{
                filter: isHovered
                  ? "drop-shadow(0 0 20px rgba(255,255,255,0.8)) brightness(1.2)"
                  : "drop-shadow(0 0 0px rgba(255,255,255,0))",
              }}
              transition={{ duration: 0.3 }}
            >
              {stat.icon}
            </motion.div>
          </div>
        </motion.div>

        {/* Counter with holographic display */}
        <div className="text-center mb-4 relative">
          {/* Holographic backdrop */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              background: isHovered
                ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="text-5xl font-black mb-2 tracking-tight relative z-10">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div
            className="text-white/80 font-semibold text-lg tracking-wide mb-2 relative z-10"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
          >
            {stat.label}
          </div>
          <motion.div
            className="text-white/60 text-sm leading-relaxed relative z-10"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {stat.description}
          </motion.div>
        </div>

        {/* Data stream effect */}
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

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
      </HolographicBorder>
    </motion.div>
  );
}

export default function AdvancedStatsSection() {
  const [activeTab, setActiveTab] = useState<"stats" | "achievements">("stats");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 text-white overflow-hidden z-20"
    >
      {/* Ethereal floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <FloatingOrb
            key={i}
            delay={i * 0.2}
            size={i % 4 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <EnergyBeam key={`global-beam-${i}`} delay={i * 0.3} />
        ))}
      </div>

      {/* Cosmic grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Ethereal title with quantum effects */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
        >
          <div className="flex justify-center pb-2 mb-16 relative">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center relative"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            >
              ✦ Celestial Analytics ✦{/* Quantum energy field around title */}
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
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Journey through the infinite cosmos of data, where every statistic
            tells a story of cosmic proportions
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
