import React from "react";
import "./Findme.css"; // Import the CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";

function Findme() {
  return (
    <>
    <Navbar/>
    <div className="body">
      <center>
        <h2 id="Find-container"><b>You can see here</b></h2>
      </center>
    <div className="Find-container">
      
      <iframe
        title="Google Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.1389037283466!2d77.34647149465263!3d11.498376011846956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba923d507cfea7f%3A0xccc250382115a3c0!2sPattukaran%20Thottam!5e1!3m2!1sen!2sin!4v1687791514128!5m2!1sen!2sin"
        width="100%"
        height="550"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      >
      </iframe>
    </div>
    <br/>
    </div>
    <Footer/>
    </>
  );
}

export default Findme;
