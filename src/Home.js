import "./App.css";
import { useState, useEffect } from "react";
import MeetingInfo from "./MeetingInfo";
function Home() {
  return (
    <div>
      <div
        className="gridContainer"
        id="WelcomeBanner"
        style={{
          alignContent: "center",
          justifyContent: "center",
          height: "25vh",
          backgroundColor: "black",
          fontSize: "50px",
        }}
      >
        <h1>Welcome</h1>
      </div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
        }}
      >
        Upcoming Events
      </h2>
      <div
        className="gridContainer"
        id="Events"
        style={{
          gridTemplateColumns: "repeat(3, 100px)",
          gridTemplateRows: "repeat(3, 100px)",
          gridColumnGap: "300px",
          gridRowGap: "150px",
          justifyContent: "center",
        }}
      >
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
        <div className="eventMainBorder">
          <MeetingInfo />
        </div>
      </div>
    </div>
  );
}

export default Home;
