import React from 'react';

interface Tag {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Tag[];
  projectLink: string;
  codeLink: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  projectLink,
  codeLink,
  imageUrl
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="project-placeholder">
            {title === "E-commerce Sakura" && <div>E-commerce Sakura</div>}
            {title === "Application Ghibli Fans" && <div>Application Ghibli Fans</div>}
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag.name}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={codeLink} className="github-link" aria-label="Code source">
            <i className="github-icon"></i>
          </a>
          <a href={projectLink} className="external-link" aria-label="Voir le projet">
            <i className="external-icon"></i>
          </a>
          <a href={`/details/${title.toLowerCase().replace(/ /g, '-')}`} className="details-link">
            Détails <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 