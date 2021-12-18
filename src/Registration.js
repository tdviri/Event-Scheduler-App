import Navbar from "./Navbar";
import MeetingInfo from "./MeetingInfo";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          fontSize: "100px",
        }}
      >
        Registration
      </h1>
      <div
        className="gridContainer"
        style={{
          gridTemplateRows: "repeat(3, 100px)",
          gridRowGap: "150px",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <MeetingInfo />
        <MeetingInfo />
        <MeetingInfo />
      </div>
      <div
        id="registrationForm"
        style={{
          position: "relative",
          height: "70vh",
          width: "30vw",
          right: "50px",
          top: "100px",
        }}
      >
        <div style={{ position: "absolute", width: "100%", height: "20%" }}>
          Event Registration Form
        </div>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Registration;
