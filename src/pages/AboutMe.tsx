import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../images/avatar.jpg";
import Name from "./Name";

const App = () => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );
  const breakpoint = 700;
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // add window resize event listener
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      // remove window resize event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
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
        <button type="button" className="btn sm"></button>
        <button type="button" className="btn sm"></button>
        <button type="button" className="btn sm"></button>
        <button type="button" className="btn sm"></button>
        <button type="button" className="btn sm"></button>
        <button type="button" className="btn sm"></button>
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
    und oder betreut. `;

  const txtlucaslab = `
  Als ich 2015 mein erstes Progeamm auf dem Einplatienencomputer RPI3B+ 
  geschrieben haben, hält mich die faszination der Technology fest. 
  In den letzten 8 Jahren habe ich vielzählige Projekte selbst entwickelt 
  und oder betreut. `;

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
