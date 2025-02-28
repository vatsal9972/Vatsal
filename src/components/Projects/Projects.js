import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Resume Builder"
              description="In this open-source project, users are not required to log in. They can simplyenter their information such as phone number,language proficiency,projectdetails,education etc., into a form. Once the information is added,users can choose from a selection of more than five templates. After selecting atemplate, users can download it as a PDF file."
              ghLink="https://github.com/vatsal9972/Resume_PROJECT.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Skill hub"
              description="Developed a web site featuring dual interfaces: an admin dashboard and a user interface. Implemented user authentication functionalities including registration, login, and password recovery.Users can securely input and manage their information through a user-friendly form upon logging in.On the admin side, integrated features enabling administrators to efficiently manage user data, including viewing all user profiles and applying filters based on skills and areas of interest.Empowered users to engage in interactive communication by creating posts and commenting on other user contributions.
"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Automatic Number Plate Detection on AWS "
              description="Designed and implemented an AWS-based architecture for processing unstructured video    data. Utilized 
Amazon Kinesis Video Streams, S3, Lambda, and Textract for object detection and text extraction, with 
DynamoDB and SQS for data storage and messaging. Enabled real-time visualization using EC2. "
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
