import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Url'
import { Posicao, ImgNome, ImgMatches, BotaoMatches, ImgCancelar, BotaoCancelar, CabecalhoCard,
ImgLike, BotaoLike, DivBotoes, ContainerCard, ContainerGeral } from "./styled";
import { Tooltip } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import NomeLogo from '../../Assets/nome.png'
import irMatches from '../../Assets/irMatches.png'
import Cancelar from '../../Assets/cancelar.png'
import Match from '../../Assets/like.png'

function TelaInicial(props) {

    const [perfil, setPerfil] = useState([]);

    useEffect(() => {
        pegarPerfil()
    }, []);

    const pegarPerfil = (() => {
        const header = {
            headers: {}
        };
        axios.get(`${BASE_URL}/person`, header)

            .then((response) => {
                setPerfil(response.data.profile);
            })

            .catch((error) => {
                alert(`Ocorreu um erro, Tente novamente! 
${error.response.data}`)
            })
    })


    const escolherPessoa = (() => {
        const header = {
            headers: { 'Content-Type': 'application/json' }
        };
        const body = {
            id: perfil.id,
            choice: true,
        }

        axios.post(`${BASE_URL}/choose-person`, body, header)

            .then((response) => {
                if (response.data.isMatch) {
                    alert(`Você deu match com ${perfil.name}!`)
                    pegarPerfil();
                }
            })

            .catch((error) => {
                alert(`Ocorreu um erro, Tente novamente! 
${error.response.data}`)
            })
    })

    return (
        <Posicao>
        <ContainerGeral>

            <CabecalhoCard>
                <div>
                <ImgNome src={NomeLogo} alt="Nome Logomarca" />
                </div>
                <div>
                <Tooltip title="Tela de Matches" disableInteractive>
                    <BotaoMatches onClick={props.irParaMatches}>
                        <ImgMatches src={irMatches} alt="Ícone ir para Matches" />
                    </BotaoMatches>
                </Tooltip>
                <Divider variant="inset" />
                </div>
            </CabecalhoCard>

            <ContainerCard >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            width="200"
                            image={perfil.photo}
                            alt="Foto de Perfil"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {perfil.name}, {perfil.age} anos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {perfil.bio}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
            </ContainerCard>

            <div>
            <DivBotoes>
                <Tooltip title="Não Dar Match" disableInteractive>
                    <BotaoCancelar onClick={pegarPerfil}><ImgCancelar src={Cancelar} alt="ícone de Cancelar" /></BotaoCancelar>
                </Tooltip>
                <Tooltip title="Dar Match" disableInteractive>
                    <BotaoLike onClick={() => { escolherPessoa() }}><ImgLike src={Match} alt="Ícone de dar Match" /></BotaoLike>
                </Tooltip>
            </DivBotoes>
            </div>

        </ContainerGeral>
        </Posicao>
    );
}

export default TelaInicial;
