import React, { useState, useEffect } from 'react';
import './App.css';

// Import des composants
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Effet pour animer les sections au défilement
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const checkVisibility = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    
    // Vérifier la visibilité au chargement initial
    checkVisibility();
    
    // Ajouter le gestionnaire d'événements de défilement
    window.addEventListener('scroll', checkVisibility);
    
    // Nettoyer le gestionnaire d'événements
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="App">
      <Navbar openContactModal={openContactModal} />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
