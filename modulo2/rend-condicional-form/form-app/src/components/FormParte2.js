import React from 'react';
import styled from 'styled-components';

const Botao = styled.div`
    margin: 20px;
`

class FormParte2 extends React.Component {

render() {
  return (
    <div>
    <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
    <p>5. Qual curso?</p>
    <input>
    </input>
    <p>6. Qual a unidade de ensino?</p>    
    <select>
        <option>Nenhum</option>
        <option>Curso Técnico</option>
        <option>Curso de Inglês</option>
    </select>
    <Botao>
    <button onClick = {this.props.Parte3}>Próxima etapa</button>
    </Botao>
    </div>  
    )};
}

export default FormParte2