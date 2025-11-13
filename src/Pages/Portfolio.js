import React from "react";
import HeroSection from "../Components/portfolio/HeroSection.js";
import ProjectsSection from "../Components/portfolio/ProjectsSection.js";
import ExperienceSection from "../Components/portfolio/ExperienceSection.js";
import SkillsSection from "../Components/portfolio/SkillsSection.js";
import ContactSection from "../Components/portfolio/ContactSection.js";

export default function Portfolio() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}