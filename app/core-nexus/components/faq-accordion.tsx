"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Question {
  question: string
  answer: string
}

interface FaqAccordionProps {
  questions: Question[]
}

export default function FaqAccordion({ questions }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4 mb-8">
      {questions.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
          <div className="relative bg-black border border-white/20 group-hover:border-white/30 transition-all duration-300 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <span className="ml-2 flex-shrink-0 text-white">
                {activeIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-300 border-t border-white/10 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

