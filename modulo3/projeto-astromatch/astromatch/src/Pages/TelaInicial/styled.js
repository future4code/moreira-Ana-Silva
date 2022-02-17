import styled from "styled-components";

export const CabecalhoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`

export const ImgNome = styled.img`
    height: 3.5rem;
`
export const ImgMatches = styled.img`
    height: 4.5rem;
`
export const BotaoMatches = styled.button`
    background-color: transparent;
    border: none;
    width: 40px;
    &:hover {
    cursor: pointer;
}
`
export const DivBotoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
`
export const ImgCancelar = styled.img`
    height: 3rem;
`
export const BotaoCancelar = styled.button`
    background-color: transparent;
    border: none;
&:hover {
    cursor: pointer;
}
`
export const ImgLike = styled.img`
    height: 3rem;
`
export const BotaoLike = styled.button`
    background-color: transparent;
    border: none;
&:hover {
    cursor: pointer;
}
`
export const ImgPerfil = styled.img` 
    margin: 8px;
    width: 15vw;
    max-height: 65vh;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerGeral = styled.div`
    width: 25rem;
    height: 40rem;
    background-color: #1B0030;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Posicao = styled.div`
    margin: 40px;
    display: flex;
    justify-content: center;
`