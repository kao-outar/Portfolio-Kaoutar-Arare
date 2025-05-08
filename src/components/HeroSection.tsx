import React from 'react';
import './HeroSection.css';
// Importer l'image correctement
import profileImage from '../assets/images/me1.png';

const HeroSection: React.FC = () => {
  return (
    <section id="accueil" className="section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="welcome-tag">👋 Bienvenue sur mon portfolio</div>
          <h1>Je suis <span className="highlight">Kaoutar</span>,</h1>
          <p className="hero-subtitle">Développeuse web créative</p>
          <p className="hero-description">
            Passionnée par le développement web, les jeux vidéo et la culture manga. 
            Je crée des sites et applications modernes, esthétiques et efficaces avec une touche d'originalité.
          </p>
          <div className="hero-buttons">
            <a href="#projets" className="btn primary-btn">Voir mes projets</a>
            <a href="#apropos" className="btn secondary-btn">En savoir plus</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-bubble has-image">
            <img src={profileImage} alt="Kaoutar" />
          </div>
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 