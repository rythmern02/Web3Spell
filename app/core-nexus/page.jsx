import Hero from "./components/hero"
import Navbar from "./components/navbar"
import WorkshopSchedule from "./components/workshop-schedule"
import HackathonDetails from "./components/hackathon-details"
import Mentors from "./components/mentors"
import Partners from "./components/partners"
import WhoWeAre from "./components/who-we-are"
import Footer from "./components/footer"
import StarField from "./components/star-field"
import GeometricShapes from "./components/geometric-shapes"
import FaqContent from "./components/faq-content"

export const metadata = {
  suppressNav: true
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden z-30" data-page="arbitrum-ignite">
      <StarField />
      <GeometricShapes />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhoWeAre />
        <WorkshopSchedule />
        <HackathonDetails />
        <Mentors />
        <Partners />
        <FaqContent/>
        <Footer />
      </div>
    </main>
  )
}

