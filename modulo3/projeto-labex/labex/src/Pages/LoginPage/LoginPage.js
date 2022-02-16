import React from 'react'
import { } from './Styled'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Header from '../../Components/Header/Header'

function LoginPage() {
    return (
        <div>
            <Header />
            <Button variant="contained">HOME</Button>

            <div>
                <h1>Login</h1>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" type="email"/>
                <TextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
            </div>

            <Button variant="contained">ENTRAR</Button>

        </div>
    );
}

export default LoginPage;