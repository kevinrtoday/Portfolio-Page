import "./topbar.scss";
import { PhoneInTalk, Email } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            #kevinrtoday{" "}
          </a>
          <div className="itemContainer">
            <PhoneInTalk className="icon" />
            <span> +1 786-873-9216</span>
          </div>

          <div className="itemContainer">
            <Email className="icon" />
            <span>kevinrtoday@pm.me</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"> </span>
            <span className="line2"> </span>
            <span className="line3"> </span>
          </div>
        </div>
      </div>
    </div>
  );
}
