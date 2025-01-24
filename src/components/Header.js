import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setName] = useState("Log-in");
  const onlineStatus = useOnlineStatus();
  const cartitems = useSelector((store) => store.cart.items);
  // console.log(cartitems);

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={LOGO}></img>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus ? "💚" : "❤️"}</li>
          <li>
            <Link className="underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="underline" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="underline" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="underline" to="/cart">
              Cart ({cartitems.length})
            </Link>
          </li>
          <button
            className="log-btn"
            onClick={() => {
              // const btnFetch = "logout";
              btnName == "Log-in" ? setName("Logout") : setName("Log-in");
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
