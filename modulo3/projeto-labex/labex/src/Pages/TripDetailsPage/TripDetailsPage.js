import React from 'react'
import { } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function TripDetailsPage() {
    return (
        <div>
            <Header />
            <Button variant="contained">HOME</Button>

            <div>

                <h1>Informações Sobre as Viagens</h1>
                <h5>Infoo</h5>

                <div>
                <Button variant="contained">VOLTAR</Button>
                </div>

                <div>
                    <h2>CANDIDATOS PENDENTES</h2>
                    <h5>Lista de Candidatos</h5>
                </div>

                <div>
                    <h2>CANDIDATOS APROVADOS</h2>
                    <h5>Lista de Candidatos</h5>
                </div>

            </div>

        </div>
    );
}

export default TripDetailsPage;