import React from 'react'
import { Texto, Labex, Gradiante, Desvio, DivContainer } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function HomePage() {
    return (
        <div>
        <Header/>
        <DivContainer>
            <Labex>
                <Texto>LABEX</Texto>
                <Gradiante></Gradiante>
                <Desvio></Desvio>
            </Labex>
            <div>
                <Button variant="contained">VER VIAGENS</Button>
                <Button variant="contained">ÁREA DE ADMIN</Button>
            </div>
        </DivContainer>
        </div>
    );
}

export default HomePage;