import React from 'react';
import ProjectCard from './ProjectCard';

// Import des images
import sqyCouleurImg from '../assets/images/sqy.png';
import jocelyneTalonImg from '../assets/images/jocelyne.png';
import nolaMassageImg from '../assets/images/nola.png';
import vingtetuneheuresdixImg from '../assets/images/21h.png';
import osezLeCentreVilleImg from '../assets/images/olcv.png';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "SQY Couleur",
      description: "🛠️ Site vitrine complet pour une entreprise de rénovation d'intérieur haut de gamme à Paris. Mise en valeur de la modélisation 3D et de l'approche artisanale.",
      tags: [{ name: "WordPress" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Responsive" }],
      projectLink: "https://sqycouleur.com/",
      codeLink: "#",
      imageUrl: sqyCouleurImg
    },
    {
      title: "Jocelyne Talon",
      description: "👶 Site web d'une coach parentale spécialisée dans l'accompagnement des familles avec une approche fondée sur les neurosciences et la bienveillance.",
      tags: [{ name: "WordPress" }, { name: "UX/UI" }, { name: "Responsive" }],
      projectLink: "https://jocelynetalon.fr/",
      codeLink: "#",
      imageUrl: jocelyneTalonImg
    },
    {
      title: "Nola Massage",
      description: "💆‍♀️ Site pour un cabinet de soins corporels et énergétiques avec une navigation fluide centrée sur la prise de rendez-vous et la présentation des soins.",
      tags: [{ name: "WordPress" }, { name: "CSS" }, { name: "PHP" }, { name: "JavaScript" }],
      projectLink: "https://nolamassage.fr/",
      codeLink: "#",
      imageUrl: nolaMassageImg
    },
    {
      title: "Vingt et une heures dix",
      description: "💍 Refonte du site d'une marque de bijoux écoresponsables, projet gagnant d'un concours inter-école, finalisé avec la cliente.",
      tags: [{ name: "WordPress" }, { name: "E-commerce" }, { name: "WooCommerce" }],
      projectLink: "https://vingtetuneheuresdix.jewelry/",
      codeLink: "#",
      imageUrl: vingtetuneheuresdixImg
    },
    {
      title: "Osez Le Centre-Ville",
      description: "🧠 Refonte du site de l'agence spécialisée en communication locale pour PME, présentant l'offre en création de site web, SEO et campagnes marketing.",
      tags: [{ name: "WordPress" }, { name: "JavaScript" }, { name: "SEO" }],
      projectLink: "https://osezlecentreville.com/",
      codeLink: "#",
      imageUrl: osezLeCentreVilleImg
    }
  ];

  return (
    <section id="projets" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">Réalisations</span>
          <h2 className="section-title">Mes Projets</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectLink={project.projectLink}
              codeLink={project.codeLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 