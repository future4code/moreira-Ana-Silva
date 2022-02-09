import styled from "styled-components"; 

export const DivCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const  ImgNome = styled.img`
    height: 3.125rem;
`
export const  ImgRobozinhos = styled.img`
    height: 3.125rem;
`
export const  DivBotoes = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const  ImgCancelar = styled.img`
    height: 3rem;
`
export const  ImgVerificar = styled.img`
    height: 3rem;
`
export const ImgPerfil = styled.img`
    width: 20rem;
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerGeral = styled.div`
  width: 20rem;
  height: 30rem;
  background-color: #D1C7DB;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #BBB0C6;
  }
`
