"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
        })
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    createParticles()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter">
              <span className="relative inline-block">
                Core
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
              <span className="relative inline-block ml-2">
                Nexus
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Explore the cosmos of blockchain innovation
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
              <Link href={'https://lu.ma/ozoqjknu'}>
              <span className="relative flex items-center">
                Register for Hackathon
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              </Link>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-white opacity-10 rounded-lg blur-sm group-hover:opacity-20 transition duration-300"></div>
                <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/20 group-hover:border-white/40 transition duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">12</h3>
                  <p className="text-gray-300">Days of Workshops</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-white opacity-10 rounded-lg blur-sm group-hover:opacity-20 transition duration-300"></div>
                <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/20 group-hover:border-white/40 transition duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">2</h3>
                  <p className="text-gray-300">Days of Hackathon</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-white opacity-10 rounded-lg blur-sm group-hover:opacity-20 transition duration-300"></div>
                <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/20 group-hover:border-white/40 transition duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2"> Hybrid</h3>
                  <p className="text-gray-300">Place</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

