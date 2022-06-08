import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/Coordinates'
import Erro from '../../Assets/404.png'
import Header from '../../Components/Header/Header'
import { DivContainer, DivTexto, Img } from './Styled'

const ErrorPage = () => {
  const Navigate = useNavigate()

  const onClickHome = () => {
    goToHome(Navigate)
  }

  return (
    <>
      <Header />

      <DivContainer >

        <DivTexto>
          <h1>Ooops! Você se perdeu?</h1>
          <p>Infelizmente não localizamos esta página! Você encontra muitos outros títulos na página inicial.</p>
          <button onClick={onClickHome}>Página Inicial TMDB</button>
        </DivTexto>

        <div>
          <Img src={Erro} alt={"Imagem de erro"} />
        </div>

      </DivContainer>
    </>
  )

}

export default ErrorPage
