import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vatsal Chihala </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I'm a 3rd-year Computer Engineering student at <span className="purple">Charusat University</span>, passionate about cloud computing, AWS architecture, and cutting-edge technologies
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In this world, mother and father are like God. If you don’t keep them happy, then even your greatest success is meaningless!"{" "}
          </p>
          <footer className="blockquote-footer">Chihala Vatsal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
