import { LOGO } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
