import React from 'react'
import Router from './Routes/Router'
import Theme from './Constants/Theme'
import { ThemeProvider } from '@mui/material'

function App() {

  return (
    <ThemeProvider theme={Theme}>

      <div>
        <Router />
      </div>

    </ThemeProvider>
  )

}

export default App;