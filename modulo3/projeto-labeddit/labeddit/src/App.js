import React, { useState } from 'react'
import Router from './Routes/Router'
import Tema from './Constants/Tema'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  const token = localStorage.getItem("token")
  const [textoDoBotao, setTextoDoBotao] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={Tema}>

      <BrowserRouter>

        <Header textoDoBotao={textoDoBotao} setTextoDoBotao={setTextoDoBotao}/>
        <Router setTextoDoBotao={setTextoDoBotao}/>

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App;
