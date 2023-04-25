import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PA-R2.css";
import Information from "./Information";
import Scrollview from "./Scrollview";

function PAR2() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={4} className="container-left">
            <Information />
          </Col>
          <Col lg={8} className="container-right overflow-auto">
            <Scrollview />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PAR2;
