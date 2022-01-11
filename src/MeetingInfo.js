import { React } from "react";
import { Col, Row, Container } from "react-bootstrap";

const MeetingInfo = () => {
  return (
    <Container
      className="gridContainer"
      style={{
        width: "300px",
        position: "relative",
        justifyContent: "space-evenly",
      }}
    >
      <Col>
        <Row
          className="eventBorders"
          style={{ position: "absolute", marginTop: "20px" }}
        >
          3:00 PM ET
        </Row>
        <Row>
          <a href="/Registration">
            <button
              type="button"
              className="eventBorders"
              cursor="pointer"
              style={{
                position: "absolute",
                marginBottom: "0px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Register
            </button>
          </a>
        </Row>
      </Col>
      <Col
        className="eventBorders"
        style={{
          width: "200px",
          height: "100px",
          position: "absolute",
          marginTop: "20px",
        }}
      >
        <Row>
          <span>Technical Review and Logistics Meeting</span>
        </Row>
        <Row>
          <span>Location: Address</span>
        </Row>
      </Col>
    </Container>
  );
};

export default MeetingInfo;
