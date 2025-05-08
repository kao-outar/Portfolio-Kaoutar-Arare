import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Sakura",
      description: "Un site e-commerce moderne avec des fonctionnalités avancées de panier et paiement sécurisé.",
      tags: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Stripe" }],
      projectLink: "#",
      codeLink: "#",
      imageUrl: undefined
    },
    {
      title: "Application Ghibli Fans",
      description: "Une application pour les fans de Studio Ghibli permettant de découvrir et partager des informations sur les films.",
      tags: [{ name: "React" }, { name: "Redux" }, { name: "Firebase" }, { name: "API" }],
      projectLink: "#",
      codeLink: "#",
      imageUrl: undefined
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