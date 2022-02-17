import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header';
import { } from './Styled'

function ListTripsPage() {
    const history = useNavigate()

    const irParaHomePage= (() => {
        history("/");
    })
    
    const irParaApplicationForm = (() => {
        history("/trips/application");
    })
    return (
        <div>

            <div>
                <Header />
                <Button variant="contained" onClick={irParaHomePage}>VOLTAR</Button>
                <Button variant="contained" onClick={irParaApplicationForm}>INSCREVA-SE</Button>
            </div>

            <div>
                <h1>LISTA DE VIAGENS</h1>
            </div>

        </div>
    );
}

export default ListTripsPage;