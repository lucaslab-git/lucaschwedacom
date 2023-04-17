import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../images/avatar.jpg";
import Name from "./Name";

const App = () => {
  typeof window !== "undefined";
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    typeof window !== "undefined";
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
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
    );
  }
  return (
    <>
      <div className="btnbox-sm">
        <button type="button" className="btn sm">
          Click Me
        </button>
        <button type="button" className="btn sm">
          Click Me
        </button>
        <button type="button" className="btn sm">
          Click Me
        </button>
        <button type="button" className="btn sm">
          Click Me
        </button>
        <button type="button" className="btn sm">
          Click Me
        </button>
        <button type="button" className="btn sm">
          Click Me
        </button>
      </div>
      <div className="hdproj">
        <h1>
          <u>Projekte</u>
        </h1>
      </div>
    </>
  );
};

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
      <App></App>
    </>
  );
}
export default AboutMe;
