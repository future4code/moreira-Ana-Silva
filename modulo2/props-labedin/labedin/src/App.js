import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/Imagem1.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
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
      </div>

      <div className="page-section-container">
        <CardPequeno
          titulo="Email:" 
          informacao="meu_email56874213@gmail.com" 
        />
        <CardPequeno 
        titulo="Endereço:" 
        informacao="Bairro José Bento, Rua Dois Andares, N° 5655" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
