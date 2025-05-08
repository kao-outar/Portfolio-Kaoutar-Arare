import React from 'react';
import './CustomIcons.css';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
}

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

const AboutSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: "2021 - Présent",
      title: "Développeuse Front-end",
      company: "Entreprise XYZ"
    },
    {
      period: "2019 - 2021",
      title: "Développeuse Web Junior",
      company: "Startup ABC"
    }
  ];

  const education: EducationItem[] = [
    {
      period: "2015 - 2019",
      degree: "Diplôme en Informatique",
      institution: "Université de Technologie"
    }
  ];

  return (
    <section id="apropos" className="section">
      <div className="section-container">
        <div className="about-header">
          <span className="about-subtitle">Qui suis-je</span>
          <h2 className="about-title">À Propos de Moi</h2>
          <div className="about-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image-container" style={{ position: "relative" }}>
            <div className="about-bg-image" style={{ backgroundImage: "url('/images/setup.jpg')", backgroundSize: "cover", backgroundPosition: "center", transform: "rotate(-90deg)" }}></div>
            <div className="about-img bubble-main" style={{ position: "absolute", bottom: "20px", right: "20px", transform: "translateX(0) translateY(0)" }}>
              <img src={require("../assets/images/me1.png")} alt="Kaoutar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-text-title">Développeuse passionnée</h3>
            <p className="about-description">
              Bonjour ! Je suis Kaoutar, développeuse web avec une passion pour la création d'interfaces esthétiques et fonctionnelles. Mon parcours dans le développement web est enrichi par mon amour pour l'art, les mangas, et la culture japonaise.
            </p>
            <p className="about-description">
              Au-delà du code, j'adore exprimer ma créativité à travers le dessin, le nail art, et je suis une grande fan des univers de Studio Ghibli. Je trouve que ces passions apportent une perspective unique à mon approche du développement web.
            </p>
            
            <div className="passions-section">
              <h3 className="passions-title">Mes passions</h3>
              
              <div className="passions-grid">
                <div className="passion-item">
                  <div className="passion-icon book-icon"></div>
                  <div className="passion-content">
                    <h4>Romans</h4>
                    <p>Passionnée de lecture et de romans.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon gamepad-icon"></div>
                  <div className="passion-content">
                    <h4>Jeux Vidéo</h4>
                    <p>Joueuse sur Nintendo Switch et PC (Valorant, Fortnite).</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon manga-icon"></div>
                  <div className="passion-content">
                    <h4>Anime & Manga</h4>
                    <p>Fan de culture japonaise et des œuvres de Studio Ghibli.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon pet-icon"></div>
                  <div className="passion-content">
                    <h4>Animaux</h4>
                    <p>J'aime les animaux et j'ai un petit hamster qui s'appelle Pika.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon palette-icon"></div>
                  <div className="passion-content">
                    <h4>Art</h4>
                    <p>Je dessine régulièrement et pratique le nail art.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-skills-section">
              <h3 className="soft-skills-title">Soft Skills</h3>
              
              <div className="soft-skills-grid">
                <div className="soft-skill-item">
                  <div className="soft-skill-icon team-icon"></div>
                  <div className="soft-skill-content">
                    <h4>Travail en équipe</h4>
                    <p>Capacité à collaborer efficacement au sein d'une équipe multidisciplinaire.</p>
                  </div>
                </div>
                
                <div className="soft-skill-item">
                  <div className="soft-skill-icon responsibility-icon"></div>
                  <div className="soft-skill-content">
                    <h4>Sens des responsabilités</h4>
                    <p>Engagement à respecter les délais et à livrer un travail de qualité.</p>
                  </div>
                </div>
                
                <div className="soft-skill-item">
                  <div className="soft-skill-icon autonomy-icon"></div>
                  <div className="soft-skill-content">
                    <h4>Autonomie</h4>
                    <p>Capable de travailler de manière indépendante et de prendre des initiatives.</p>
                  </div>
                </div>
                
                <div className="soft-skill-item">
                  <div className="soft-skill-icon adaptability-icon"></div>
                  <div className="soft-skill-content">
                    <h4>Adaptabilité</h4>
                    <p>Facilité à s'adapter à de nouveaux environnements et technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 