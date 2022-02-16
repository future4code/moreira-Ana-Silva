import React from 'react'
import { } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function AdminHomePage() {
    return (
        <div>
            <Header />
            <Button variant="contained">HOME</Button>

            <div>

                <h1>Painel Administrativo</h1>

                <div>
                <Button variant="contained">CRIAR VIAGEM</Button>
                <Button variant="contained">LOGOUT</Button>
                </div>

                <div>
                    <h5>Aqui tem um card com algumas info</h5>
                </div>

            </div>

        </div>
    );
}

export default AdminHomePage;