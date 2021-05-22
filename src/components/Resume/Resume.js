import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR Frontend Developer"
              date="October 2019 - May 2021"
              content={[
                "Studied web development. I took courses, read books, practiced a lot.",
                " The last project is this massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is going to be a full stack app (MERN stack), using Firebase.",
              ]}
            />
            <h3 className="resume-title">Other Activities</h3>
            <Resumecontent
              title="Web Developer"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Zero To Mastery Academy"
              date="2020 - 2021"
              content={[`Junior React Developer`]}
            />
            <Resumecontent
              title="Lviv Cooperative College of Economics and Law"
              date="2018 - 2022"
              content={["Specialty: Software engineering"]}
            />
            <Resumecontent
              title="Mykolaiv school №1"
              date="2009 - 2018"
              content={["GPA: 10.4/12"]}
            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title=""
              content={[
                `HTML and CSS`,
                `JavaScript`,
                "React and Redux",
                "Firebase",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
