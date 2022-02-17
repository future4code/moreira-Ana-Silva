import styled from "styled-components";

export const ImgNome = styled.img`
    height: 3.5rem;
`
export const ImgVoltar = styled.img`
    height: 4.5rem;
`
export const BotaoVoltar = styled.button`
    background-color: transparent;
    border: none;
&:hover {
    cursor: pointer;
}
`
export const ContainerGeral = styled.div`
    width: 25rem;
    height: 40rem;
    background-color: #1B0030;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Posicao = styled.div`
    margin: 15px;
    display: flex;
    justify-content: center;
`
export const CabecalhoCard = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`
export const DivGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BotaoDeletar = styled.div`
    color: #1B0030;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #1B0030;
    width: 200px;
    height: 30px;
&:hover {
    cursor: pointer;
    background-color: #C2E8C2;
}
`
export const ListaEstilo = styled.div`
    width: 99.5%;
    height: 4rem;
    border: 1px solid #590040;
    display: flex;
    flex-direction: column;
    gap: 10px;
&:hover{
    background-color: rgba(255,255,255, 0.25);
}
` 