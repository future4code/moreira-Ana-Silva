import styled from 'styled-components'

export const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`
export const DivTexto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: -200px;
h1{
    font-size: 60px;
    color: #2D0C5E;
}
p{
    width: 50%;
    font-size: 25px;
}
button{
    color: #fff;
    background-color: #2D0C5E;
    height:40px;
    width: 200px;
    border-radius: 8px;
    font-size: 18px;
    border: none;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
}
}
`
export const Img = styled.img`
    width: 700px;
`