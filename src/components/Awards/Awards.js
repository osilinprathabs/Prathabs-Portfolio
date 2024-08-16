import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Fade from "react-reveal/Fade";
import "./Awards.css";
import htmlcss from "../../assets/images/awards-page/htmlcss.png";
import java from "../../assets/images/awards-page/java.png";
import Web from "../../assets/images/awards-page/web.png";

class Awards extends Component {
  static get CARD_STYLE() {
    return {
      textAlign: "center",
      background: "#404040",
      color: "#FFF",
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "bold",
      letterSpacing: "0.05rem",
      fontSize: "15px",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <div id="awards">
        {" "}
        <Fade left>
          <div>
            <h2 className="awadsBg">Awards</h2>
            <div className="awadsFg">Awards</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="awards">
            <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="WinHacks" src={htmlcss} />
                Accomplished a Certified Course in udemy on HTML5 and CSS3
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="Java" src={java} />
                Accomplished a Certified Course in udemy on Java Programming
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="MLSA" src={Web} />
                Accomplished a Certified Course in udemy on Web Development
              </div>
            </ReactCardCarousel>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Awards;
