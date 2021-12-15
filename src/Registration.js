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
      <MeetingInfo />
    </div>
  );
};
