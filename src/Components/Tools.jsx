
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {DiEclipse } from "react-icons/di";
import { 
     SiMysql, SiSpring, SiKubernetes,
     SiUnrealengine, SiAdobeillustrator,
    SiFigma, SiPostman, SiAdobephotoshop, SiAdobexd, SiDocker
  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOffice } from "react-icons/tb"; // Importing FontAwesome Microsoft icon
import "./Tools.css";

function Tools() {
  return (
    <>
    <center>
      <h1 id="tools-icon">Software Expertise</h1>
      </center>
    <Container fluid className="tools-section">
      
      <Row className="toolsrow">
      <Col xs={6} md={4} lg={3} className="tools-icons" >
          <TbBrandOffice /> 
          <p   className="tools"   >MS Office</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiSpring /> 
          <p  className="tools"   >Spring Boot</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <VscVscode /> 
          <p  className="tools"   >VS Code</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiUnrealengine /> 
          <p  className="tools"   >Unreal Engine</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiMysql /> 
          <p  className="tools"   >MySQL</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobeillustrator /> 
          <p  className="tools"   >Adobe Illustrator</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <DiEclipse /> 
          <p  className="tools"   >Eclipse</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiFigma /> 
          <p  className="tools"   >Figma</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiPostman /> 
          <p  className="tools"   >Postman</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobephotoshop /> 
          <p  className="tools"   >Photoshop</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobexd /> 
          <p  className="tools"   >Adobe XD</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiKubernetes /> 
          <p className="tools">Kubernetes</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiDocker /> 
          <p  className="tools"   >Docker</p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Tools;


/*
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {DiEclipse } from "react-icons/di";
import { 
     SiMysql, SiMicrosoftoffice, SiSpring, SiKubernetes,
    SiVisualstudiocode, SiUnrealengine, SiAdobeillustrator,
    SiFigma, SiPostman, SiAdobephotoshop, SiAdobexd, SiDocker
  } from "react-icons/si";
import "./Tools.css";

function Tools() {
  return (
    <>
    <center>
      <h1 id="tools-icon">Software Expertise</h1>
      </center>
    <Container fluid className="tools-section">
      
      <Row className="toolsrow">
      <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiMicrosoftoffice /> 
          <p   className="tools"   >MS Office</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiSpring /> 
          <p  className="tools"   >Spring Boot</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiVisualstudiocode /> 
          <p  className="tools"   >VS Code</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiUnrealengine /> 
          <p  className="tools"   >Unreal Engine</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiMysql /> 
          <p  className="tools"   >MySQL</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobeillustrator /> 
          <p  className="tools"   >Adobe Illustrator</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <DiEclipse /> 
          <p  className="tools"   >Eclipse</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiFigma /> 
          <p  className="tools"   >Figma</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiPostman /> 
          <p  className="tools"   >Postman</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobephotoshop /> 
          <p  className="tools"   >Adobe Photoshop</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobexd /> 
          <p  className="tools"   >Adobe XD</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiKubernetes /> 
          <p className="tools">Kubernetes</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiDocker /> 
          <p  className="tools"   >Docker</p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Tools;


/*
*/