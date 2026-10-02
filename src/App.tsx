import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LookbookGrid } from './components/LookbookGrid';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { AudioMoodController } from './components/AudioMoodController';
import { PedagogicalProject, PEDAGOGICAL_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PedagogicalProject | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PEDAGOGICAL_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % PEDAGOGICAL_PROJECTS.length;
      setSelectedProject(PEDAGOGICAL_PROJECTS[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + PEDAGOGICAL_PROJECTS.length) % PEDAGOGICAL_PROJECTS.length;
      setSelectedProject(PEDAGOGICAL_PROJECTS[prevIndex]);
    }
  };

  const handleExploreClick = () => {
    const worksElement = document.getElementById('works');
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FBFBF9]">
      
      {/* 3-Zone Top Navigation Contract */}
      <TopBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Pedagogical & Editorial Content Stream */}
      <main className="flex-1 w-full">
        {/* Section 1: Academic Editorial Magazine Cover Hero */}
        <HeroSection onExploreClick={handleExploreClick} />

        {/* Section 2: Selected Pedagogical Projects & Lookbook Grid */}
        <LookbookGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3: Editorial Spread (About Me, Academic Bio & Manifesto - 2-page book layout) */}
        <AboutSection />

        {/* Section 4: Skills & Competencies (MOS, English, Lab & Pedagogy) */}
        <SkillsSection />

        {/* Section 5: Colophon & Contact */}
        <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Lightbox Modal for Project Details & Lesson Plan Breakdown */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
      />

      {/* Quick Booking / Practicum Connection Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Subtle Ambient Focus Sound Controller */}
      <AudioMoodController />

    </div>
  );
}
