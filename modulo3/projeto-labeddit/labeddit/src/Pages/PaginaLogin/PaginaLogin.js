import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadatro } from '../../Routes/Caminhos'
import FormularioLogin from './FormularioLogin'
import { ContainerTela, ImgLogo, ContainerBotao } from './Style'
import Logo1 from '../../Assets/logo2.png'
import Button from '@mui/material/Button'
import useUnprotected from '../../Hooks/UseUnprotected'


function PaginaLogin({setTextoDoBotao}) {
    const navigate = useNavigate()
    useUnprotected()
    
    return (
        <ContainerTela>
            <ImgLogo src={Logo1} alt="Logo Labeddit" />

            <FormularioLogin setTextoDoBotao={setTextoDoBotao}/>

            <ContainerBotao>
                <Button
                    onClick={() => irParaCadatro(navigate)}
                    type={"submit"}
                    color={"secondary"}
                    variant={"text"}
                    margin={"normal"}
                    fullWidth>
                    Não possui uma conta? Cadastre-se
                </Button>
            </ContainerBotao>

        </ContainerTela>
    )
}

export default PaginaLogin