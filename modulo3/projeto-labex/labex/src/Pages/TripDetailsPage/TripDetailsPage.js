import React from 'react'
import { useNavigate } from 'react-router-dom'
import { } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function TripDetailsPage() {
    const history = useNavigate()

    const irParaAdminHome = (() => {
        history("/admin/trips/list");
    })

    return (
        <div>
            <Header />

            <div>

                <h1>Informações Sobre as Viagens</h1>
                <h5>Infoo</h5>

                <div>
                <Button variant="contained" onClick={irParaAdminHome}>VOLTAR</Button>
                </div>

                <div>
                    <h2>CANDIDATOS PENDENTES</h2>
                    <h5>Lista de Candidatos</h5>
                    <Button variant="contained">APROVAR</Button>
                    <Button variant="contained">REPROVAR</Button>
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