import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
export const ListaFilmes = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 40px;
    row-gap:25px;

    @media screen and (max-width: 700px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap:25px;
}
`
export const ContainerPagina = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-bottom: 10px;
`
