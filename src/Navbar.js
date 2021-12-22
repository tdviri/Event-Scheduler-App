import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div
        className="links"
        style={{
          position: "relative",
          backgroundColor: "gray",
          textAlign: "left",
          width: "100vw",
          height: "7vh",
        }}
      >
        <a
          href="/Home"
          style={{
            position: "absolute",
            left: "30px",
            fontSize: "20px",
          }}
        >
          Home
        </a>
        <a
          href="/Registration"
          style={{ position: "absolute", left: "120px", fontSize: "20px" }}
        >
          Registration
        </a>
        <a
          href="/ScheduleEvent"
          style={{ position: "absolute", left: "270px", fontSize: "20px" }}
        >
          Schedule Event
        </a>
        <a
          href="/"
          style={{
            position: "absolute",
            right: "40px",
            fontSize: "20px",
          }}
        >
          Admin
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
