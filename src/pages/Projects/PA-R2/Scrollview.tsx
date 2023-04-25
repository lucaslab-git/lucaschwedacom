import * as React from "react";
import openrocket from "./images/openrocket.png";
import suche from "./images/suche.png";
import { Col, Container, Row } from "react-bootstrap";

function Scrollview() {
  const txtplanung = `Alles fängt an mit einem Plan, so auch meine Rakete. 
    In der Planung einer Rakete müssen viele Faktoren berücksichtigt werden, wie z.B.: Flugstabilität, Wahl des Antriebs, Große des Fallschirms bis hin zur Materialstärke und Beschaffenheit.  
    Aber auch andere Bauteile wie eine Kamera oder eine Batterie dürfen nicht vernachlässigt werden. 
    Die Planungszeit der Rakete PA-R2 beträgt ca. 200 Stunden. `;

  const txtstart = `Nach der langen Planungsphase kommt der Start einer Rakete. Bei dem wohl spannendsten Teil des Startes, dem sogenannten "Liftoff", spielen viele äußere Faktoren wie Wind, Licht, etc. eine große Rolle.
  Der Start der Rakete PA-R2 fand bei etwas starkem Seitenwind statt. Das Video zum Start gibt's hier.  `;

  const txtsuche = `Die Suche der Rakete darf nicht unterschätzt werden. Je nach Größe und Steighöhe der Rakete wird es schwerer oder leichter die Rakete zu finden. 
  Die Rakete PA-R2 hat sich bei dem Fallschirmaustritt in 2 Teile geteilt. Das eine Teil flog samt Kamera aus 200 M Höhe in ein Maisfeld. Der Fallschirm flog weitere 1,5 Km in Windrichtung. Nach 10 Stunden Suche wurden alle Teile bis auf die Kamera geborgen.`;

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Planung</h2>
            <p>{txtplanung}</p>
          </Col>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <img src={openrocket} className="img-right"></img>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <iframe
              className="img-left"
              width="100%"
              height="30vh"
              src="https://www.youtube.com/embed/yrYwAjQZZkk"
            ></iframe>
          </Col>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Start</h2>
            <p>{txtstart}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="container-scrollview">
            <br></br>
            <h2>Suche</h2>
            <p>{txtsuche}</p>
          </Col>
          <Col lg={6} className="container-scrollview overflow-auto">
            <br></br>
            <img src={suche} className="img-right"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Scrollview;
