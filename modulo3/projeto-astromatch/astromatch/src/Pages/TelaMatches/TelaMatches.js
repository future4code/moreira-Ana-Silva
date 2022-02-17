import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {ImgNome, ImgVoltar, BotaoVoltar, ContainerGeral, Posicao, CabecalhoCard, DivGeral, BotaoDeletar, ListaEstilo} from "./styled"
import { BASE_URL } from '../../Constants/Url'
import { Tooltip } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemAvatar } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
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
            <ListaEstilo key={mat.id}>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar src={mat.photo} alt="Imagem do Match"/>
                    </ListItemAvatar>
                    <ListItemText primary={mat.name}/>
                </ListItem>
                <Divider variant="inset"/>
            </ListaEstilo>
        )
    });

    return (
        <DivGeral>
            <Posicao>
            <ContainerGeral>
            <CabecalhoCard>
                <div>
                <ImgNome src={NomeLogo} alt="Nome Logomarca"/>
                </div>
                <div>
                <Tooltip title="Tela Inicial" disableInteractive>
                    <BotaoVoltar onClick={props.irParaInicial}>
                        <ImgVoltar src={Voltar} alt="Ícone Voltar"/>
                    </BotaoVoltar>
                </Tooltip>
                </div>
            </CabecalhoCard>

            {listaDeMatches}
            </ContainerGeral>
            </Posicao>

            <div>
                <BotaoDeletar onClick={() => {
                    if (window.confirm(`Você tem certeza que deseja deletar seus matches?`)) { return limparMatches() }
                }}>Limpar swipes e matches</BotaoDeletar>
            </div>

        </DivGeral>
    );
}

export default TelaMatches;