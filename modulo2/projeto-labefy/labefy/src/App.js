import React from "react";
import axios from "axios";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
import InfoPlaylists from "./components/InfoPlaylists"

class App extends React.Component {
  state = {
    telaAtual: "home",
    clicarInfoUrl: "",
  }

  // irParaInfoPlaylist = (url) => {
  //   this.setState({telaAtual: "info", clicarInfoUrl: url)
  // }

  voltarParaLista = () => {
    this.setState({telaAtual: "playlist", clicarInfoUrl: ""})

  }

  escolherTela = (() => {
    switch (this.state.telaAtual) {
      case "home":
        return <Home/>
      case "playlist":
        return <Playlists irParaInfoPlaylist={this.irParaInfoPlaylist}/>
      case "info":
        return <InfoPlaylists voltarParaLista={this}url={this.state.clicarInfoUrl}/>
      default:
        return <Home/>
    }
  })

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <div>
        <h1>Labefy</h1>
        <button onClick={() => this.mudaTela("home")}>HOME</button>
        <button onClick={() => this.mudaTela("playlist")}>CRIE SUA PLAYLIST</button>
        {this.escolherTela()}
      </div>

    )
  }
}

export default App;


