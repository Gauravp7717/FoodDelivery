import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [btnName, setName] = useState("Log-in");

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={LOGO}></img>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              // const btnFetch = "logout";
              btnName == "Log-in" ? setName("Logout") : setName("Log-in");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
