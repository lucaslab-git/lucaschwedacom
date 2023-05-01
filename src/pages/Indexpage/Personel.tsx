import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../../images/Indexpage/Logo.png";
import Github from "../../images/Indexpage/Github.png";
import Youtube from "../../images/Indexpage/Youtube.png";
import Instagram from "../../images/Indexpage/Instagram.png";
import Typewriter from "typewriter-effect";

import "../Indexpage/Personel.css";

function AboutMe() {
  const txtaboutme = `Seit ich 2015 mit dem Programmieren begonnen habe, habe ich unzählige Projekte umgesetzt.
  Die meisten Projekte lösen alltägliche Probleme wie den Bau einer Monitorhalterung usw.
  Ich realisiere aber auch größere Projekte wie meine selbstgebaute Rakete usw.`;

  const txtlucaslab = `
  Seit ich 2015 mit dem Programmieren begonnen habe, habe ich unzählige Projekte umgesetzt.
  Die meisten Projekte lösen alltägliche Probleme wie den Bau einer Monitorhalterung usw. 
  Ich realisiere aber auch größere Projekte wie meine selbstgebaute Rakete usw.`;

  return (
    <>
      <div className="Comment_Icon">
        <img src={avatar} className="Student_Icon"></img>

        <div className="Comments">
          <div className="aboutme">
            Hi, ich bin Luca Schweda
            <div className="contrast-col">
              <Typewriter
                options={{
                  strings: ["Entwickler", "Coder", "und vieles mehr"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="txt-aboutme">
        <h3 className="contrast-col">About Me</h3>
        <p>{txtaboutme}</p>
        <br />
        <h3 className="contrast-col">Lucas Lab</h3>
        <p>{txtlucaslab}</p>
      </div>

      <Container className="cont-btn">
        <Row className="Row">
          <Col>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
              <p className="txtico">Github</p>
            </a>

            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Youtube} className="ico"></img>
              <p className="txtico">YT</p>
            </a>
            <a
              type="button"
              className="btn"
              href="https://www.instagram.com/lucaschweda/"
            >
              <img src={Instagram} className="ico"></img>
              <p className="txtico">Insta</p>
            </a>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
              <p className="txtico">Github</p>
            </a>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
              <p className="txtico">Github</p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutMe;
