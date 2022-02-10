import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Url'
import { ImgNome, ImgRobozinhos, ImgCancelar, DivCabecalho, ImgVerificar, DivBotoes, ImgPerfil, ContainerCard, ContainerGeral } from "./styled";
import NomeLogo from '../../Assets/nome.png'
import ImagemAstrinhos from '../../Assets/Imagem.png'
import Cancelar from '../../Assets/cancelar.png'
import Verificado from '../../Assets/verificado.png'

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
        <ContainerGeral>

            <DivCabecalho>
                <ImgNome src={NomeLogo} alt="Nome Logomarca" />
                <button onClick={props.irParaMatches}><ImgRobozinhos src={ImagemAstrinhos} alt="Ícone ir para Matches" /></button>
            </DivCabecalho>

            <ContainerCard>
                <div>
                    <ImgPerfil src={perfil.photo} alt="Foto de Perfil" />
                </div>

                <div>
                    <h4>{perfil.name}, {perfil.age} anos</h4>
                    <p>{perfil.bio}</p>
                </div>
            </ContainerCard>

            <DivBotoes>
                <button onClick={pegarPerfil}><ImgCancelar src={Cancelar} alt="ícone de Cancelar" /></button>
                <button onClick={() => {escolherPessoa()}}><ImgVerificar src={Verificado} alt="Ícone de dar Match" /></button>
            </DivBotoes>

        </ContainerGeral>
    );
}

export default TelaInicial;
