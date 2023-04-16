import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../images/avatar.jpg";
import Name from "./Name";

function AboutMe() {
  const txtaboutme = `Als ich 2015 mein erstes Progeamm auf dem Einplatienencomputer RPI3B
    geschrieben haben, hält mich die faszination der Technology fest. 
    In den letzten 8 Jahren habe ich vielzählige Projekte selbst entwickelt 
    und oder betreut. Dabei hält sich meine Wlet nicht in Grenzen der Software 
    auf, sondern auch in der Hardware bzw. tatsächlichen Umsetzung. 
    Mit diversen Projekten wie z.B. einer eigensgebauten Rakete musste ich schon 
    viele Hurden und Aufgaben auf mich nehmen.`;

  const txtlucaslab = `
  Als ich 2015 mein erstes Progeamm auf dem Einplatienencomputer RPI3B+ 
  geschrieben haben, hält mich die faszination der Technology fest. 
  In den letzten 8 Jahren habe ich vielzählige Projekte selbst entwickelt 
  und oder betreut. Dabei hält sich meine Wlet nicht in Grenzen der Software 
  auf, sondern auch in der Hardware bzw. tatsächlichen Umsetzung. 
  Mit diversen Projekten wie z.B. einer eigensgebauten Rakete musste ich schon 
  viele Hurden und Aufgaben auf mich nehmen.`;
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

      <div className="btnbox">
        <button type="button" className="btn">
          Click Me
        </button>
        <button type="button" className="btn">
          Click Me
        </button>
        <button type="button" className="btn">
          Click Me
        </button>
        <button type="button" className="btn">
          Click Me
        </button>
        <button type="button" className="btn">
          Click Me
        </button>
        <button type="button" className="btn">
          Click Me
        </button>
      </div>
    </>
  );
}
export default AboutMe;
