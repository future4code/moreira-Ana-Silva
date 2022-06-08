import { createTheme } from '@mui/material/styles'
import { primaryColor, neutralColor } from './Colors'

const Theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: neutralColor,
        },
    },
});
export default Theme
