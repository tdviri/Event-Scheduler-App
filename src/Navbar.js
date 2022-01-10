import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div
        className="links"
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "6vh",
          fontSize: "20px",
          fontColor: "white",
        }}
      >
        <a
          href="/Home"
          style={{
            justifyContent: "center",
            textAlign: "left",
            marginLeft: "35px",
          }}
        >
          Home
        </a>
        <a
          href="/Registration"
          style={{
            justifyContent: "center",
            marginLeft: "35px",
          }}
        >
          Registration
        </a>
        <a
          href="/ScheduleEvent"
          style={{
            justifyContent: "center",
            marginLeft: "35px",
          }}
        >
          Schedule Event
        </a>
        <a
          href="/Admin"
          style={{
            justifyContent: "center",
            marginLeft: "1000px",
          }}
        >
          Admin
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
