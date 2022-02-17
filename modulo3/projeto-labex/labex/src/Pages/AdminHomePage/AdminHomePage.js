import React from 'react'
import { useNavigate } from 'react-router-dom'
import { } from './Styled'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function AdminHomePage() {
    const history = useNavigate()

    const irParaHomePage = (() => {
        history("/");
    })

    const irParaCreatTrip = (() => {
        history("/admin/trips/create");
    })


    const irParaLogin = (() => {
        history("/login");
    })

    return (
        <div>
            <Header />

            <div>

                <h1>Painel Administrativo</h1>

                <div>
                    <Button variant="contained" onClick={irParaHomePage}>VOLTAR </Button>
                    <Button variant="contained" onClick={irParaCreatTrip}>CRIAR VIAGEM</Button>
                    <Button variant="contained" onClick={irParaLogin}>LOGOUT</Button>
                </div>

                <div>
                    <h5>Aqui tem um card com algumas info</h5>
                </div>

            </div>

        </div>
    );
}

export default AdminHomePage;