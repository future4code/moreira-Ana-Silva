import axios from "axios";
import React from "react";
import styled from "styled-components";
import Deletar from "./img/x.png"

const ContainerStyle = styled.div`
    margin: 30px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`
const AdicionarStyle = styled.div`
    padding: 30px;
    background-color: black;
    display: flex;
    align-items: center;
    gap: 20px;
`

const InputStyle1 = styled.input`
    color: white;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1px solid #FF7D00;
    width: 200px;

&:hover {
    color: white;
}

&:focus {
    outline: none;
}
`
const InputStyle2 = styled.input`
    color: white;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1px solid #FF7D00;
    width: 200px;

&:hover {
    color: white;
}

&:focus {
    outline: none;
}

`
const InputStyle3 = styled.input`
    color: white;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1px solid #FF7D00;
    width: 450px;

&:hover {
    color: white;
}

&:focus {
    outline: none;
}
`
const BotaoCriar = styled.button`
  color: black;
  background-color: #F37A05;
  border: solid 2px #F37A05 ;
  height: 35px;
  width: 160px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  &:hover {
        cursor: pointer;
        background-color: #DF9700;
        border-color: #DF9700;
        color: black;
    }
`

const BotaoVoltar = styled.button`
  color: black;
  background-color: #F37A05;
  border: solid 2px #F37A05 ;
  height: 35px;
  width: 160px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  &:hover {
        cursor: pointer;
        background-color: #DF9700;
        border-color: #DF9700;
        color: black;
    }
`

const ImgDeletar = styled.img`
height: 15px;

&:hover {
    cursor: pointer;
    height: 20px;
}
`
const BotaoDeletar = styled.button`
    background-color: transparent;
    border-color: transparent;
`
const CardInfoMusica = styled.div`
color: white;
    border-bottom: 1px solid #FF7D00;
    background-color: black;
    text-decoration: white;
    border-radius: 4px;
    padding: 15px;
    width: 70%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
    color: #FF7D00;

    &:hover {
        box-shadow: 10px 0px 60px black;

    }
`

const CardMusica = styled.div`
    color: white;
    border-bottom: 1px solid #FF7D00;
    background-color: black;
    text-decoration: white;
    border-radius: 4px;
    padding: 15px;
    width: 70%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    font-size: 15px;

    &:hover {
        box-shadow: 10px 0px 60px black;

    }
`

class InfoPlaylists extends React.Component {
    state = {
        infoPlaylist: [],
        adicionaMusica: "",
        adicionaArtista: "",
        adicionaUrl: "",
    }

    inputEnter = (event) => {
        if (event.key === 'Enter') {
            this.adicionarMusicaPlaylist();
        };
    };

    inputAdicionaMusica = ((e) => {
        this.setState({ adicionaMusica: e.target.value })
    })

    inputAdicionaArtista = ((e) => {
        this.setState({ adicionaArtista: e.target.value })
    })

    inputAdicionaUrl = ((e) => {
        this.setState({ adicionaUrl: e.target.value })
    })

    componentDidMount() {
        this.pegarMusicaPlaylist()
    }

    adicionarMusicaPlaylist = (() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const body = {
            artist: this.state.adicionaArtista,
            name: this.state.adicionaMusica,
            url: this.state.adicionaUrl,
        }

        axios.post(url, body, { headers: { Authorization: "karine-silva-vaughan" } })
            .then((response) => {
                alert("Música adicionada com sucesso!")
                this.setState({ adicionaArtista: "", adicionaMusica: "", adicionaUrl: "" })
                this.pegarMusicaPlaylist()
            })
            .catch((error) => {
                alert(`Erro ao adicionar música, tente novamente! 
${error.response.data.message}`)
            })
    })

    pegarMusicaPlaylist = (() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        axios.get(url, { headers: { Authorization: "karine-silva-vaughan" } })
            .then((response) => {
                this.setState({ infoPlaylist: response.data.result.tracks })
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    })

    deletarMúsicaPlaylist = ((id) => {
        if (window.confirm("Deseja mesmo deletar essa música?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`

            axios.delete(url, { headers: { Authorization: "karine-silva-vaughan" } })
                .then((response) => {
                    alert("Música deletada com sucesso!");
                    this.pegarMusicaPlaylist()
                })
                .catch((error) => {
                    alert("Erro ao deletar a música, tente novamente!")
                })
        }
    })


    render() {
        const listaInfoPlaylists = this.state.infoPlaylist.map((musica) => {
            return (
                <CardMusica
                    key={musica.id}>
                    <p> {musica.name}</p>
                    <p> {musica.artist}</p>
                    <audio controls>
                        <source src={musica.url} />
                    </audio>
                    <a href={musica.url} />
                    <BotaoDeletar onClick={() => this.deletarMúsicaPlaylist(musica.id)}>
                        <ImgDeletar src={Deletar} alt="Deletar Playlist" /></BotaoDeletar>
                </CardMusica>
            )
        })
        return (
            <ContainerStyle>
                <h2>LISTA DE MÚSICAS</h2>
                <AdicionarStyle>
                    <InputStyle1
                        placeholder="Música"
                        value={this.state.adicionaMusica}
                        onChange={this.inputAdicionaMusica}
                        onKeyPress={this.inputEnter}
                    />
                    <InputStyle2
                        placeholder="Artista/Banda"
                        value={this.state.adicionaArtista}
                        onChange={this.inputAdicionaArtista}
                        onKeyPress={this.inputEnter}
                    />
                    <InputStyle3
                        placeholder="Url da Música"
                        value={this.state.adicionaUrl}
                        onChange={this.inputAdicionaUrl}
                        onKeyPress={this.inputEnter}
                    />
                    <BotaoCriar onClick={this.adicionarMusicaPlaylist}>Adicionar Música</BotaoCriar>
                </AdicionarStyle>

                <CardInfoMusica>
                    <p>Música</p>
                    <p>Artista/Banda</p>
                </CardInfoMusica>

                {listaInfoPlaylists}

                <div>
                    <BotaoVoltar onClick={() => this.props.irParaPlaylists("playlist")}>Voltar Para Playlists</BotaoVoltar>
                </div>

            </ContainerStyle>
        )
    }
}

export default InfoPlaylists;


