"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import FaqAccordion from "./faq-accordion"
import Link from "next/link"

// FAQ categories and questions
const faqData = [
  {
    category: "General Questions",
    icon: "",
    questions: [
      {
        question: "Is the hackathon paid?",
        answer: "No! Core Nexus is absolutely free for all participants. Just bring your laptop, enthusiasm, and creativity!"
      },
      {
        question: "When and where is the hackathon happening?",
        answer: "The hackathon will take place on April 19-20, 2025. It will be a hybrid event with both in-person participation in City of Lakes, Bhopal (venue to be announced soon) and virtual participation options. Get ready for an exciting 36-hour non-stop building experience!"
      },
      {
        question: "Who can participate?",
        answer: "Anyone passionate about Web3! Whether you're a developer, designer, blockchain enthusiast, or entrepreneur, you are welcome to join. You can participate either virtually or in-person."
      },
      {
        question: "Do I need prior blockchain experience?",
        answer: "No, but it helps! We'll have workshops and mentors to guide beginners and help you build on blockchain from scratch. Our mentors will be available both online and on-site."
      },
      {
        question: "Is the event in-person or virtual?",
        answer: "Core Nexus is a hybrid hackathon! You can choose to participate in-person at our Bhopal venue or join virtually from anywhere in the world. Both formats offer full access to mentorship, workshops, and prizes."
      },
      {
        question: "Can I come alone or do I need a team?",
        answer: "You can come solo or with a team! If you don't have a team, no worries—we'll have team formation sessions both online and in-person to help you find the right people."
      }
    ]
  },
  {
    category: "Project & Hacking Related",
    icon: "",
    questions: [
      {
        question: "What are the tracks for the hackathon?",
        answer: "We have five exciting tracks: DeFi & Payments, AI x Web3, NFTs, Gaming & Metaverse, Privacy, Security & Identity, and Interoperability & Infrastructure."
      },
      {
        question: "What tech stacks can we use?",
        answer: "You can build on any blockchain, but we encourage using Arbitrum, Stylus, and Bold technologies. We'll have mentors and resources for these ecosystems."
      },
      {
        question: "Will there be mentors and workshops?",
        answer: "Yes! We will have expert mentors, technical workshops, and hands-on training sessions to help you build your project."
      },
      {
        question: "Do we need to finish our project before the hackathon?",
        answer: "No! All projects should be started during the hackathon. You can come with ideas, but coding and execution should happen on-site."
      },
      {
        question: "Can we use pre-existing projects?",
        answer: "You can build on an existing idea, but the majority of work should be done during the hackathon. Judges will prioritize originality and execution."
      }
    ]
  },
  {
    category: "Prizes & Sponsorships",
    icon: "",
    questions: [
      {
        question: "Are there cash prizes?",
        answer: "Yes! We have a huge prize pool, including cash prizes, credits, and bounties from our sponsors."
      },
      {
        question: "Who are the event sponsors?",
        answer: "We are partnering with top Web3 companies, protocols, and infrastructure providers. Stay tuned for announcements!"
      },
      {
        question: "Will there be swag and goodies?",
        answer: "Yes! All participants will receive swag, T-shirts, stickers, and cool surprises."
      },
      {
        question: "Will there be travel or accommodation support?",
        answer: "Unfortunately, we won't be covering travel or stay, but we can help with recommendations and group discounts for nearby accommodations."
      }
    ]
  },
  {
    category: "Food, Fun & Logistics",
    icon: "",
    questions: [
      {
        question: "Will food and drinks be provided?",
        answer: "Yes! For in-person participants at our Bhopal venue, we'll provide meals, snacks, and caffeine-filled drinks throughout the 36-hour hackathon. Virtual participants are encouraged to stock up their favorite snacks!"
      },
      {
        question: "Are there fun activities apart from hacking?",
        answer: "Absolutely! We'll have both virtual and in-person activities including online gaming sessions, meme battles, virtual treasure hunts, and networking events. On-site participants can enjoy additional physical activities and networking opportunities!"
      },
      {
        question: "Is there a limit on team size?",
        answer: "Teams can have a maximum of 4 members, whether participating virtually or in-person. Mixed teams with both virtual and in-person members are also welcome!"
      },
      {
        question: "Can I stay overnight at the venue?",
        answer: "Yes! For in-person participants, the Bhopal venue will be open 24/7 during the hackathon. We encourage you to bring sleeping bags or blankets for short rest breaks."
      }
    ]
  },
  {
    category: "How to Get Involved?",
    icon: "",
    questions: [
      {
        question: "How do I register?",
        answer: "You can sign up on our website. Spots are limited, so register ASAP!"
      },
      {
        question: "Can I volunteer for the event?",
        answer: "Yes! We're looking for community volunteers to help with logistics, coordination, and operations. Reach out to us!"
      },
      {
        question: "How can I stay updated?",
        answer: "Join our Telegram: https://dorahacks.io/hackathon/core-nexus/detail, and follow us on Twitter at https://x.com/web3spell to get all updates and announcements."
      }
    ]
  }
]

export default function FaqContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // Filter questions based on search query
  const filteredFaqs = faqData.map(category => {
    const filteredQuestions = category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return {
      ...category,
      questions: filteredQuestions
    }
  }).filter(category => category.questions.length > 0)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  const clearSearch = () => {
    setSearchQuery("")
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full border border-white/10 blur-md opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full border border-white/10 blur-md opacity-20 -z-10"></div>
      
      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
          }}
        />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
          <span className="relative inline-block">
            Frequently Asked Questions
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-white"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about Core Nexus hackathon and workshops
        </p>
      </motion.div>

      {/* Search bar */}
      <motion.div 
        className="max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition duration-300"></div>
          <div className="relative bg-black border border-white/20 group-hover:border-white/40 transition-all duration-300 rounded-full flex items-center overflow-hidden">
            <div className="pl-4">
              <Search className="h-5 w-5 text-white/70" />
            </div>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 bg-transparent text-white focus:outline-none"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="pr-4 text-white/70 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* FAQ content */}
      <div className="max-w-4xl mx-auto">
        {searchQuery && filteredFaqs.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-400 mb-4">No questions found matching "{searchQuery}"</p>
            <button 
              onClick={clearSearch}
              className="text-white underline hover:text-gray-300"
            >
              Clear search
            </button>
          </motion.div>
        ) : (
          filteredFaqs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10"
            >
              <div 
                className="flex items-center mb-6 cursor-pointer"
                onClick={() => handleCategoryClick(category.category)}
              >
                <div className="text-3xl mr-3">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                <div className="ml-auto">
                  {activeCategory === category.category ? (
                    <ChevronUp className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {(activeCategory === category.category || searchQuery) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <FaqAccordion questions={category.questions} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </div>

      {/* Still have questions section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 relative"
      >
        <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm"></div>
        <div className="relative bg-black p-8 rounded-lg border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Still have questions?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Can't find the answer you're looking for? Reach out to our team directly and we'll be happy to help you with any questions about Core Nexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-transparent border border-white rounded-full shadow-2xl"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-10"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-5"></span>
              <Link href={'https://t.me/web3spellhq'}>
              <span className="relative flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              </Link>
            </motion.button>
            
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-transparent border border-white/30 rounded-full"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-10"></span>
                <span className="relative">Back to Home</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
