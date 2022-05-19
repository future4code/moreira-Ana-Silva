import React from 'react'
import Logo from '../../Assets/logo.png'
import { LogoImg, HeaderDiv } from './Styled'

const Header = () => {

    return (
        <HeaderDiv >
                <LogoImg src={Logo} alt="Logomarca" />
        </HeaderDiv>
    )
}

export default Header
