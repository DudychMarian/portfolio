import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marian Dudych </span>
            from <span className="purple"> Lviv, Ukraine</span>
            <br />I am a junior frontend developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ textAlign: "left", marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Choose a job you love, and you will never <br /> have to work a day in your life."{" "}
          </p>
          <footer className="blockquote-footer">Confucius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
