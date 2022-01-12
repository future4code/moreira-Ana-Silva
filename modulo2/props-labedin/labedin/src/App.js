import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/Imagem1.png';
import Email from './img/email.png';
import Endereco from './img/endereco.png';
import Nasa from './img/nasa.png';
import styled from 'styled-components';

function App() {

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

const H3 = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

  return (
    <AppStyle>
      <PageSectionContainer>
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem= {MinhaFoto}
          nome="Ana Karine" 
          descricao="Oi, eu sou a Ana Karine. Tenho 20 anos, atualmente estou no segundo módulo do curso de programação 
          (Dev.Full Stack) na Labenu. Com 16 anos (2017) estagiei como Recepcionista no Hospital Vitória (Timon-MA), no qual auxiliava no 
          atendimento ao público externo e interno; no cadastro de clientes no sistema; entre outras funções, aos 19 anos fui contratada em uma 
          filial do mesmo Hospital, também na mesma função."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          icone={Email}
          titulo="Email:" 
          informacao=" meu_email56874213@gmail.com" 
        />
        <CardPequeno 
        icone={Endereco}
        titulo="Endereço:" 
        informacao=" Bairro José Bento, Rua Dois Andares, N° 5655" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={Nasa} 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppStyle>
  );
}

export default App;
