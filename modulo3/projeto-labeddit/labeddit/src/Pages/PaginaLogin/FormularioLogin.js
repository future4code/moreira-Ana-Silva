import React from 'react'
import useForm from '../../Hooks/UseForm'
import { ContainerInputs } from './Style'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

function FormularioLogin() {

    const { form, onChange, limparCampos } = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
    }

    return (

        <ContainerInputs>
            <form onSubmit={onSubmitForm}>

                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    variant="outlined"
                    margin={"normal"}
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
                    margin={"normal"}
                    type={"password"}
                    fullWidth
                    required
                />

                <Button
                    type={"submit"}
                    color={"secondary"}
                    variant="contained"
                    margin={"normal"}
                    fullWidth>
                    ENTRAR
                </Button>

            </form>
        </ContainerInputs>

    )

}

export default FormularioLogin