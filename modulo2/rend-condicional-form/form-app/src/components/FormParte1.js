import React from 'react';
import styled from 'styled-components';

const Botao = styled.div`
    margin: 20px;
`
class FormParte1 extends React.Component {
  
render() {
  return (
    <div>
    <h3>ETAPA 1 - DADOS GERAIS</h3>
    <p>1. Qual o seu nome?</p>
    <input>
    </input>
    <p>2. Qual sua idade?</p>
    <input>
    </input>
    <p>3. Qual seu email?</p>
    <input>
    </input>
    <p>4. Qual a sua escolaridade?</p>
    <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
    </select>
    <Botao>
    <button onClick = {this.props.Parte2}>Próxima etapa</button>
    </Botao>
    </div>
    )};
}

export default FormParte1