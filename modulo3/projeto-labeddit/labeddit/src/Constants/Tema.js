import { createTheme } from '@mui/material'
import { corPrimaria, corSecundaria, corNeutra, corNeutra2 } from './Cores';

const Tema = createTheme ({
    palette: {
        primary: {
            main: corPrimaria,
            contrastText: corNeutra
        },
        secondary: {
            main: corSecundaria,
            contrastText: corNeutra2
        }
    }
})

export default Tema
