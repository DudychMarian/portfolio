import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import questions from "../../Assets/Projects/ask-a-question.png";
import spacex from "../../Assets/Projects/spacex.png";
import photon from "../../Assets/Projects/photon.png";
import crwn from "../../Assets/Projects/crwn.png";
import music from "../../Assets/Projects/music.png";

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
              imgPath={crwn}
              title="CRWN Clothin"
              description="Massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is going to be a full stack app (MERN stack), using Firebase."
              link="https://github.com/DudychMarian/crwn-clothing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={questions}
              title="Ask a questions"
              description="The project is made without the use of libraries and frameworks. All on pure JavaScript. In the project I used: async, events, assembly (webpack), dynamics, authorization and Firebase configuration"
              link="https://github.com/DudychMarian/ask-a-questions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photon}
              title="Photon"
              description="This is my first project in which I used the API.
              On this site you can find many photos from the Pexels web service. I also did a photo search by name."
              link="https://github.com/DudychMarian/photon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              title="I.music"
              description="Using javascript, I made a site with my own video player, music player and radio."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spacex}
              title="SpaceX Promo"
              description="Falcon Heavy promo page. Here I added to the background a video of a spinning planet, a description of the planet etc."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
