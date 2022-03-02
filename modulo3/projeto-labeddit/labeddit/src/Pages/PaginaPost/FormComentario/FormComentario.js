import React from 'react'
import useForm from '../../../Hooks/UseForm'
import { criarComentario } from '../../../Services/Comentarios'
import { ContainerForm } from './Style'
import { TextField, Button } from '@mui/material'

function FormComentario({ params, getData }) {

    const [form, onChange, limparInputs] = useForm({ body: "" })

    const onSubmitComentario = (event) => {
        event.preventDefault()
        criarComentario(form, limparInputs, params.id, getData)
    }

    return (
        <div>

            <form onSubmit={onSubmitComentario}>

                <ContainerForm>

                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label="Novo comentário"
                        color={"secondary"}
                        variant="outlined"
                        type={"text"}
                        fullWidth
                        required
                        rows={4}
                    />
                </ContainerForm>

                <Button
                    type={"submit"}
                    color={"primary"}
                    variant="contained"
                    fullWidth>
                    COMENTAR
                </Button>

            </form>

        </div >
    )
}

export default FormComentario


