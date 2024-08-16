import React, { Component } from "react";
import "./Education.css";
import Fade from "react-reveal/Fade";
import GradImg from "../../assets/images/education-section/graduation-cap.png";
import SchoolImg from "../../assets/images/education-section/school-backpack.png";

export class Education extends Component {
  render() {
    return (
      <div id="education">
        <Fade left>
          <div>
            <h2 className="podcastbg">Education</h2>
            <div className="podcastfr">Education</div>
          </div>
        </Fade>
        <div className="timeline">
          <Fade left>
            <div className="timeline-event timeline-event--type1">
              <div className="timeline-event-icon ">
                <img alt="Graduation" width="80px" src={GradImg} />
              </div>
              <div className="timeline-event-date">2020-2024</div>
              <div className="timeline-event-content ">
                <div className="timeline-event-title">Anna University</div>
                <div className="timeline-event-description">
                  <p>
                    BE - Mechanical Engineering, In Sri Shakthi Institute of
                    Engineering and Technology (2020-2024) <br />
                    Current CGPA: 8.33/10
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-event timeline-event--type2">
              <div className="timeline-event-icon">
                <img
                  alt="School"
                  width="70px"
                  className="SchoolImg"
                  src={SchoolImg}
                />
              </div>
              <div className="timeline-event-date">2019-2020</div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  THIYAGI N.G RAMASWAMY MEMORIAL HIGER SECONDARY SCHOOL
                </div>
                <div className="timeline-event-description">
                  <p>
                    12th
                    <br />
                    Score: 62%
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-event timeline-event--type3">
              <div className="timeline-event-icon">
                <img
                  alt="School"
                  width="70px"
                  className="SchoolImg"
                  src={SchoolImg}
                />
              </div>
              <div className="timeline-event-date">2018-2019</div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  THIYAGI N.G RAMASWAMY MEMORIAL HIGER SECONDARY SCHOOL
                </div>
                <div className="timeline-event-description">
                  <p>
                    10th
                    <br />
                    Score: 72
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Education;
