import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import "./Contact.css";
// import GitHubImg from "../../assets/images/socials/github.png";
// import LinkedinImg from "../../assets/images/socials/linkedin.png";
// import TwitterImg from "../../assets/images/socials/twitter.png";
// import DevImage from "../../assets/images/developer-illustration.png";

function Contact() {
  return (
    <Container fluid className="contact_section" id="contact">
      <Container>
        <Row>
          <Col md={6} className="contact_description">
            <Fade left>
              <h1 className="contact_left"> &lt;Prathab's Portfolio/&gt;</h1>
              <p className="contact_body">
                "Thank you for taking the time to explore my portfolio. Feel
                free to connect with me to discuss potential collaborations or
                opportunities. Let's build something great together!."
              </p>
              <br />
            </Fade>
          </Col>

          <Col md={6}>
            <Fade right cascade>
              <h1 className="formLogo">Reach Out to Me</h1>
              <p className="formEmail">
                Send an E-Mail or Call{" "}
                <a href="mailto:" className="fromEmail__mail">
                  Oslinprathab@gmail.com / 9047356798
                </a>{" "}
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
