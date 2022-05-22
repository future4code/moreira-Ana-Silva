import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    height: 550px;
    justify-content:center;
    color: #FFFFFF;
    background-color:#2D0C5E;
h1{
    font-size: 32px;
    line-height: 1px;
}
`
export const FilmeImg = styled.img`
    width:380px;
    border-radius:4px;
    box-shadow: -4px 3px 8px -4px #000000;
    margin-top: 70px;
`
export const InfoFilme = styled.div`
    display:flex;
    font-weight:200;
    gap: 8px;
    font-size: 14px;
`
export const AvaFilme = styled.div`
    font-size: 13px;
    font-weight:200;
    width: 10%;
`
export const SinopseFilme = styled.div`
    display:flex;
    flex-direction: column;
    width: 660px;
    margin-top: 30px;
h1{
    font-size: 17px;
    font-weight: bold;
}
p{
    font-size:14px;
    font-weight:200;
}
`
export const DivInfo = styled.div`
    margin-left:50px;
    margin-top: 65px;
`

export const CrewsDiv = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    line-height: 1px;
    h5{
        font-size:14px;
    }
    p{
        font-size: 13px;
    }
`
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

export const DivCarrossel = styled.div`
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
export const ContainerElenco = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const TituloElenco = styled.div`
    margin-top: 120px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const TituloTrailer = styled.div`
    margin-top: 30px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const TituloRec = styled.div`
    margin-top: 120px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const Nome = styled.p`
    font-weight: bold;
`
export const DivRec = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`

