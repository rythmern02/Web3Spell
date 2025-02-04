"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { getCourseById, getCourseList, GetEnrolledCourseIds } from "@/app/_services"
import { Hexagon } from "lucide-react"

const UtopiaProfileDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
  const [randomCatImage, setRandomCatImage] = useState<string>("")
  const [user, setUser] = useState<any>(null)
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([])

  const { user: clerkUser } = useUser()

  useEffect(() => {
    const fetchUserData = async () => {
      if (clerkUser) {
        setUser({
          name: clerkUser.fullName,
          username: clerkUser.username,
          email: clerkUser.emailAddresses[0].emailAddress,
          level: 1,
          experience: 0,
          nextLevelExperience: 100,
          stats: {
            spellsCast: 1,
            questsCompleted: 10,
            achievementsUnlocked: 0,
          },
        })
        let CourseIds = await GetEnrolledCourseIds(clerkUser.emailAddresses[0].emailAddress);
        CourseIds = CourseIds.userEnrollCourses
        console.log("the course list is: ", CourseIds)

        // Access the courseLists array from the returned object
        

        // Check if coursesArray is an array before mapping
        if (Array.isArray(CourseIds)) {
          // Iterate over all courses and fetch their details
          const courses = await Promise.all(CourseIds.map(async (course) => {
            const courseDetails = await getCourseById(course.courseId, clerkUser.emailAddresses[0].emailAddress);
            const userEnrollCourses = courseDetails.userEnrollCourses || [];
            const completedChapters = userEnrollCourses.map((enrollment: any) => ({
              courseId: enrollment.courseId,
              completedChapter: enrollment.completedChapter,
            }));
            return {
              ...courseDetails,
              completedChapters, // Add completed chapters to the course details
              userEnrollCourses, // Ensure userEnrollCourses are included
            };
          }));
          setEnrolledCourses(courses)
          console.log("clerkUser:", courses)
        } else {
          console.error("coursesArray is not an array:", CourseIds);
        }
      }
    }

    fetchUserData()
  }, [clerkUser])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlowPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const catImages = ["/cat2.png", "/cat3.png"]
    const selectedCatImage = catImages[Math.floor(Math.random() * catImages.length)]
    setRandomCatImage(selectedCatImage)
  }, [])

  const ElementSymbol: React.FC<{ element: string }> = ({ element }) => {
    const symbols = {
      earth: "🜃",
      fire: "🜂",
      water: "🜄",
      air: "🜁",
    }
    return <span className="text-2xl">{symbols[element as keyof typeof symbols]}</span>
  }

  return (
    <div className="min-h-screen  text-white overflow-hidden font-sans z-20 relative mt-16 lg:mt-24">

      {/* Animated background */}
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a237e,#020318)] opacity-50"
        style={{
          backgroundPosition: `${glowPosition.x}px ${glowPosition.y}px`,
          transition: "background-position 0.3s ease-out",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row h-screen p-8">
        {/* Left side - User info and stats */}
        <div className="lg:w-2/3 pr-8 flex flex-col justify-between">
          {user ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-white text-center">
                {user.name}
              </h1>
              <p className="text-xl text-white mb-8 text-center">@{user.username}</p>

              {/* Tabs */}
              <div className="flex mb-8 space-x-4">
                {["overview", "spells", "quests", "achievements"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab ? "bg-blue-500 text-white" : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {Object.entries(user.stats).map(([key, value]: any) => (
                  <div key={key} className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm">
                    <h3 className="text-blue-300 text-sm mb-2">{key.replace(/([A-Z])/g, " $1").trim()}</h3>
                    <p className="text-3xl font-bold">{value}</p>
                  </div>
                ))}
              </div>

              {/* Experience bar */}
              <div className="mb-12">
                <div className="flex justify-between text-sm text-blue-300 mb-2">
                  <span>Level {user.level}</span>
                  <span>
                    {user.experience} / {user.nextLevelExperience} XP
                  </span>
                </div>
                <div className="h-4 bg-blue-900/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                    style={{ width: `${(user.experience / user.nextLevelExperience) * 100}%` }}
                  >
                    <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-sm transform translate-x-4"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading user data...</div>
          )}
        </div>

        {/* Right side - Anime character with expressive background */}
        <div className="hidden lg:block w-1/2 h-[130%] relative rounded-lg overflow-hidden">
          <img
            src={randomCatImage}
            alt="Anime Character"
            className="absolute left-1/2 top-[40%] -translate-x-[50%] -translate-y-1/2 h-[80%] w-[110%] object-cover transform -scale-x-100 shadow-lg glow-effect"
          />
          {/* Floating Hexagons */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.1,
                }}
              >
                <Hexagon className="w-8 h-8 text-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtopiaProfileDashboard


