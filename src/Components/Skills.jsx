import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiJava } from "react-icons/di";
import { SiMysql, SiUnrealengine, SiPython, SiPostgresql, SiDocker, SiKubernetes  } from "react-icons/si";
import { FaAws } from 'react-icons/fa';

import "./Skill.css";

function Skill() {
  return (
    <div>
      <center>
      <h1 id="skill-icon">Professional Skillset</h1>
      </center>
    <Container fluid className="skill-section">
      <Row className="skillrow">
        <Col className="tech-icons"  >
          <DiJava /> {/* Java */}
          <p>Java</p>
        </Col>
        <Col className="tech-icons"  >
          <SiMysql /> {/* MySQL */}
          <p>Mysql</p>
        </Col>
        <Col className="tech-icons" >
          <DiJavascript1 /> {/* JavaScript */}
          <p>JavaScript</p>
        </Col>
        <Col className="tech-icons"  >
          <DiNodejs /> {/* Node.js */}
          <p>Node.js</p>
        </Col>
        <Col className="tech-icons"  >
          <DiReact /> {/* React */}
          <p>React</p>
        </Col>
        <Col className="tech-icons"  >
          <DiGit /> {/* Git */}
          <p>Git</p>
        </Col>
        <Col className="tech-icons"  >
          <SiPython /> {/* Python */}
          <p>Python</p>
        </Col>
        <Col className="tech-icons" >
          <FaAws /> {/* AWS Cloud */}
          <p>AWS</p>
        </Col>
        <Col className="tech-icons" styl>
          <SiUnrealengine /> {/* Unity Game Engine */}
          <p>Unreal Engine</p>
        </Col>
        <Col className="tech-icons" >
          <SiPostgresql /> {/* PostgreSQL */}
          <p>PostgreSQL</p>
        </Col>
        <Col className="tech-icons" >
          <SiDocker /> {/* Docker */}
          <p>Docker</p>
        </Col>
        <Col className="tech-icons" >
          <SiKubernetes /> {/* Kubernetes */}
          <p>Kubernetes</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Skill;
