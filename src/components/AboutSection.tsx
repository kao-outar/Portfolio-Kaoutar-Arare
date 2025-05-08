import React from 'react';

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
          <div className="about-image-container">
            <div className="about-bg-image"></div>
            <div className="about-img bubble-top">
              <div className="setup-text">
                My favorite<br />setup gaming rose
              </div>
            </div>
            <div className="about-img bubble-main"></div>
            <div className="about-img bubble-bottom">
              <img src="/images/peluches-chat.jpg" alt="Collection de peluches et chat" />
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
                  <div className="passion-icon heart-icon"></div>
                  <div className="passion-content">
                    <h4>Romance</h4>
                    <p>Passionnée par les romans de romance comme 'It Ends with Us' et 'A Wedding in Provence'.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon game-icon"></div>
                  <div className="passion-content">
                    <h4>Jeux Vidéo</h4>
                    <p>Joueuse sur Nintendo Switch et PC (Valorant, Fortnite).</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon anime-icon"></div>
                  <div className="passion-content">
                    <h4>Anime & Manga</h4>
                    <p>Fan de culture japonaise et des œuvres de Studio Ghibli.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon cat-icon"></div>
                  <div className="passion-content">
                    <h4>Chats</h4>
                    <p>Grande amatrice de chats et propriétaire d'un adorable félin.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon art-icon"></div>
                  <div className="passion-content">
                    <h4>Art</h4>
                    <p>Je dessine régulièrement et pratique le nail art.</p>
                  </div>
                </div>
                
                <div className="passion-item">
                  <div className="passion-icon book-icon"></div>
                  <div className="passion-content">
                    <h4>Littérature</h4>
                    <p>Lectrice assidue, avec un penchant pour les histoires touchantes.</p>
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