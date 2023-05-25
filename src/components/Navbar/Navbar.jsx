import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Navbar = () => {
  // console.log(window.location.href);
  const displayArrow = () => (
    <ArrowBackIosNewIcon
      style={{ color: "#fff", backgroundColor: "#4369b2" }}
    />
  );
  return (
    <nav className="navbar-container">
      {window.location.href !== "http://localhost:5173/" && displayArrow()}
      <MenuIcon style={{ color: "#fff", backgroundColor: "#4369b2" }} />
      <h1
        style={{
          color: "#fff",
          fontSize: 18,
          margin: "auto",
          alignSelf: "center",
          textAlign: "center",
          backgroundColor: "#4369b2",
        }}
      >
        meme galaxy
      </h1>
      <MicIcon
        style={{
          color: "#fff",
          marginLeft: "auto",
          backgroundColor: "#4369b2",
        }}
      />
      <SettingsIcon style={{ color: "#fff", backgroundColor: "#4369b2" }} />
    </nav>
  );
};

export default Navbar;
