import React, { useContext } from "react";
import DHLogo from "../images/DH.png";
import FacebookLogo from "../images/ico-facebook.png";
import InstagramLogo from "../images/ico-instagram.png";
import TiktokLogo from "../images/ico-tiktok.png";
import WhatsappLogo from "../images/ico-whatsapp.png";
import { ContextGlobal } from "../Components/utils/global.context";

const socialLinks = [
  { logo: FacebookLogo, alt: "Facebook", url: "#" },
  { logo: InstagramLogo, alt: "Instagram", url: "#" },
  { logo: TiktokLogo, alt: "Tiktok", url: "#" },
  { logo: WhatsappLogo, alt: "Whatsapp", url: "#" }
];

const Footer = () => {
  const { state } = useContext(ContextGlobal);

return(
  <footer className={state.theme}>
    <img className="logo" src={DHLogo} alt="Digital House Logo" />
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <img src={social.logo} alt={social.alt} />
        </a>
      ))}
    </div>
    <p>&copy; 2024 Digital House. Todos los derechos reservados.</p>
  </footer>
  )
};

export default Footer;