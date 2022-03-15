import React from 'react'
import FormularioCadastro from './FormularioCadastro'
import { ContainerTela, ImgLogo } from './Style'
import Logo1 from '../../Assets/logo2.png'
import UseUnprotected from '../../Hooks/UseUnprotected'


function PaginaCadastro({setTextoDoBotao}) {
    UseUnprotected()
    
    return (
        <ContainerTela>
            <ImgLogo src={Logo1} alt="Logo Labeddit" />

            <FormularioCadastro setTextoDoBotao={setTextoDoBotao}/>

        </ContainerTela>
    )
}

export default PaginaCadastro