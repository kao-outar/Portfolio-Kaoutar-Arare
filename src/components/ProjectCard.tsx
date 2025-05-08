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
  imageUrl?: string | { default: string } | any;
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
          <img src={imageUrl} alt={title} onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
            const div = document.createElement('div');
            div.textContent = title;
            div.className = 'project-placeholder';
            e.currentTarget.parentNode?.appendChild(div);
          }} />
        ) : (
          <div className="project-placeholder">
            <div>{title}</div>
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
          <a href={projectLink} className="external-link" target="_blank" rel="noopener noreferrer" aria-label="Voir le projet">
            <i className="external-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 