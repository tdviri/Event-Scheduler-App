import { React } from "react";

const MeetingInfo = () => {
  return (
    <div
      className="gridContainer"
      style={{
        position: "relative",
        height: "150px",
        width: "300px",
        backgroundColor: "black",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
      }}
    >
      <div className="eventBorders" style={{ gridArea: " 1 / 1 / 3 / 2" }}>
        3:00 PM ET
      </div>
      <div className="eventBorders" style={{ gridArea: "1 / 2 / 2 / 3" }}>
        <span>Technical Review and Logistics Meeting</span>
        <span>Location: Address</span>
      </div>
      <btn
        className="eventBorders"
        style={{
          gridArea: "2 / 1 / 3 / 2",
          position: "absolute",
          backgroundColor: "green",
          bottom: 0,
          width: "30%",
          height: "30%",
          textAlign: "center",
        }}
      >
        Register
      </btn>
    </div>
  );
};

export default MeetingInfo;
