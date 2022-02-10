import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../Constants/Url';
import NomeLogo from '../../Assets/nome.png'
import Voltar from '../../Assets/voltar.png'

function TelaMatches(props) {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        pegarMatches()
    }, []);

    const pegarMatches = (() => {
        const header = {
            headers: {}
        };

        axios.get(`${BASE_URL}/matches`, header)

            .then((response) => {
                setMatches(response.data.matches);
            })

            .catch((error) => {
                alert(`Ocorreu um erro, Tente novamente! 
${error.response.data}`)
            })
    })

    const limparMatches = (() => {
        const header = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios.put(`${BASE_URL}/clear`, header)

            .then((response) => {
                alert('Os matches foram deletados!')
                pegarMatches()
            })

            .catch((error) => {
                alert(`Ocorreu um erro, Tente novamente! 
${error.response.data}`)
            })
    })
    const listaDeMatches = matches.map((mat) => {
        return (
            <div key={mat.id}>
                <h4>{mat.name}</h4>
                <img src={mat.photo} alt="Imagem do Match" />
            </div>
        )
    });

    return (
        <div>

            <div>
                <img src={NomeLogo} alt="Nome Logomarca" />
                <button onClick={props.irParaInicial}><img src={Voltar} alt="Ícone Voltar" /></button>
            </div>

            <div>
                <button onClick={() => {
                    if (window.confirm(`Você tem certeza que deseja deletar seus matches?`)) { return limparMatches() }
                }}>Limpar swipes e matches</button>
            </div>

            {listaDeMatches}
        </div>
    );
}

export default TelaMatches;