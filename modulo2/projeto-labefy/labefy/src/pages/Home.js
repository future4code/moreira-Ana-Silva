import React from "react";
import styled from "styled-components";
import Imagem from "./img/Imagem.png"


const Container = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    align-items: center;
` 
const ItensContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const BotoesStyle = styled.div`
  font-weight: 200;
  color: white;
  border: solid 2px white ;
  height: 20px;
  width: 120px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  &:hover {
        cursor: pointer;
        border-color: #AFC4CE;
        box-shadow: 8px 0px 20px white;
        background-color: #AFC4CE;
        color: black;
    }
`
const Img = styled.img`
    margin: 40px;
    padding: none;
    width: 110vh;
`

const Textos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
class Home extends React.Component {

    render() {

        return (
            <Container>
                <Img src= {Imagem} alt="Pessoa ouvindo música"/>
                <ItensContainer>
                <Textos>
                <h1>NO MUSIC, NO LIFE</h1>
                <Textos>A música como você nunca experimentou antes...</Textos>
                <Textos>Crie suas playlists, ouça suas músicas e divirta-se!</Textos>
                </Textos>
                <BotoesStyle onClick={() => this.props.irParaPlaylists("playlist")}>ACESSAR</BotoesStyle>
                </ItensContainer>

            </Container>
        )
    }
}

export default Home;

