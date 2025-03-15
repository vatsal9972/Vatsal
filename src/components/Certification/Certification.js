import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import clf from "../../Assets/Certifications/clf.png";
import q from "../../Assets/Certifications/q.png";
import aca from "../../Assets/Certifications/aca.png";


import "./cer.css";

function Certifications() {
  return (
    <Container fluid className="certification-section" id="certifications">
      <Particle />
      <Container>
        <h1 className="certification-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my certifications that validate my skills and expertise.
        </p>

        {/* First Row of Certificates */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={clf}
              title="AWS Certified Cloud Practitioner"
              issuedBy="Amazon Web Services (AWS)"
              certLink="https://www.credly.com/badges/37743b9d-3ba6-486b-a640-3e402a538e20/public_url"
              pdfLink="/cert/AWS_CLF.pdf"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={q}
              title="AWS Cloud Quest: Cloud Practitioner"
              issuedBy="Amazon Web Services (AWS)"
              certLink="https://www.credly.com/badges/f0f60b18-e495-4e51-aac2-c5c0612bce24/public_url"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={aca}
              title="AWS Academy Graduate - AWS Academy Cloud Foundations"
              issuedBy="AWS Academy"
              certLink="https://www.credly.com/badges/7569badc-8a03-4fff-93a8-23f8671d7bb9/public_url"
              pdfLink="/cert/AWS_ACA.pdf"
            />
          </Col>
        </Row>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="certification-card">
    <CertificationCard
      title="AWS Educate Introduction to Cloud 101"
      issuedBy="AWS Educate"
      certLink="https://www.credly.com/badges/10bfdd8c-ab40-4e2d-b715-6e4af698f83a/public_url"
    />
  </Col>

  <Col md={4} className="certification-card">
    <CertificationCard
      title="Data Structure and Algorithms Using Java"
      issuedBy="NPTEL"
      pdfLink="/cert/NPTEL.pdf"
    />
  </Col>

  <Col md={4} className="certification-card">
    <CertificationCard
      title="AWS Cloud Practitioner Essentials"
      issuedBy="Amazon Web Services (AWS)"
      pdfLink="/cert/ESS.pdf"
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Certifications;
