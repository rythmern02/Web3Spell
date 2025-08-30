"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Maximize } from "lucide-react"
import styles from "./gallery.module.css"
import { motion, useInView } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

const DisneyGallery: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(wrapperRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!wrapperRef.current) return

      const xPos = event.clientX / window.innerWidth - 0.5
      const yPos = event.clientY / window.innerHeight - 0.5

      const rotateY = (xPos * 10) / 2
      const rotateX = (yPos * 10) / -2

      wrapperRef.current.style.transform = `translate3d(-50%, -50%, 0) perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    }
  }

  const movieImages = [
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375610/WhatsApp_Image_2025-04-13_at_11.35.04_PM_-_Copy_qo0np3.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375609/WhatsApp_Image_2025-05-13_at_9.23.39_PM_2_-_Copy_-_Copy_aueydm.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375611/WhatsApp_Image_2025-04-13_at_11.34.54_PM_-_Copy_yudeys.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375611/C0039T01_-_Copy_fgmxid.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376693/IMG_2457_zdbjrr.jpg",
  ]

  const movieImages2 = [
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375612/C0085T01_2_-_Copy_tyslxv.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375615/WhatsApp_Image_2025-04-13_at_11.38.28_PM_-_Copy_qsgdat.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375618/WhatsApp_Image_2025-01-17_at_9.45.36_PM_-_Copy_bsuyek.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375618/WhatsApp_Image_2025-01-17_at_9.35.39_PM_-_Copy_nhzvve.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375619/photo_6118350204039185554_y_-_Copy_unqyxp.jpg",
  ]

  const movieImages3 = [
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375620/WhatsApp_Image_2024-12-15_at_10.09.04_PM_k65jqp.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375621/Untitled_design_6_-_Copy_jxnlpm.png",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375624/WhatsApp_Image_2024-12-15_at_10.10.18_PM_yywal7.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756375626/WhatsApp_Image_2024-12-15_at_10.09.02_PM_cmcdsw.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376626/IMG_1305_huwyvy.jpg",
  ]

  const movieImages4 = [
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376627/IMG_1409_twid3v.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376638/IMG_1410_ag1gyl.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376639/IMG_1408_aopsuj.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376639/IMG_1421_njnvlw.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376640/IMG_1298_wgwsek.jpg",
  ]

  const movieImages5 = [
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376641/IMG_1508_fnywgg.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376640/IMG_1507_mw1jf3.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376641/IMG_1510_r7tms4.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376643/IMG_1600_ugojy5.jpg",
    "https://res.cloudinary.com/ducsu6916/image/upload/v1756376642/IMG_1598_hgdqhb.jpg",
  ]

  const renderImageLine = (images: string[], key: string) => (
    <div key={key} className={styles.imagesLine}>
      {/* Render images 3 times for seamless loop */}
      {Array.from({ length: 3 }, (_, repeatIndex) =>
        images.map((imageUrl, index) => (
          <div
            key={`${key}-${repeatIndex}-${index}`}
            className={styles.line}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className={styles.img} style={{ backgroundImage: `url(${imageUrl})` }} />
          </div>
        )),
      )}
    </div>
  )

  const FloatingOrb = ({
    delay,
    size = "small",
  }: {
    delay: number
    size?: "small" | "medium" | "large"
  }) => {
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

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.2} size={i % 4 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"} />
        ))}
        {[...Array(10)].map((_, i) => (
          <EnergyBeam key={`beam-${i}`} delay={i * 0.3} />
        ))}
      </div>
      <div className="flex justify-center pb-2 mb-8 relative z-30 mt-20">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center relative"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        >
          ✦ Gallery ✦{/* Quantum energy field around title */}
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
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            animate={{
              background: [
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                "linear-gradient(90deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.6))",
                "linear-gradient(90deg, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.3))",
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            initial={{ scaleX: 0 }}
          />
        </motion.h2>
      </div>

      <div className={`${styles.container} relative`}>
        <button onClick={handleFullscreen} className={styles.fullscreenBtn}>
          <Maximize size={24} />
        </button>

        <div ref={wrapperRef} className={styles.wrapperImages}>
          {renderImageLine(movieImages, "line1")}
          {renderImageLine(movieImages2, "line2")}
          {renderImageLine(movieImages3, "line3")}
          {renderImageLine(movieImages, "line4")}
          {renderImageLine(movieImages2, "line5")}
          {renderImageLine(movieImages3, "line6")}
          {renderImageLine(movieImages4, "line7")}
          {renderImageLine(movieImages5, "line8")}
          {renderImageLine(movieImages, "line9")}
          {renderImageLine(movieImages2, "line10")}
          {renderImageLine(movieImages3, "line11")}
          {renderImageLine(movieImages4, "line12")}
        </div>
      </div>
    </>
  )
}

export default DisneyGallery
