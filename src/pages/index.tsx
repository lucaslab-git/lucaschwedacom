import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import AboutMe from "./Indexpage/Personel";
import "../pages/Indexpage/App.css";
import Timeline from "../pages/Indexpage/timeline";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="container-left">
          <AboutMe />
        </Col>
        <Col lg={6} className="container-right overflow-auto">
          <Timeline />
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
