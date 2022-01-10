import { React } from "react";

const MeetingInfo = () => {
  return (
    <div className="gridContainer">
      <div className="eventBorders">3:00 PM ET</div>
      <div className="eventBorders">
        <span>Technical Review and Logistics Meeting</span>
        <span>Location: Address</span>
      </div>
      <a href="/Registration">
        <button
          type="button"
          className="eventBorders"
          cursor="pointer"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Register
        </button>
      </a>
    </div>
  );
};

export default MeetingInfo;
