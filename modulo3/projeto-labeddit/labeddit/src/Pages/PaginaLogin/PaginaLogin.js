import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadatro } from '../../Routes/Caminhos'
import FormularioLogin from './FormularioLogin'
import { ContainerTela, ImgLogo, ContainerBotao } from './Style'
import Logo1 from '../../Assets/logo1.png'
import { Button } from '@mui/material'


function PaginaLogin() {
    const navigate = useNavigate()

    return (
        <ContainerTela>
            <ImgLogo src={Logo1} alt="Logo Labeddit" />

            <FormularioLogin />

            <ContainerBotao>
                <Button
                    onClick={() => irParaCadatro(navigate)}
                    type={"submit"}
                    color={"secondary"}
                    variant="text"
                    margin={"normal"}
                    fullWidth>
                    Não possui conta? Cadastre-se
                </Button>
            </ContainerBotao>

        </ContainerTela>
    )
}

export default PaginaLogin