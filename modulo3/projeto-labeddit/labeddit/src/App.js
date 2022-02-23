import React from 'react'
import Router from './Routes/Router'
import { ThemeProvider } from '@mui/material'
import Tema from './Constants/Tema'

function App() {

  return (
    <ThemeProvider theme={Tema}>

      <Router />

    </ThemeProvider>
  )
}

export default App;
