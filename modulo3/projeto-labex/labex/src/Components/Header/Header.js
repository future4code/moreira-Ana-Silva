import React from 'react';
import Logo from '../../Assets/Logo.png'
import {ImgLogo, TextoLogo, DivContainer} from './Styled'

function Header() {
    return (
        <div>
            <DivContainer>
                <ImgLogo src={Logo} alt="Logo Labex"/>
                <TextoLogo>LABEX</TextoLogo>
            </DivContainer>
        </div>
    );
}

export default Header;