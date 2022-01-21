import React from 'react';
import styled from 'styled-components';

const Botao = styled.div`
    margin: 20px;
`
class FormParte3 extends React.Component {
  
render() {
  return (
    <div>
    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
    <p>5. Por que você não terminou um curso de graduação?</p>
    <input>
    </input>
    <p>6. Você fez algum curso complementar?</p>
    <input>
    </input>
    <Botao>
    <button onClick = {this.props.Agradecimentos}>Próxima etapa</button>
    </Botao>
    </div>  
    )};
}

export default FormParte3