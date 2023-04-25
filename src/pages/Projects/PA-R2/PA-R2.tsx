import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Conleft from "./Contentleft";

function PAR2() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="container-left">
            <Conleft />
          </Col>
          <Col lg={6} className="container-right overflow-auto">
            Right
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PAR2;
