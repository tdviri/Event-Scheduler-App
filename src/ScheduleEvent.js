import { React } from "react";
import { MeetingInfo } from "./MeetingInfo";
import {
  Col,
  Row,
  Container,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

const ScheduleEvent = () => {
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
      <Row
        style={{
          width: "300px",
          alignContent: "right",
        }}
      >
        <Form
          style={{
            backgroundColor: "gray",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "60px",
            width: "40vw",
          }}
        >
          <h1
            style={{
              backgroundColor: "black",
              height: "10vh",
              width: "615px",
              alignText: "center",
              justifyContent: "center",
            }}
          >
            Registration Form
          </h1>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control
              style={{
                width: "20vw",
              }}
              type="lastName"
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>First Name</FormLabel>
            <Form.Control
              style={{
                width: "20vw",
              }}
              type="firstName"
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>Email Address</FormLabel>
            <Form.Control
              style={{
                width: "20vw",
              }}
              type="emailAddress"
              placeholder="Enter Email Address"
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>Select Event</FormLabel>
            <Form.Control
              style={{
                width: "20vw",
              }}
              type="selectEvent"
              placeholder="Select Event"
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>Phone Number (Optional)</FormLabel>
            <Form.Control
              style={{
                width: "20vw",
              }}
              type="phone"
              placeholder="Enter Phone Number"
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              justifyContent: "center",
            }}
          >
            Register
          </Button>{" "}
        </Form>
      </Row>
    </div>
  );
};

export default ScheduleEvent;
