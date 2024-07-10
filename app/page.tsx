"use client"
import Hero from "@/components/main/Hero";
import Page from "./Course/page";
import Skills from "@/components/main/Skills";
import VideoShowcase from "@/components/main/VideoShowcase"
 
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <VideoShowcase/>
        <Page/>
        <Skills />
      </div>
    </main>
  );
}
