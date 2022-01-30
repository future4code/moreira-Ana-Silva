import axios from "axios";
import React from "react";
import styled from "styled-components";
import Deletar from "./img/x.png"

const Container = styled.div`
    margin: 30px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: white;
`
const AdicionarStyle = styled.div`
    padding: 30px;
    background-color: black;
    display: flex;
    align-items: center;
    gap: 20px;
`
const BotaoCriar = styled.button`
  color: black;
  background-color: #F37A05;
  border: solid 2px #F37A05 ;
  height: 35px;
  width: 120px;
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

const InputStyle = styled.input`
    color: white;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1px solid #FF7D00;
    width: 390px;

&:hover {
    color: white;
}

&:focus {
    outline: none;
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
const BotoesDetalhe = styled.div`
  color: white;
  border-radius: 5px;
  border: solid 1px white;
  height: 10px;
  width: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;

  &:hover {
        cursor: pointer;
        border-color: #FF7D00;
        background-color: #F37A05;
        color: black;
    }
`

const CardPlaylist = styled.div`
    color: white;
    border-bottom: 1px solid #FF7D00;
    background-color: black;
    text-decoration: white;
    border-radius: 4px;
    padding: 20px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;

    &:hover {
        box-shadow: 10px 0px 60px black;
    }

`
const TextoStyle = styled.h2`
    color: white;
`

class Playlists extends React.Component {
    state = {
        criar: "",
        playlists: [],
    };

    inputEnter = (event) => {
        if (event.key === 'Enter') {
            this.criarPlaylist();
        };
    };

    inputCriar = (e) => {
        this.setState({ criar: e.target.value })
    }

    componentDidMount() {
        this.pegarPlaylist();
    }


    criarPlaylist = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.criar,
        }

        axios.post(url, body, { headers: { Authorization: "karine-silva-vaughan" } })
            .then((response) => {
                alert("Playlist criada com sucesso!");
                this.setState({ criar: "" });
                this.pegarPlaylist()
            })

            .catch((error) => {
                alert(`Erro ao criar playlist, tente novamente! 
${error.response.data.message}`)
            })
    })

    pegarPlaylist = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, { headers: { Authorization: "karine-silva-vaughan" } })
            .then((response) => {
                this.setState({ playlists: response.data.result.list });
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    })


    deletarPlaylist = (id) => {
        if (window.confirm("Deseja mesmo deletar a playlist?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

            axios.delete(url, {
                headers: { Authorization: "karine-silva-vaughan" }
            })

                .then((response) => {
                    alert("Playlist deletada com sucesso!");
                    this.pegarPlaylist()
                })
                .catch((error) => {
                    alert("Erro ao deletar a playlist, tente novamente!")
                })
        }
    }

    render() {
        const listaPlaylists = this.state.playlists.map((lista) => {
            return (
                <CardPlaylist key={lista.id}>
                    <div >
                        <BotoesDetalhe onClick={() => this.props.irParaInfoPlaylist(lista.id)}>Detalhes</BotoesDetalhe>
                    </div>
                    {lista.name}
                    <BotaoDeletar onClick={() => this.deletarPlaylist(lista.id)}><ImgDeletar src={Deletar} alt="Deletar Playlist"/></BotaoDeletar>
                </CardPlaylist>
            )
        })

        return (
            <Container>

                <TextoStyle>PLAYLISTS</TextoStyle>

                <AdicionarStyle>
                    <InputStyle
                        placeholder="Nome da Nova Playlist"
                        value={this.state.criar}
                        onChange={this.inputCriar}
                        onKeyPress={this.inputEnter}
                    />
                    <BotaoCriar onClick={this.criarPlaylist}>Criar Playlist</BotaoCriar>
                </AdicionarStyle>

                {listaPlaylists}

            </Container>
        )
    }
}

export default Playlists;