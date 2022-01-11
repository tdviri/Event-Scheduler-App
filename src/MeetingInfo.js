import { React } from "react";

const MeetingInfo = () => {
  return (
    <div
      className="gridContainer"
      style={{
        width: "300px",
      }}
    >
      <div>
        <div className="eventBorders">3:00 PM ET</div>
        <div>
          <a href="/Registration">
            <button
              type="button"
              className="eventBorders"
              cursor="pointer"
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Register
            </button>
          </a>
        </div>
      </div>
      <div
        className="eventBorders"
        style={{
          width: "200px",
          height: "100px",
        }}
      >
        <div>
          <div>Technical Review and Logistics Meeting</div>
        </div>
        <div>
          <div>Location: Address</div>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;
