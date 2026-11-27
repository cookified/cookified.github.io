import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Education from "@/components/Education";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="page-wash" aria-hidden />
      <div className="page-glass-blur" aria-hidden />
      <div className="mx-auto w-full max-w-2xl px-6 py-7 sm:px-8 sm:py-9">
        <Masthead />
        <main>
          <Hero />
          <Section id="education" label="education">
            <Education />
          </Section>
          <Section id="oss" label="open source">
            <OpenSource />
          </Section>
          <Section id="work" label="selected work">
            <Projects />
          </Section>
          <Section id="background" label="background">
            <Background />
          </Section>
          <Section id="certifications" label="certifications">
            <Certifications />
          </Section>
          <Section id="achievements" label="achievements">
            <Achievements />
          </Section>
          <Section id="skills" label="skills">
            <Skills />
          </Section>
          <Section id="contact" label="contact">
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
