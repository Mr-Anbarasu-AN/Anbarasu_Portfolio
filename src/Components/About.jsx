


import React from "react";
import "./About.css"; // Import the CSS file for styling
import Skill from "./Skills";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy1.png";
import Tools from "./Tools";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbar/>
    <div className="body">
      <div className="aboutcontainer">
        <div className="leftcontainer">
          <h1>About Me</h1>
          <p>Hello, I'm Anbarasu A N!</p>
          <p>I am an AWS Certified Cloud Practitioner and a passionate Full Stack Developer <br></br>
            with hands-on experience in developing and deploying web applications.</p>
          <p>I specialize in AWS Cloud and various programming languages, including Java, MySQL, React.js, and Node.js.</p>
          <p>I hold a diploma in Computer Engineering from Sakthi Polytechnic College, Erode,<br></br> 
          and I am currently pursuing a B.Tech-IT at Sri Krishna College of Engineering and Technology, Coimbatore.</p>
          <p>I have strong team management and leadership skills, honed through academic projects, and a solid technical<br></br>
           foundation in tools and technologies like Spring Boot, VS Code, Unreal Engine, Illustrator, Canva, and Photoshop.</p>
        </div>
        <div className="rightcontainer">
          <center>
            <Link to="/About">
              <img src={ProfilePhoto} alt="Profile1" style={{ width: '350px', height: '350px' }} />
            </Link>
          </center>
        </div>
      </div>
    
      <div>
        <Skill />
        <Tools />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;



/*


import React from "react";
import "./About.css"; // Import the CSS file for styling
import Skill from "./Skills";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy1.png";
import Tools from "./Tools";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbar/>
    <div className="body">
      <div className="aboutcontainer">
        <div className="leftcontainer">
          <h1>About Me</h1>
          <p>I'm Anbarasu A N!!!</p>
          <p>I am a full stack web developer based in Coimbatore.</p>
          <p>I have a diploma in computer engineering from Sakthi Polytechnic College in Erode.</p>
          <p>I have been studying B.Tech-IT at Sri Krishna College of Engineering and Technology in Coimbatore.</p>
          <p>My hobbies include photo editing, logo designing, and programming.</p>
        </div>
        <div className="rightcontainer">
          <center>
            <Link to="/About">
              <img src={ProfilePhoto} alt="Profile1" style={{ width: '350px', height: '350px' }} />
            </Link>
          </center>
        </div>
      </div>
    
      <div>
        <Skill />
        <Tools />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;

*/