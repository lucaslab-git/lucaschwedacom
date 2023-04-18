import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../images/avatar.jpg";
import Github from "../images/Github.png";
import YT from "../images/YT.png";
import Instagram from "../images/Instagram.svg";
import Name from "./Name";

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
          <Name />
        </div>
      </div>

      <div className="txt-aboutme">
        <h3>About Me</h3>
        <p>{txtaboutme}</p>
        <br />
        <h3>Lucas Lab</h3>
        <p>{txtlucaslab}</p>
      </div>

      <Container className="cont-btn">
        <Row className="Row">
          <Col>
            <button type="button" className="btn">
              <img src={Github} className="ico"></img>
            </button>

            <button type="button" className="btn">
              <img src={YT} className="ico"></img>
            </button>

            <button type="button" className="btn">
              <img src={Instagram} className="ico"></img>
            </button>

            <button type="button" className="btn">
              <img src={YT} className="ico"></img>
            </button>

            <button type="button" className="btn">
              <img src={Instagram} className="ico"></img>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutMe;
