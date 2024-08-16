import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Skill from "../../assets/images/Skill.png";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";

import HTML from "../../assets/images/skill-section/html5.png";
import C from "../../assets/images/skill-section/css3.png";

import Js from "../../assets/images/skill-section/javaScript.png";

import Github from "../../assets/images/skill-section/github.png";
import nodejs from "../../assets/images/skill-section/node-js.png";
import ReactJs from "../../assets/images/skill-section/react.png";
import Java from "../../assets/images/skill-section/java.png";
import Cloud from "../../assets/images/skill-section/google-cloud.png";
import Mysql from "../../assets/images/skill-section/mysql.png";
import Angular from "../../assets/images/skill-section/angular.png";
import php from "../../assets/images/skill-section/php.png";
import Spring from "../../assets/images/skill-section/spring.png";

export class Skills extends Component {
  render() {
    return (
      <div>
        <Fade left>
          <div>
            <h2 className="skillsbg">Skills</h2>
            <div className="skillsfr">Skills</div>
          </div>
        </Fade>

        <Container fluid className="skills_section" id="skills">
          <Container>
            <Row>
              <Col md={4} className="mySkills">
                <Fade left>
                  <img alt="My skills" src={Skill} className="img_skill" />
                </Fade>
              </Col>

              <Col md={8} className="skills_description">
                <Fade top>
                  <p className="skills_intro">Tech I'm familiar with..</p>
                </Fade>

                <div class="skill_images">
                  <Flip left cascade>
                    <ul>
                      {/* Use tiltEnable={false} inside Tilt to restrict tile effect */}

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="HTML 5">
                            <img className="My_Skill" alt="HTML 5" src={HTML} />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="css3">
                            <img className="My_Skill" alt="css3" src={C} />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="JavaScript">
                            <img
                              className="My_Skill"
                              alt="JavaScript"
                              src={Js}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="React Js">
                            <img
                              className="My_Skill"
                              id="React-logo"
                              alt="React"
                              src={ReactJs}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="Angular">
                            <img
                              className="My_Skill"
                              alt="angular"
                              src={Angular}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="Node-js">
                            <img
                              className="My_Skill"
                              alt="node-js"
                              src={nodejs}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="java">
                            <img className="My_Skill" alt="java" src={Java} />
                          </span>
                        </Tilt>
                      </li>

                      <li style={{ width: "90px" }}>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="PHP">
                            <img
                              className="My_Skill"
                              style={{ marginLeft: "-5px" }}
                              alt="php"
                              src={php}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="Spring">
                            <img
                              className="My_Skill"
                              alt="spring"
                              src={Spring}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="mysql">
                            <img className="My_Skill" alt="Mysql" src={Mysql} />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="Github">
                            <img
                              className="My_Skill"
                              alt="github"
                              src={Github}
                            />
                          </span>
                        </Tilt>
                      </li>

                      <li>
                        <Tilt scale={1.2} transitionSpeed={2500}>
                          <span data-tooltip="down 100" aria-label="Cloud">
                            <img className="My_Skill" alt="Cloud" src={Cloud} />
                          </span>
                        </Tilt>
                      </li>
                    </ul>
                  </Flip>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Skills;
