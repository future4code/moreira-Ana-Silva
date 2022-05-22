import styled from 'styled-components'

export const CardFilme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const FilmeImg = styled.img`
    width:176px;
    height: 265px;
    border-radius:4px;
    box-shadow: -4px 3px 8px -4px #000000;
&:hover{
    cursor: pointer;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}
`
export const TituloFilme = styled.p`
    width:176px;
    font-size: 15px;
    font-weight: bold;
`
export const DataFilme = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: #646464;
    line-height: 0px;
`