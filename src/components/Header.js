import React from "react";
import { Link } from "react-router-dom";
const Header = ({Logo}) => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/connect">ConnectDconnect</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};
export default Header;
