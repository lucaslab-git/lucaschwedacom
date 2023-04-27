import * as React from "react";
import placeholder from "./images/placeholder.jpg";
import { Col, Container, Row } from "react-bootstrap";

function Scrollview() {
  const txtentstehung = `Entstehungsgeschichte `;

  const txtprinzip = `Spielprinzip`;

  const txtsonstiges = `Sonstiges`;

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Entstehung</h2>
            <p>{txtentstehung}</p>
          </Col>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <img src={placeholder} className="img-right"></img>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <iframe
              className="img-left"
              width="100%"
              height="30vh"
              src="https://www.youtube.com/embed/"
            ></iframe>
          </Col>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Spielprinzip</h2>
            <p>{txtprinzip}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Sonstiges</h2>
            <p>{txtsonstiges}</p>
          </Col>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <img src={placeholder} className="img-right"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Scrollview;
