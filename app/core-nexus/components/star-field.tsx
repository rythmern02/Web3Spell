"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      twinkleSpeed: number
      twinkleDirection: number
    }[] = []

    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        twinkleSpeed: Math.random() * 0.01,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        // Update star position
        star.y += star.speed

        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Make stars twinkle
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleDirection *= -1
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      // Draw occasional shooting stars
      if (Math.random() < 0.01) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 3),
          length: Math.random() * 80 + 20,
          angle: Math.PI / 4,
          speed: Math.random() * 15 + 10,
          opacity: 1,
        }

        const animate = () => {
          if (shootingStar.opacity <= 0) return

          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length
          const tailY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length

          const gradient = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.beginPath()
          ctx.moveTo(shootingStar.x, shootingStar.y)
          ctx.lineTo(tailX, tailY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.stroke()

          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
          shootingStar.y -= Math.sin(shootingStar.angle) * shootingStar.speed
          shootingStar.opacity -= 0.02

          if (shootingStar.opacity > 0) {
            requestAnimationFrame(animate)
          }
        }

        animate()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
  )
}

