"use client"

import { useEffect, useRef } from "react"

export default function GeometricShapes() {
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

    // Create shapes
    const shapes: {
      type: "circle" | "rectangle" | "star"
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      pulseSpeed: number
      pulseDirection: number
    }[] = []

    // Create star path
    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()

      for (let i = 0; i < 5; i++) {
        const outerX = Math.cos((Math.PI * 2 * i) / 5) * size
        const outerY = Math.sin((Math.PI * 2 * i) / 5) * size
        const innerX = Math.cos((Math.PI * 2 * i + Math.PI) / 5) * (size * 0.4)
        const innerY = Math.sin((Math.PI * 2 * i + Math.PI) / 5) * (size * 0.4)

        if (i === 0) {
          ctx.moveTo(outerX, outerY)
        } else {
          ctx.lineTo(outerX, outerY)
        }

        ctx.lineTo(innerX, innerY)
      }

      ctx.closePath()
      ctx.restore()
    }

    // Generate shapes
    for (let i = 0; i < 15; i++) {
      const type = ["circle", "rectangle", "star"][Math.floor(Math.random() * 3)] as "circle" | "rectangle" | "star"
      const size = Math.random() * 60 + 20

      shapes.push({
        type,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        opacity: Math.random() * 0.2 + 0.1,
        pulseSpeed: Math.random() * 0.005 + 0.001,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        // Update shape
        shape.rotation += shape.rotationSpeed
        shape.opacity += shape.pulseSpeed * shape.pulseDirection

        if (shape.opacity > 0.3 || shape.opacity < 0.1) {
          shape.pulseDirection *= -1
        }

        // Draw shape
        ctx.strokeStyle = `rgba(255, 255, 255, ${shape.opacity})`
        ctx.lineWidth = 1
        ctx.setLineDash([5, 5])

        ctx.save()

        if (shape.type === "circle") {
          ctx.beginPath()
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
          ctx.stroke()
        } else if (shape.type === "rectangle") {
          ctx.translate(shape.x, shape.y)
          ctx.rotate(shape.rotation)
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        } else if (shape.type === "star") {
          drawStar(ctx, shape.x, shape.y, shape.size, shape.rotation)
          ctx.stroke()
        }

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
}

