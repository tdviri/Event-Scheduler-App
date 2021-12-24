import Navbar from "./Navbar";
import MeetingInfo from "./MeetingInfo";

const Registration = () => {
  return (
    <div>
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
          margin: "60px",
        }}
      >
        <MeetingInfo />
        <MeetingInfo />
        <MeetingInfo />
      </div>
      {/* <div
        id="registrationForm"
        className="gridContainer"
        style={{
          position: "relative",
          height: "70vh",
          width: "30vw",
          right: "50px",
          top: "100px",
        }}
      > */}
      <div>
        <div style={{ position: "absolute", width: "100%", height: "20%" }}>
          Event Registration Form
        </div>
        <form action="">
          <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
              ></input>

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
              ></input>

              <label for="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
              ></input>
            </hr>

            <p>By creating an account you agree to our Terms Privacy</p>
            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>

          <div class="container signin">
            <p>Already have an account? Sign in</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
