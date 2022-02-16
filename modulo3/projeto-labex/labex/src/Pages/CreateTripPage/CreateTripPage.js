import React from 'react'
import { DivFormulario } from './Styled'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Header from '../../Components/Header/Header'

function CreateTripPage() {
    return (
        <div>
            <Header />
            <Button variant="contained">HOME</Button>

            <div>
                <h1>Inscreva-se para uma viagem</h1>

                <DivFormulario>

                    <TextField
                        id="outlined-basic"
                        label="Nome *"
                        variant="outlined" />

                    <FormControl>
                        <InputLabel id="demo-simple-select-readonly-label">Escolha um Planeta *</InputLabel>
                        <Select
                            labelId="demo-simple-select-readonly-label"
                            variant="outlined"
                            label="Escolha um Planeta *"
                            inputProps={{ readOnly: true }}
                        >
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        label="Data"
                        variant="outlined"
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField id="outlined-basic" 
                    label="Descrição *" 
                    variant="outlined" />


                    <TextField id="outlined-number"
                        label="Duração em Dias *" type="number"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </DivFormulario>

                <Button variant="contained">VOLTAR</Button>
                <Button variant="contained">CRIAR</Button>
            </div>

        </div>
    );
}

export default CreateTripPage;