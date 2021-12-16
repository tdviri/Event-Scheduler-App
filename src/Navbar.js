const Navbar = () => {
  return (
    <nav>
      <div
        className="gridContainer"
        style={{
          backgroundColor: "gray",
          textAlign: "left",
          width: "100vw",
          height: "7vh",
          gridTemplateColumns: "repeat(4, 100px)",
          gridGapColumns: "80px",
          alignContent: "center",
        }}
      >
        <a href="/" style={{ marginLeft: "50px" }}>
          Home
        </a>
        <a href="/">Registration</a>
        <a href="/">Schedule Event</a>
        <a href="/" style={{ alignSelf: "right" }}>
          Admin
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
