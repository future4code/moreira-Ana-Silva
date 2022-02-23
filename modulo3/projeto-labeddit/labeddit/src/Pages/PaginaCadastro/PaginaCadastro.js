import React from 'react'
import FormularioCadastro from './FormularioCadastro'
import { ContainerTela, ImgLogo } from './Style'
import Logo1 from '../../Assets/logo2.png'


function PaginaCadastro() {

    return (
        <ContainerTela>
            <ImgLogo src={Logo1} alt="Logo Labeddit" />

            <FormularioCadastro />

        </ContainerTela>
    )
}

export default PaginaCadastro