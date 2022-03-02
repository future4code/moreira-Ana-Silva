import React from 'react'
import useForm from '../../../Hooks/UseForm'
import { criarPostagem } from '../../../Services/Posts'
import { ContainerForm } from './Style'
import { TextField, Button, Box } from '@mui/material'

function FormCriarPost() {

    const [form, onChange, limparInputs] = useForm({ title: "", body: "" })

    const onSubmitPostagem = (event) => {
        event.preventDefault()
        criarPostagem(form, limparInputs)
    }

    return (
        <div>

            <form onSubmit={onSubmitPostagem}>

                <ContainerForm>

                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label="Título do Post"
                        color={"secondary"}
                        variant="outlined"
                        type={"text"}
                        fullWidth
                        required
                    />
                </ContainerForm>

                <Box>
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label="No que você está pensando?"
                        type={"text"}
                        color={"secondary"}
                        fullWidth
                        required
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                    />
                </Box>

                <Button
                    type={"submit"}
                    margin={"normal"}
                    color={"primary"}
                    variant="contained"
                    fullWidth>
                    PUBLICAR
                </Button>

            </form>

        </div >
    )
}

export default FormCriarPost


