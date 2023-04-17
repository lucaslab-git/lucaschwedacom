import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Impressum() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="container-left">
            left
          </Col>
          <Col lg={6} className="container-right overflow-auto">
            Right
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Impressum;
