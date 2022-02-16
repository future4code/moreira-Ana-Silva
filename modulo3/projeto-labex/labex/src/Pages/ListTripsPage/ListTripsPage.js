import React from 'react'
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header';
import { } from './Styled'

function ListTripsPage() {
    return (
        <div>

            <div>
                <Header />
                <Button variant="contained">HOME</Button>
                <Button variant="contained">INSCREVA-SE</Button>
            </div>

            <div>
                <h1>LISTA DE VIAGENS</h1>
            </div>

        </div>
    );
}

export default ListTripsPage;