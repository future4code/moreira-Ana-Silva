import axios from "axios";
import React from "react";

class InfoPlaylists extends React.Component {
    state = {
        infoPlaylist: {}
    }

    componentDidMount(){
        this.pegarInfoPlaylist()
    }

    pegarInfoPlaylist = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        
        axios.get(url)
        .then ((response) => {
            this.setState({infoPlaylist: response.data})
        })

        .catch ((error) => {
        })
    })

    render() {

        return (
            <div>
                {/* <p>Artista: {this.state.infoPlaylist.artist}</p>
                <p>Músicas: {}</p>
                <button onClick={this.props.}>Voltar para Playlists</button> */}
            </div>
        )
    }
}

export default InfoPlaylists;


