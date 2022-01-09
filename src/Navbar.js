import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="links">
        <a href="/Home">Home</a>
        <a href="/Registration">Registration</a>
        <a href="/ScheduleEvent">Schedule Event</a>
        <a href="/">Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;
