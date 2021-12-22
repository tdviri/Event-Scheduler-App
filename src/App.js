import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import ScheduleEvent from "./ScheduleEvent";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ScheduleEvent" element={<ScheduleEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
