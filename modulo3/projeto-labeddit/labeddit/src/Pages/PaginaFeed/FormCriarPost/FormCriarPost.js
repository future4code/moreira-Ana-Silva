import React from 'react'
import useForm from '../../../Hooks/UseForm'
import { criarPostagem } from '../../../Services/Posts'
import ImgAvatar from '../../../Assets/avatar.png'
import { ContainerForm } from './Style'
import { TextField, Avatar, CardHeader, Button } from '@mui/material'

function FormCriarPost() {

    const [form, onChange, limparInputs] = useForm({ title: "", body: "" })

    const onSubmitPostagem = (event) => {
        event.preventDefault()
        criarPostagem(form, limparInputs)
    }

    return (
        <ContainerForm>
            <form onSubmit={onSubmitPostagem}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={ImgAvatar} />
                    }
                />

                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label="Título do Post"
                    variant="outlined"
                    type={"text"}
                    fullWidth
                    required
                />

                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label="No que você está pensando?"
                    type={"text"}
                    fullWidth
                    required
                    multiline
                    rows={6}
                    defaultValue="Default Value"
                />
                <Button
                    type={"submit"}
                    color={"secondary"}
                    variant="contained">
                    POSTAR
                </Button>

            </form>
        </ContainerForm>
    )
}

export default FormCriarPost


