import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import "./Experience.css";
import clogo from "../../Assets/clogo.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a look at my professional journey
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={clogo}
              role="Trainee AWS Engineer "
              company="Infikey Technologies Pvt Ltd,"
              duration="April 2024 - June 2024"
              description="During this two-month remote internship, I gained knowledge of various AWS cloud services and 
learned how they are applied in real-life projects.  I was tasked with the Cloud Practitioner quest, 
which allowed me to gain hands-on experience. Additionally, I became familiar with the company's 
work environment ."
              technologies={["AWS", "Docker"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

