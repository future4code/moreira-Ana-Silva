import styled from 'styled-components'

export const Container = styled.div`
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
    width:350px;
    border-radius:4px;
    box-shadow: -4px 3px 8px -4px #000000;
    margin-top: 70px;
`
export const DivInfo = styled.div`
    margin-left:50px;
    margin-top: 65px;
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
    width: 15%;
    display: flex;
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
