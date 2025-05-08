import React, { useState, useEffect } from 'react';

interface NavbarProps {
  // La prop openContactModal n'est plus nécessaire
}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Déterminer la section active
      const sections = ['contact', 'competences', 'apropos', 'projets', 'accueil'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'event listener lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Désactiver le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo">Kaoutar</div>
        
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#accueil" onClick={closeMenu} className={activeSection === 'accueil' ? 'active' : ''}>Accueil</a>
          <a href="#projets" onClick={closeMenu} className={activeSection === 'projets' ? 'active' : ''}>Projets</a>
          <a href="#apropos" onClick={closeMenu} className={activeSection === 'apropos' ? 'active' : ''}>À propos</a>
          <a href="#competences" onClick={closeMenu} className={activeSection === 'competences' ? 'active' : ''}>Compétences</a>
          <a href="#contact" className={`contact-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
        </div>
      </nav>
      
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar; 