import React from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";

function nav() {
  return (
    <nav className="container-nav">
      <section className="logo">
        <img src={logo} className="img-logo" alt="logo" />
      </section>
      <section className="container-cad">
        <p style={{ marginRight: 20 }}>Já possui cadastro?</p>
        <button className="button-primary">Entrar</button>
      </section>
    </nav>
  );
}

export default nav;
