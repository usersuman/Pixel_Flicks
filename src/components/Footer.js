import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <main>
      <div className="header">
        <span className="footer__span">
          Made by {" "}
          <a href="https://github.com/usersuman">Suman Das</a>
        </span>
        <span className="footer__span">
          feel free to connect <a>sumands275@gmail.com</a>
        </span>
      </div>
    </main>
  );
};

export default Footer;
