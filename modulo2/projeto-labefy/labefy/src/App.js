import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import InfoPlaylists from "./pages/InfoPlaylists"
import logo from "./assets/logo.png";

const AppStyle = styled.div`
  background-color: black;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`

const Logo = styled.img`
  width: 6rem;
`
const Logomarca = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const BotoesStyle = styled.div`
  color: #F37A05;
  border: solid 2px #F37A05 ;
  height: 20px;
  width: 120px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  font-size: 14px;

  &:hover {
        cursor: pointer;
        background-color: #F37A05;
        box-shadow: 8px 0px 20px #F37A05;
        color: black;
    }
`
const CorTitulo = styled.h1`
  color: #F37A05;
`

const AppHeader = styled.div`
  width: 84%;
  float: ledt;
  padding: 8px 8%;
  background: linear-gradient(0deg, rgba(10,5,1,1) 0%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px solid white;
`

class App extends React.Component {
  state = {
    telaAtual: "home",
    clicarInfoUrl: "",
  }

  irParaInfoPlaylist = (id) => {
    this.setState({telaAtual: "info", clicarInfoUrl: id})
  }

  irParaPlaylists = () => {
    this.setState({telaAtual: "playlist", clicarInfoUrl: ""})

  }

  escolherTela = (() => {
    switch (this.state.telaAtual) {
      case "home":
        return <Home irParaPlaylists={this.irParaPlaylists}/>
      case "playlist":
        return <Playlists irParaInfoPlaylist={this.irParaInfoPlaylist}/>
      case "info":
        return <InfoPlaylists irParaPlaylists={this.irParaPlaylists} id={this.state.clicarInfoUrl}/>
      default:
        return <Home/>
    }
  })

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (

      <AppStyle>
        <AppHeader>

        <Logomarca>
        <Logo src={logo} alt = "LogomarcaLabefy"/>
        <CorTitulo>Labefy</CorTitulo>
        </Logomarca>

        <div>
        <BotoesStyle onClick={() => this.mudaTela("home")}>HOME</BotoesStyle>
        </div>

        </AppHeader>

        {this.escolherTela()}
      </AppStyle>
    )
  }
}

export default App;


