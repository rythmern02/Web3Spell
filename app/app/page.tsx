import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Courses from "@/components/main/Courses";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Courses/>
        {/* <Encryption /> */}
        <Skills />
      </div>
    </main>
  );
}
