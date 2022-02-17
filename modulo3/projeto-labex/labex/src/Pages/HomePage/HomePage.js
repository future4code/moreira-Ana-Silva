import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Texto, Labex, Gradiante, Desvio, DivContainer } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function HomePage() {
    const history = useNavigate()

const irParaTripList = (() => {
    history("/trips/list");
})

const irParaLogin = (() => {
    history("/login");
})

    return (
        <div>
            <Header />
            <DivContainer>
                <Labex>
                    <Texto>LABEX</Texto>
                    <Gradiante></Gradiante>
                    <Desvio></Desvio>
                </Labex>
                <div>
                    <Button variant="contained" onClick={irParaTripList}>VER VIAGENS</Button>
                    <Button variant="contained" onClick={irParaLogin}>ÁREA DE ADMIN</Button>
                </div>
            </DivContainer>
        </div>
    );
}

export default HomePage;