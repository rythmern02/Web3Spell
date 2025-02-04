import type React from "react"
import { motion } from "framer-motion"

const MagicalElements: React.FC = () => {
  const elements = [
    { icon: "✨", size: 20 },
    { icon: "🔮", size: 30 },
    { icon: "🌟", size: 25 },
    { icon: "🌙", size: 35 },
    { icon: "⚡", size: 22 },
  ]

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="fixed text-white opacity-50 pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ fontSize: element.size }}
        >
          {element.icon}
        </motion.div>
      ))}
    </>
  )
}

export default MagicalElements

