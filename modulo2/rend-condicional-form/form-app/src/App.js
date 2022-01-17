import React from 'react';
import FormParte1 from './components/FormParte1';
import FormParte2 from './components/FormParte2';
import FormParte3 from './components/FormParte3';
import FormAgradecimentos from './components/FormAgradecimentos';
import styled from 'styled-components';

const MainContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 40vmin;
`

class App extends React.Component {
  state = {
  etapas: 1,
  }

irParaProximaEtapa = () => {
    this.setState({etapas: this.state.etapas + 1});
};

render() {
const renderizarEtapas = () => {
    switch (this.state.etapas) {
    case 1:
      return <FormParte1 Parte2={this.irParaProximaEtapa}/>;
    case 2:
      return <FormParte2 Parte3={this.irParaProximaEtapa}/>;
    case 3:
      return <FormParte3 Agradecimentos={this.irParaProximaEtapa}/>;
    default:
      return <FormAgradecimentos/>
  };
}
  return (
    <MainContainer>
      {renderizarEtapas()}
    </MainContainer>  
  )};
}

export default App;