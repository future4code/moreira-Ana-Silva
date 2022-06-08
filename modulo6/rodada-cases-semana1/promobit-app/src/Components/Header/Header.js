import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToHome} from '../../Routes/Coordinates'
import Logo from '../../Assets/logo.png'
import { HeaderDiv, LogoImg  } from './Styled'

const Header = () => {
    const Navigate = useNavigate()

    const onClickHome = () => {
        goToHome(Navigate)
    }

    return (
        <HeaderDiv >
                <LogoImg onClick={onClickHome} title="Ir para home!" src={Logo} alt="Logomarca" />
        </HeaderDiv>
    )
}

export default Header
