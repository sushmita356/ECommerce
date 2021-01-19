import React from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src={p1} rounded width='100px' height='100px'/>
          </Col>
          <Col>
            <Image src={p2} roundedCircle />
          </Col>
          <Col>
            <Image src={p1} thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
