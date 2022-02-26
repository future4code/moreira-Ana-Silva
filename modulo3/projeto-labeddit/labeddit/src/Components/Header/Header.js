import { irParaFeed, irParaLogin } from '../../Routes/Caminhos'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Logo from '../../Assets/logo.png'
import { LogoImg, ToolbarStyle } from './Style'
import { useNavigate } from 'react-router-dom'

function Header({textoDoBotao, setTextoDoBotao}) {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const onClickTextoBotao = () => {
        if (token) {
            logout()
            setTextoDoBotao("Login")
            irParaLogin(navigate)
        } else {
            irParaLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <ToolbarStyle>
                <Button onClick={() => irParaFeed(navigate)} title="Feed"> <LogoImg src={Logo} alt="Logo Labeddit" /> </Button>
                <Button onClick={onClickTextoBotao} color="inherit">{textoDoBotao}</Button>
            </ToolbarStyle>
        </AppBar>
    )
}
export default Header