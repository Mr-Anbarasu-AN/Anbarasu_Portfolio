
// fetch project
import React from "react";
import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  { url: "https://re-captcha.netlify.app/", title: "Re-Captcha" },
  { url: "https://birthday-gift-boxes-generator.netlify.app/", title: "Whip-Up Gift Box" },
  { url: "https://serverless-function-for-send-mail.netlify.app/", title: "Email" },
  { url: "https://react-for-card-flip.netlify.app/", title: "React Card Flip" },
  { url: "https://weather-report-using-html.netlify.app/", title: "Weather Report" },
  { url: "https://speech-2-text-converter.netlify.app/", title: "Speech = Text" },
  { url: "https://anbarasu-number-guessing-game.netlify.app/", title: "Number Guessing Game" },
  { url: "https://qr-code-generator-in-react.netlify.app/", title: "QR Code Generator" },
];

function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
    <Navbar/>
    <div className="Project-body">
      <h1 className="Project" style={{ marginTop: 0, padding: 10 }}>My Projects</h1>
      <ul className="project-list">
        {projects.map(project => (
          <li key={project.url} onClick={() => handleProjectClick(project.url)}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.url}/screenshot.png)` }}
            ></div>
            <div className="iframe-container">
              <iframe
                src={project.url}
                title={project.title}
                className="project-iframe"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <p>{project.title}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default Projects;


/*


import React from "react";
import "./Projects.css";

const projects = [
  { url: "https://re-captcha.netlify.app/", title: "Re-Captcha" },
  { url: "https://birthday-gift-boxes-generator.netlify.app/", title: "Whip-Up Gift Box" },
  { url: "https://react-for-card-flip.netlify.app/", title: "React Card Flip" },
  { url: "https://weather-report-using-html.netlify.app/", title: "Weather Report" },
  { url: "https://speech-2-text-converter.netlify.app/", title: "Speech = Text" },
  { url: "https://anbarasu-number-guessing-game.netlify.app/", title: "Number Guessing Game" },
];

function Projects() {
  return (
    <div className="Project-body">
      <h1 className="Project" style={{ marginTop: 0, padding: 10 }}>My Projects</h1>
      <ul className="project-list">
        {projects.map(project => (
          <li key={project.url}>
            <div className="iframe-container">
              <iframe
                src={project.url}
                title={project.title}
                className="project-iframe"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <p>{project.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;



/*

import React from "react";
import Github from "./Images/Github.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div className="body">
      <h1 className="Project" style={{marginTop: 0, padding: 10}}>My Projects</h1>
      <ul className="project-list">
      
        <li>
          <a href="https://re-captcha.netlify.app/">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Re-Captcha</p>
        </li>
        <li>
          <a href="https://birthday-gift-boxes-generator.netlify.app/">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Whip-Up Gift Box</p>
        </li>
        <li>
          <a href="https://react-for-card-flip.netlify.app/">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>React Card Flip</p>
        </li>
        <li>
          <a href="https://weather-report-using-html.netlify.app/">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Weather Report</p>
        </li>
        <li>
          <a href="https://speech-2-text-converter.netlify.app/">
            <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Speech = Text</p>
        </li>
        <li>
          <a href="https://anbarasu-number-guessing-game.netlify.app/">
            <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Number Guessing Game</p>
        </li>
      </ul>
    </div>
  );
}


export default Projects;

/*

*/