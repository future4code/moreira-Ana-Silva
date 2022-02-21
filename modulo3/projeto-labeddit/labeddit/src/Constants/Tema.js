import { createTheme } from '@mui/material'
import { corPrimaria, corSecundaria, corNeutra } from './Cores';

const theme = createTheme({
    palette: {
        primary: {
            main: corPrimaria,
            contrastText: corNeutra
        },
        secondary: {
            main: corSecundaria,
            contrastText: corNeutra
        }
    }
})

export default theme
