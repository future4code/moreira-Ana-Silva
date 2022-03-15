import React from 'react'
import useForm from '../../Hooks/UseForm'
import { useNavigate } from 'react-router-dom'
import { ContainerInputs, ContainerFormulario } from './Style'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { fazerLogin } from '../../Services/Usuarios'

function FormularioLogin({setTextoDoBotao}) {

    const navigate = useNavigate()
    const  [ form, onChange, limparInputs ] = useForm({ email: "", password: "" })
    
    const onSubmitLogin = (event) => {
        event.preventDefault()
        fazerLogin(form, limparInputs, navigate, setTextoDoBotao)
    }

    return (

        <ContainerInputs>
            <ContainerFormulario onSubmit={onSubmitLogin}>

                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    variant="outlined"
                    type={"email"}
                    fullWidth
                    required
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label="Senha"
                    variant="outlined"
                    type={"password"}
                    inputProps={{ pattern: '^.{8,30}', title: "A senha precisa conter no mínimo 8 caracteres e no máximo 30!" }}
                    fullWidth
                    required
                />

                <Button
                    type={"submit"}
                    color={"secondary"}
                    variant="contained"
                    fullWidth>
                    ENTRAR
        
                </Button>

            </ContainerFormulario>
        </ContainerInputs>

    )

}

export default FormularioLogin