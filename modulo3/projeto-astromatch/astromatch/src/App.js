import React, { useState } from 'react'
import Global from './styled'
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import TelaMatches from './Pages/TelaMatches/TelaMatches'

function App() {

  const [telaAtual, setTelaAtual] = useState("Inicial");

  const irParaInicial = () => {
    setTelaAtual("Inicial");
  }

  const irParaMatches = () => {
    setTelaAtual("Matches");
  }

  const escolherTela = () => {
    switch (telaAtual) {
      case "Inicial":
        return <TelaInicial irParaMatches={irParaMatches} />
      case "Matches":
        return <TelaMatches irParaInicial={irParaInicial} />
      default:
        return <TelaInicial irParaMatches={irParaMatches} />
    }
  }

  return (
    <div>
      <Global/>
      {escolherTela()}
    </div>
  );
}

export default App;
