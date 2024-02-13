import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div >© 2024 FGmuebleria Todos los derechos reservados.</div>
      <div className="social-icons">
        <a href="link_de_whatsapp">
          <FaWhatsapp className="icon" />
        </a>
        <a href="link_de_instagram">
          <FaInstagram className="icon" />
        </a>
        <a href="link_de_facebook">
          <FaFacebook className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
