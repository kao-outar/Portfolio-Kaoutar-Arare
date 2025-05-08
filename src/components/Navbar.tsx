import React, { useState, useEffect } from 'react';

interface NavbarProps {
  // La prop openContactModal n'est plus nécessaire
}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'event listener lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo">Kaoutar</div>
      <div className="nav-links">
        <a href="#accueil">Accueil</a>
        <a href="#projets">Projets</a>
        <a href="#apropos">À propos</a>
        <a href="#competences">Compétences</a>
        <a href="#contact" className="contact-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 