import Navbar from "./Navbar";
import MeetingInfo from "./MeetingInfo";
import {
  Col,
  Row,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";

const Registration = () => {
  return (
    <div>
      <Row
        style={{
          backgroundColor: "gray",
          height: "10vh",
          width: "100vw",
          justifyContent: "center",
          alignText: "center",
          fontSize: "40px",
        }}
      >
        Registration
      </Row>
      <Col style={{ marginTop: "60px" }}>
        <Row>
          <MeetingInfo />
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <MeetingInfo />
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <MeetingInfo />
        </Row>
      </Col>
      <Col
        style={{
          width: "300px",
          alignContent: "right",
        }}
      >
        <Form>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control type="lastName" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group>
            <FormLabel>First Name</FormLabel>
            <Form.Control type="firstName" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group>
            <FormLabel>Email Address</FormLabel>
            <Form.Control
              type="emailAddress"
              placeholder="Enter Email Address"
            />
          </Form.Group>

          <Form.Group>
            <FormLabel>Select Event</FormLabel>
            <Form.Control type="selectEvent" placeholder="Select Event" />
          </Form.Group>

          <Form.Group>
            <FormLabel>Phone Number (Optional)</FormLabel>
            <Form.Control type="phone" placeholder="Enter Phone Number" />
          </Form.Group>
        </Form>
      </Col>
    </div>
  );
};

export default Registration;
