"use client"
import Hero from "@/components/main/Hero";
import Page from "./Course/page";
import Skills from "@/components/main/Skills";
import VideoShowcase from "@/components/main/videoShowcase"
 
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <VideoShowcase/>
        <Page/>
        <Skills />
      </div>
    </main>
  );
}
