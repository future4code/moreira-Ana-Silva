import React from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Header from '../../Components/Header/Header';
import { DivFormulario } from './Styled'

function ApplicationFormPage() {

    return (
        <div>

            <div>
                <Header />
            </div>

            <div>
                <h1>Inscreva-se para uma viagem</h1>

                <DivFormulario>

                    <FormControl sx={{ m: 1, width: 300 }} >
                        <InputLabel id="demo-simple-select-readonly-label">Escolha uma Viagem *</InputLabel>
                        <Select
                            labelId="demo-simple-select-readonly-label"
                            id="demo-simple-select-readonly"
                            variant="outlined"
                            label="Escolha uma Viagem *"
                            inputProps={{ readOnly: true }}
                        >
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        label="Nome *"
                        variant="outlined" />

                    <TextField id="outlined-number"
                        label="Idade *" 
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Texto de Candidatura *" 
                    variant="outlined" />

                    <TextField
                        id="outlined-basic"
                        label="Profissão *"
                        variant="outlined" />

                    <FormControl>
                        <InputLabel id="demo-simple-select-readonly-label">Escolha um País *</InputLabel>
                        <Select
                            labelId="demo-simple-select-readonly-label"
                            variant="outlined"
                            label="Escolha um País *"
                            inputProps={{ readOnly: true }}
                        >
                        </Select>
                    </FormControl>

                </DivFormulario>

                <Button variant="contained">VOLTAR</Button>
                <Button variant="contained">ENVIAR</Button>
            </div>
        </div>
    );
}

export default ApplicationFormPage;