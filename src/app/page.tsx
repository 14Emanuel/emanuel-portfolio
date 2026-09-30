"use client";

import PondBackground from "@/components/PondBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecializationGrid from "@/components/SpecializationGrid";
import AgenticSimWidget from "@/components/AgenticSimWidget";
import ProjectsSection from "@/components/ProjectsSection";
import StoryAndPhotos from "@/components/StoryAndPhotos";
import TechStack from "@/components/TechStack";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Background Interactive Sunlit Pond Canvas */}
      <PondBackground />

      {/* Floating Header */}
      <Navbar />

      {/* Hero with Agentic Focus and Lake Victoria Photo */}
      <HeroSection />

      {/* Specialization Pillars & Philosophy */}
      <SpecializationGrid />

      {/* Interactive Agent Pond Simulator */}
      <AgenticSimWidget />

      {/* Real-World Projects & Systems */}
      <ProjectsSection />

      {/* Photo Documentary & Field Work */}
      <StoryAndPhotos />

      {/* Engineering Stack */}
      <TechStack />

      {/* Contact & Footer */}
      <ContactFooter />
    </main>
  );
}
