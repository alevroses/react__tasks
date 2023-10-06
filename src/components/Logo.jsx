import React from "react";
import LogoFCC from "../images/freecodecamp-logo.png";
import "../stylesheets/Logo.css";

function Logo() {
  return (
    <figure className="figure">
      <img
        className="figure__logo"
        src={LogoFCC}
        alt="Logo"
      />
    </figure>
  );
}

export { Logo };
