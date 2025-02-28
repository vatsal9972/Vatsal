import React from "react";
import Card from "react-bootstrap/Card";
import { BsBuilding } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="company-logo" />
      <Card.Body>
        <Card.Title>{props.role}</Card.Title>
        <Card.Subtitle className="mb-2">
          <BsBuilding /> {props.company}
        </Card.Subtitle>
        <Card.Text className="duration">
          <BiCalendar /> {props.duration}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="technology-stack">
          {props.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;