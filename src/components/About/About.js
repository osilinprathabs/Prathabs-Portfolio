import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";
import "./About.css";
import myImg from "../../assets/DP.png";
import Hi from "../../assets/Hi.gif";
import GitHubImg from "../../assets/images/socials/github.png";
import LinkedinImg from "../../assets/images/socials/linkedin.png";
import TwitterImg from "../../assets/images/socials/twitter.png";
import Mail from "../../assets/images/socials/mail.png";

import Type from "./Type";

function About() {
  return (
    <Fade bottom duration="2000">
      <Container fluid className="about__section" id="about">
        <Container>
          <Row>
            <Col md={8} className="about__description">
              <div className="text__center">
                <h1 className="about__intro">
                  Hi <img alt="Hii" src={Hi} width="50px"></img>, I'm Osilin
                  prathab
                </h1>
                <Type />
              </div>

              <p className="about__body">
                <main id="container">
                  <div id="terminal">
                    <section id="terminal__bar">
                      <div id="bar__buttons">
                        <button className="bar__button" id="bar__button--exit">
                          &#10005;
                        </button>
                        <button className="bar__button">&#9472;</button>
                        <button className="bar__button">&#9723;</button>
                      </div>
                      <p id="bar__user">prathabs@: ~</p>
                    </section>

                    <section id="terminal__body">
                      <div id="terminal__prompt">
                        <span id="terminal__prompt--user">prathabs@mbp:</span>
                        <span id="terminal__prompt--location">~</span>
                        <span id="terminal__prompt--bling">$ About Me.txt</span>
                      </div>
                      <div id="terminal__bio">
                        I am a dedicated Full Stack Developer with expertise in
                        both front-end and back-end technologies. I excel in
                        HTML, CSS, JavaScript, and frameworks like React and
                        Angular for the front-end. On the back-end, I'm
                        proficient in MySQL, Java, and Spring. I also create and
                        test APIs using Postman, enabling me to build dynamic,
                        responsive, and efficient web applications.
                        <br />
                        <br />I am a{" "}
                        <i>
                          <b> </b>
                        </i>{" "}
                        <i>
                          <b>Full Stack Web Developer.</b>
                        </i>
                      </div>
                      <div id="terminal__prompt">
                        <span id="terminal__prompt--user">prathabs@mbp:</span>
                        <span id="terminal__prompt--location">~</span>
                        <span id="terminal__prompt--bling">$</span>
                        <span id="terminal__prompt--cursor"></span>
                      </div>
                    </section>
                  </div>
                </main>

                <a
                  rel="My Resume"
                  href="https://drive.google.com/file/d/1MIcZYmX5lTqWQchVbIA4y1C02bS4LtuK/view"
                  target="blank"
                >
                  <div
                    className="btn"
                    style={{ color: "white", marginTop: "1.5rem" }}
                  >
                    Resumea
                  </div>
                </a>
              </p>
              <br />

              <div className="text_center_link">
                <a
                  rel="Github"
                  href="https://github.com/osilinprathabs"
                  target="blank"
                >
                  <img src={GitHubImg} alt="Github" />
                </a>

                <a
                  rel="Github"
                  href="mailto:oslinprathab@gmail.com"
                  target="blank"
                >
                  <img src={Mail} alt="Mail" />
                </a>

                <a
                  rel="Linkedin"
                  href="https://www.linkedin.com/in/osilinprathabs/"
                  target="blank"
                >
                  <img src={LinkedinImg} alt="Linkedin" />
                </a>

                <a
                  rel="Twitter"
                  href="https://x.com/OsLin_PrAthAb"
                  target="blank"
                >
                  {" "}
                  <img src={TwitterImg} alt="Twitter" />
                </a>
              </div>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="profile_image" alt="Me" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fade>
  );
}
export default About;
