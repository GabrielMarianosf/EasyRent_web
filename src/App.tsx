import React from "react";
import "./App.scss";
import Nav from "./Components/nav/nav";
import Footer from "./Components/footer/footer";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="section-main">
        <div className="section-conteudo">
          <img
            src={logo}
            style={{ width: 300, marginBottom: 20 }}
            className="App-logo"
            alt="logo"
          />
          <p
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            Seu aluguel gerenciado como nunca
          </p>
        </div>
        <div className="section-form">
          <p style={{ marginBottom: 10 }}>Cadastro rápido e simples !</p>
          <div style={{ marginBottom: 10 }}>
            <input style={{ width: 10 }} type={"radio"} name="tipoPessoa" />{" "}
            Pessoa Física
            <input
              style={{ width: 10, marginLeft: 50 }}
              type={"radio"}
              name="tipoPessoa"
            />{" "}
            Pessoa Jurídica
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <input
              style={{ marginBottom: 10 }}
              type={"text"}
              placeholder="CPF / CNPJ"
            />
            <input
              style={{ marginBottom: 10 }}
              type={"text"}
              placeholder="Nome Completo / Razão Social"
            />
            <input
              style={{ width: 400, marginBottom: 10 }}
              type={"text"}
              placeholder="Email"
            />
            <input
              style={{ marginBottom: 10 }}
              type={"text"}
              placeholder="Telefone Comercial"
            />
            <input
              style={{ marginBottom: 10 }}
              type={"password"}
              placeholder="Senha"
            />
            <input
              style={{ marginBottom: 10 }}
              type={"password"}
              placeholder="Confirme a Senha"
            />
          </div>
          <p style={{ fontSize: 12, marginBottom: 10 }}>
            Ao se cadastrar, você concorda com nossos
            <a href="">Termos e Serviço</a>.
          </p>
          <div>
            <button className="button-primary">Cadastrar-se</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
