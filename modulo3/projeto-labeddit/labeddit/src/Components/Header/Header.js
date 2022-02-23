import React from 'react'
import { irParaFeed, irParaLogin } from '../../Routes/Caminhos'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Logo from '../../Assets/logo.png'
import { LogoImg, ToolbarStyle } from './Style'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <ToolbarStyle>
                <Button onClick={() => irParaFeed(navigate)}> <LogoImg src={Logo} alt="Logo Labeddit" /> </Button>
                <Button color="inherit" onClick={() => irParaLogin(navigate)}>Login</Button>
            </ToolbarStyle>
        </AppBar>
    )
}
export default Header