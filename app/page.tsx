import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import ContributionCalendar from "@/components/ContributionCalendar";
import {
  OpenSource,
  Experience,
  Education,
  Skills,
  Achievements,
} from "@/components/Lists";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="page-mesh pointer-events-none fixed inset-0 -z-20" aria-hidden />
      <div className="page-blobs pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <span className="pb-blob pb-blob-1" />
        <span className="pb-blob pb-blob-2" />
        <span className="pb-blob pb-blob-3" />
        <span className="pb-blob pb-blob-4" />
      </div>
      <div className="page-grain pointer-events-none fixed inset-0 z-40" aria-hidden />
      <Nav />
      <main>
        <Intro />
        <div className="section-divider mx-auto max-w-3xl px-6 sm:px-8" aria-hidden />
        <Marquee />
        <Projects />
        <ContributionCalendar />
        <OpenSource />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
