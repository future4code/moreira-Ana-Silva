import React from "react";
import "./App.css";


class App extends React.Component {
  state = {
    mensagens: [
  ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };

adicionaMensagem = () => {
  const novaMensagem = {
    usuario: `${this.state.valorInputUsuario}`,
    mensagem: `${this.state.valorInputMensagem}`
  };
{
  const newMensagem = [...this.state.mensagens, novaMensagem];
  this.setState({ mensagens: newMensagem });
  this.setState({valorInputUsuario: ""});
  this.setState({valorInputMensagem: ""});
};
}

onChangeInputUsuario = (event) => {
  this.setState({ valorInputUsuario: event.target.value });
};

onChangeInputMensagem = (event) => {
  this.setState({ valorInputMensagem: event.target.value });
};

render() {
  const listaDeMensagem = this.state.mensagens.map((msg) => {
        return (
          <p className="lista-mensagem">
            {msg.usuario}: {msg.mensagem}
          </p>
        );
      });

 return (
      <div className="container">
        <h1 className="titulo">WhatsaLab</h1>
        <div>{listaDeMensagem}</div>
        <div className="input-botao">
          <input className="input1"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input className="input"
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaMensagem} className="botao">ENVIAR</button>
          </div>
          </div>
    );
  }
}

export default App;
