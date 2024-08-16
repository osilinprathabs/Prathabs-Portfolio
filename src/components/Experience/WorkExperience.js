import React, { Component } from "react";
import "./WorkExperience.css";
import Fade from "react-reveal/Fade";
import Coding from "../../assets/images/experience-page/coding.png";
import dc from "../../assets/images/experience-page/dc.png";
import lk from "../../assets/images/experience-page/lk.png";

export class WorkExperience extends Component {
  render() {
    return (
      <div id="experiences">
        <Fade left>
          <div>
            <div className="exp-Bg">Work Experience</div>
            <h2 className="exp-Fr">Work Experience</h2>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="work-exp">
            <ul className="work-exp-list">
              <li>
                <div className="exp">
                  <img src={dc} className="exp__image" alt="" />
                  <div className="exp__overlay">
                    <div className="exp__header">
                      <svg
                        className="exp__arc"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path />
                      </svg>
                      <img
                        alt="developer"
                        className="exp__thumb"
                        width="60px"
                        src={Coding}
                      />
                      <div className="exp__header-text">
                        <h3 className="exp__title">Digital Cloudies</h3>
                        <span className="exp__status">
                          Full Stack Developer
                          <br />
                          April 1, 2024 - Current
                        </span>
                      </div>
                    </div>
                    <p className="exp__description">
                      Gained critical expertise and hands-on experience in
                      translating theoretical principles into practical
                      solutions for real-world issues.
                    </p>
                  </div>
                </div>
              </li>

              {/* New Experience Section */}
              <li>
                <div className="exp">
                  <img src={lk} className="exp__image" alt="" />
                  <div className="exp__overlay">
                    <div className="exp__header">
                      <svg
                        className="exp__arc"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path />
                      </svg>
                      <img
                        alt="developer"
                        className="exp__thumb"
                        width="60px"
                        src={Coding}
                      />
                      <div className="exp__header-text">
                        <h3 className="exp__title">Leskode </h3>
                        <span className="exp__status">
                          Associate Software Engineer
                          <br />
                          August 1, 2024 - Current In Zoho Expertise
                        </span>
                      </div>
                    </div>
                    <p className="exp__description">
                      My expertise in Zoho products centers around Zoho CRM,
                      Zoho Creator, and Zoho Books. Zoho CRM streamlines
                      business operations through cloud-based customer r
                      elationship management, while Zoho Creator empowers users
                      to build custom business apps with minimal technical
                      knowledge. Zoho Books enhances business security b y
                      safeguarding company bills, invoices, and financial
                      statements.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    );
  }
}

export default WorkExperience;
