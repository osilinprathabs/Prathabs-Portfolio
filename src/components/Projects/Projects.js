import React, { Component } from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import GitHub from "../../assets/images/project-page/github.png";
import Web from "../../assets/images/project-page/website.png";
import JS from "../../assets/images/project-page/js.png";
import FD from "../../assets/images/project-page/fd.png";
import RC from "../../assets/images/project-page/rc.png";

export class Projects extends Component {
  render() {
    return (
      <>
        <div id="projects">
          <Fade left>
            <div>
              <h2 className="projectbg">Projects</h2>
              <div className="projectfr">Projects</div>
            </div>
          </Fade>

          <Fade bottom cascade>
            <section id="main">
              <div class="container_proj">
                <div className="card">
                  <div className="imgBx">
                    <img src={JS} alt="" />
                  </div>
                  <div className="content">
                    <div className="contentBx">
                      <h3 className="text-black">
                        js <br />
                        <span>
                          (React Js, JavaScript, CSS)
                          <br />
                          Its a Website Built with JavaScript
                        </span>
                      </h3>
                    </div>
                    <ul className="sci">
                      <li>
                        <a
                          rel="noreferrer"
                          href="https://github.com/osilinprathabs"
                          target="_blank"
                        >
                          <img
                            alt="github"
                            width="45px"
                            height="45px"
                            src={GitHub}
                          />
                        </a>
                      </li>
                      <li className="web">
                        <a
                          rel="noreferrer"
                          href="https://osilinprathabs.github.io/AutomobileServiceCenter.github.io/"
                          target="_blank"
                        >
                          <img alt="web" width="45px" height="45px" src={Web} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card">
                  <div className="imgBx">
                    <img src={FD} alt="" />
                  </div>
                  <div className="content">
                    <div className="contentBx">
                      <h3 className="text-black">
                        FD <br />
                        <span>
                          (React.js, HTML, CSS, JavaScript)
                          <br />
                          Its Contains a Complete Front End Development Project
                        </span>
                      </h3>
                    </div>
                    <ul className="sci">
                      <li>
                        <a
                          rel="noreferrer"
                          href="https://github.com/osilinprathabs/front-end-development.op"
                          target="_blank"
                        >
                          <img
                            alt="github"
                            width="45px"
                            height="45px"
                            src={GitHub}
                          />
                        </a>
                      </li>
                      <li className="web">
                        <a
                          rel="noreferrer"
                          href="https://github.com/osilinprathabs"
                          target="_blank"
                        >
                          <img alt="web" width="45px" height="45px" src={Web} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card">
                  <div className="imgBx">
                    <img src={RC} alt="" />
                  </div>
                  <div className="content">
                    <div className="contentBx">
                      <h3 className="text-black">
                        React & CSS <br />
                        <span>
                          (React.Js, JavaScript)
                          <br /> using React and CSS
                        </span>
                      </h3>
                    </div>
                    <ul className="sci">
                      <li>
                        <a
                          rel="noreferrer"
                          href="https://github.com/osilinprathabs"
                          target="_blank"
                        >
                          <img
                            alt="github"
                            width="45px"
                            height="45px"
                            src={GitHub}
                          />
                        </a>
                      </li>
                      <li className="web">
                        <a
                          rel="noreferrer"
                          href="https://osilinprathabs.github.io/AutomobileServiceCenter.github.io/</li>"
                          target="_blank"
                        >
                          <img alt="web" width="45px" height="45px" src={Web} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Fade>
        </div>

        <Fade bottom>
          <div className="btn_center">
            <a href="https://github.com/osilinprathabs" target="blank">
              <div className="btn" style={{ color: "white" }}>
                More Projects
                <div className="btn2"></div>
              </div>
            </a>
          </div>
        </Fade>
      </>
    );
  }
}

export default Projects;
