import React, { useState, FormEvent } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    // Ici vous pourriez ajouter un appel API pour envoyer l'email
    
    // Réinitialiser le formulaire après l'envoi
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Afficher un message de confirmation
    alert('Votre message a été envoyé. Merci !');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">CONTACT</span>
          <h2 className="section-title">Me Contacter</h2>
          <div className="section-decoration"></div>
        </div>
      
        <p className="contact-intro">
          Vous avez un projet intéressant ou une opportunité à discuter ? N'hésitez pas à me contacter !
        </p>
      
        <div className="contact-container">
          <div className="contact-info">
            <h3>Informations de contact</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="email-icon"></i>
              </div>
              <div className="contact-detail">
                <p className="contact-label">Email</p>
                <p className="contact-value">
                  <a href="mailto:kaoutar.arare@gmail.com" className="contact-link">kaoutar.arare@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="phone-icon"></i>
              </div>
              <div className="contact-detail">
                <p className="contact-label">Téléphone</p>
                <p className="contact-value">
                  <a href="tel:0602492897" className="contact-link">06 02 49 28 97</a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="location-icon"></i>
              </div>
              <div className="contact-detail">
                <p className="contact-label">Localisation</p>
                <p className="contact-value">Paris, France</p>
              </div>
            </div>
            
            <div className="social-networks">
              <h3>Réseaux sociaux</h3>
              <div className="social-icons">
                <a href="https://github.com/kao-outar/" target="_blank" rel="noopener noreferrer" className="social-icon github"></a>
                <a href="https://www.linkedin.com/in/kaoutar-arare/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Envoyez-moi un message</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Votre email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Le sujet de votre message" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Votre message..." 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="send-message-button">
                <span className="button-icon">⟶</span>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 