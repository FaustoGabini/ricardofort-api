import React from "react";
import logo from "../../logo.jpg";
import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="logo" width="300px" />
      <h1 className="title">Ricardo Fort API</h1>
      <p className="description">
        RicardoFortAPI es una API JSON gratuita para frases
        de Ricardo Fort seleccionados a mano.
      </p>
    </div>
  );
};

export default Header;
