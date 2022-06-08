import styled from 'styled-components'

export const Div = styled.div`
    height: 450px;
    color: #FFFFFF;
    background-color:#2D0C5E;
p{
    margin-top: 120px;
    font-size: 14px;
    text-align: center;
}
@media screen and (max-width: 700px) {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
p{
    margin-top: 100px;
}
}
`
export const DivT = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 70px;
h1{
    margin: 0;
    line-height: 50px;
    font-family: Roboto;
    font-size: 40px;
    width: 700px;
    text-align: center;
}
@media screen and (max-width: 700px) {
h1{
    font-size: 24px;
    margin: 0;
    line-height: 28px;
    width: 80%;
    text-align: center;
}
}
`
export const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
@media screen and (max-width:700px){
    display: grid;
    width: 80%;
    row-gap:5px;
    margin-left: 40px;
}
button{
    text-align:center;
    margin-left:10px;
    font-weight: bold;
    font-size: 14px;
    color: #000;
    padding: 8px 16px;
    height: 33px;
    border: transparent;
    border-radius: 5px;
    background-color: #fff;
@media screen and (max-width: 700px) {
    font-size: 13px;
    height: 30px;
    padding: 4px 8px;
    border-radius: 3px;
    margin-top: 10px;
}
:hover{
    cursor: pointer;
}
}
`
