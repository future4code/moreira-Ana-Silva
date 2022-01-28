import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid black;
    background-color: lavender;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
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

        axios.post(url, body, { headers: { Authorization: "ana-karine" } })
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

        axios.get(url, { headers: { Authorization: "ana-karine" } })
            .then((response) => {
                this.setState({ playlists: response.data.result.list});
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    })


    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers:{ Authorization: "ana-karine" }})

            .then((response) => {
                alert("Playlist deletada com sucesso!");
                this.pegarPlaylist()
            })
            .catch((error) => {
                alert("Erro ao deletar a playlist, tente novamente!")
            })
    }

    adicionaPlaylist = (() => {
        const playlistNova = [...this.state.playlists, this.state.criar]

    })

    render() {

        const listaPlaylists = this.state.playlists.map((lista) => {
            return ( 
            <CardUsuario key={lista.id}>{lista.name}
                <button onClick={() => this.deletarPlaylist(lista.id)}>Deletar</button>
            </CardUsuario>
            )
        })

        return (
            <div>
                <div>
                    <label>Criar Playlist</label>
                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.criar}
                        onChange={this.inputCriar}
                        onKeyPress={this.inputEnter}
                    />
                    <button onClick={this.criarPlaylist}>Criar</button>
                </div>

                <h2>PLAYLISTS</h2>
                {listaPlaylists}
            </div>
        )
    }
}

export default Playlists;