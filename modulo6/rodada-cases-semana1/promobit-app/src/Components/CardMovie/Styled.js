import styled from 'styled-components'

export const FilmesImg = styled.img`
    width:176px;
    height: 265px;
    border-radius:4px;
`

export const ListaFilmes = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content:center;
`

export const CardFilmes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
