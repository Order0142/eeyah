import React from "react";
const Footer = ({ someText, someWords }) => {
  return <footer className="footer">
  <h1>{someWords}</h1>
  <a href="/">{someText} </a>
  </footer>;
};
export default Footer;
