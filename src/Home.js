import "./App.css";
import { useState, useEffect } from "react";
import MeetingInfo from "./MeetingInfo";
function Home() {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
      </div>
      <h2>Upcoming Events</h2>
      <div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <MeetingInfo />
        </div>
      </div>
    </div>
  );
}

export default Home;
