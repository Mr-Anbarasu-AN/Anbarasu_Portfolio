import React from "react";
import "./Footer.css";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer>
      <p id='footer'>Contact Me:</p>
      <ul>
        <li>Email: natarajananbarasu@gmail.com</li>

        {/* 

        <li>Phone: +91 6382797079</li>
        
        */}

      </ul>
      <p id='footer'>Connect with Social Networks</p>
      <SocialLinks />
      
    </footer>
  );
}

export default Footer;
