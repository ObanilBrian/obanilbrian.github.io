import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-w-0 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-32 pb-16 md:pb-24 space-y-20 md:space-y-32 flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
