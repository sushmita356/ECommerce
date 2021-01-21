import React from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";

function Home() {
  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p2} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
        </Row>
        <br />
        <br />

        <Row>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p2} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="300px" />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Image src={p1} rounded width="200px" height="200px" />
          </Col>
          <Col>
            <Image src={p2} rounded width="200px" height="200px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="200px" />
          </Col>
          <Col>
            <Image src={p1} rounded width="200px" height="200px" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
