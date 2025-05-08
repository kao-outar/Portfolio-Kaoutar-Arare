import React from 'react';

interface Skill {
  name: string;
  level: number; // Pourcentage de 0 à 100
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: "layout-icon",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      name: "Backend",
      icon: "server-icon",
      skills: [
        { name: "PHP", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "Ruby", level: 65 },
        { name: "Express", level: 70 },
        { name: "WordPress/Shopify", level: 80 }
      ]
    },
    {
      name: "Outils",
      icon: "tools-icon",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Web Design", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "Symfony/API Platform", level: 70 },
        { name: "Illustrator/Photoshop", level: 65 }
      ]
    }
  ];

  const otherSkills = [
    { name: "Responsive Design", icon: "responsive-icon" },
    { name: "UX/UI Design", icon: "uxui-icon" },
    { name: "SEO", icon: "seo-icon" },
    { name: "TypeScript", icon: "typescript-icon" },
    { name: "GraphQL", icon: "graphql-icon" },
    { name: "Docker", icon: "docker-icon" },
    { name: "PWA", icon: "pwa-icon" },
    { name: "CI/CD", icon: "cicd-icon" }
  ];

  return (
    <section id="competences" className="section">
      <div className="section-container">
        <div className="skills-header">
          <span className="skills-subtitle">Expertise</span>
          <h2 className="skills-title">Mes Compétences</h2>
          <div className="skills-underline"></div>
        </div>
        
        <p className="skills-description">
          Développeuse fullstack avec une passion pour les interfaces élégantes et les expériences utilisateur intuitives.
        </p>
        
        <div className="skills-grid-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-card">
              <div className="skills-card-header">
                <div className={`skills-card-icon ${category.icon}`}></div>
                <h3 className="skills-card-title">{category.name}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills-section">
          <h2 className="other-skills-title">Autres compétences</h2>
          <div className="other-skills-container">
            {otherSkills.map((skill, index) => (
              <div key={index} className="other-skill-item">
                <div className={`other-skill-icon ${skill.icon}`}></div>
                <span className="other-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 