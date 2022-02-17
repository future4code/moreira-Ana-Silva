import React from 'react'
import { useNavigate } from 'react-router-dom';
import { } from './Styled'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Header from '../../Components/Header/Header'

function LoginPage() {
    const history = useNavigate()

    const irParaHomePage = (() => {
        history("/");
    })

    const irParaAdminPage = (() => {
        history("/admin/trips/list");
    })

    return (
        <div>
            <Header />

            <div>
                <h1>Login</h1>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" type="email" />
                <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" />
            </div>

            <Button variant="contained" onClick={irParaHomePage}>VOLTAR</Button>
            <Button variant="contained" onClick={irParaAdminPage}>ENTRAR</Button>

        </div>
    );
}

export default LoginPage;