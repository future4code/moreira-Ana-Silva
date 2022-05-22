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
`
