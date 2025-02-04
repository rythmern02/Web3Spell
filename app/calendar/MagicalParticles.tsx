import type React from "react"
import { useEffect, useRef } from "react"

const MagicalParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas?.width!
        this.y = Math.random() * canvas?.height!
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particleArray: Particle[] = []

    const createParticles = (amount: number) => {
      for (let i = 0; i < amount; i++) {
        particleArray.push(new Particle())
      }
    }

    const animateParticles = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()

        if (particleArray[i].size <= 0.2) {
          particleArray.splice(i, 1)
          i--
        }
      }
      requestAnimationFrame(animateParticles)
    }

    createParticles(100)
    animateParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles(100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
}

export default MagicalParticles

