"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
              <span className="text-purple-500">Core</span>
              <span className="text-blue-400">Nexus</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Explore the cosmos of blockchain innovation with Arbitrum at Core Nexus. Join us for 12 days of workshops
              and a 2-day hackathon.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/web3spell" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/web3spell" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/web3spell" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/rythmern02/web3spell" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#workshops" className="text-gray-400 hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#hackathon" className="text-gray-400 hover:text-white transition-colors">
                  Hackathon
                </Link>
              </li>
              <li>
                <Link href="#mentors" className="text-gray-400 hover:text-white transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">hello@web3spell.fun</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-400 mr-2 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <span className="text-gray-400">Bhopal, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Core Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>

      {/* Add some CSS for the twinkling stars */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </footer>
  )
}

