import styled from 'styled-components'

export const CardAtor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 191px;
    height: 325px;
    border-radius: 4px;
    margin: 10px;
    font-size: 13px;
`
export const DivActor = styled.div`
img{
    margin: 8px 8px 8px 8px;
    width: 175px;
    height: 240px;
    border-radius:4px;
}
p{
    width: 175px;
    margin-left: 10px;
    line-height: 10px;
}
`
export const NomeAtor = styled.p`
    font-weight: bold;
`
export const TituloElenco = styled.div`
    margin-top: 120px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const ContainerElenco = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const ContainerCarrossel = styled.div`
    width: 73%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
::-webkit-scrollbar{
    background-color: #d3d3d3;
    height:12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: #9e9e9e;
    border-radius: 5px;
    width: 398px;
}
`


