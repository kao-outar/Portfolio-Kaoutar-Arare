import React, { FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    alert('Votre message a été envoyé. Merci !');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <h2>Contactez-moi</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Votre message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
        <div className="contact-info">
          <p>Vous pouvez également me contacter directement:</p>
          <ul>
            <li>Email: kaoutar@exemple.com</li>
            <li>LinkedIn: linkedin.com/in/kaoutar</li>
            <li>GitHub: github.com/kaoutar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 