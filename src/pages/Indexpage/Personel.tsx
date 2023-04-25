import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../../images/Indexpage/Logo.png";
import Github from "../../images/Indexpage/Github.png";
import YT from "../../images/Indexpage/YT.png";
import Instagram from "../../images/Indexpage/Instagram.svg";
import Typewriter from "typewriter-effect";

import "../Indexpage/Personel.css";

function AboutMe() {
  const txtaboutme = `Als ich 2015 mein erstes Progeamm auf dem Einplatienencomputer RPI3B+ 
  geschrieben haben, hält mich die faszination der Technology fest. 
  In den letzten 8 Jahren habe ich vielzählige Projekte selbst entwickelt 
  und oder betreut. `;

  const txtlucaslab = `
Als ich 2015 mein erstes Progeamm auf dem Einplatienencomputer RPI3B+ 
geschrieben haben, hält mich die faszination der Technology fest. 
In den letzten 8 Jahren habe ich vielzählige Projekte selbst entwickelt 
und oder betreut. Dabei hält sich meine Wlet nicht in Grenzen der Software 
auf, sondern auch in der Hardware bzw. `;

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
                  strings: ["Entwickler", "Coder"],
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
            </a>

            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
            </a>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
            </a>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
            </a>
            <a
              type="button"
              className="btn"
              href="https://github.com/lucaslab-git"
            >
              <img src={Github} className="ico"></img>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutMe;
