import React from "react";
import comandanteGif from "../../ricardofort.gif";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="gif" src={comandanteGif} alt="logo" />
      <a
        href="https://twitter.com/FaustoGabini"
        className="twitterLink"
        target="_blank"
      >
        @FaustoGabini
      </a>
      <a
        href="https://github.com/FaustoGabini/ricardofort-api"
        target="_blank"
      >
        <img src="https://img.shields.io/github/stars/FaustoGabini/ricardofort-api?style=social" />
      </a>
    </div>
  );
};

export default Footer;
