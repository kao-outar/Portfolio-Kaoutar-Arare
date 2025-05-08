import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>© {currentYear} Kaoutar - Tous droits réservés</p>
    </footer>
  );
};

export default Footer; 