import React from "react";
import { Link } from "react-router-dom";
import gif from "../home/DEUt.gif";
import { Header } from "../shared/Header";
import "./styles/pokemon404.css";

const Pokemon404 = () => {
  return (
    <>
      <Header />
      <div className="container__error">
        <div className="error-title">
          <Link className="error-title-link" to="/pokedex">
            Return to Pokedex
          </Link>
        </div>
        <div className="error__img">
          <img src={gif} alt="" />
        </div>
      </div>
    </>
  );
};

export default Pokemon404;
