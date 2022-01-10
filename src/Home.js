import "./App.css";
import { useState, useEffect } from "react";
import MeetingInfo from "./MeetingInfo";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col
          style={{
            fontSize: "80px",
            textAlign: "center",
            backgroundColor: "gray",
            width: "100vw",
          }}
        >
          Welcome
        </Col>
      </Row>
      <Row
        style={{
          fontSize: "35px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Upcoming Events
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
      </Row>
      <Row style={{ marginTop: "60px" }}>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
      </Row>
      <Row style={{ marginTop: "60px" }}>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
        <Col>
          <MeetingInfo />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
