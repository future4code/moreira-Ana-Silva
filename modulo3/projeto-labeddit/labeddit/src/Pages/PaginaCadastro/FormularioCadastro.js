import React from 'react'
import useForm from '../../Hooks/UseForm'
import { ContainerInputs, ContainerFormulario } from './Style'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

function FormularioCadastro() {

    const { form, onChange, limparCampos } = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (

        <ContainerInputs>
            <ContainerFormulario onSubmit={onSubmitForm}>

                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label="Nome"
                    variant="outlined"
                    type={"text"}
                    inputProps={{ pattern: '^.{3,}', title: "O nome precisa conter no mínimo 3 caracteres!" }}
                    fullWidth
                    required
                />

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
                    CADASTRAR
                </Button>

            </ContainerFormulario>
        </ContainerInputs>

    )

}

export default FormularioCadastro