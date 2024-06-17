"use client"
import Hero from "@/components/main/Hero";
import Page from "./Course/page";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Page/>
        <Skills />
      </div>
    </main>
  );
}
