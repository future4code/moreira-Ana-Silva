import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Perfil from './img/Imagem1.png';
import Perfil1 from './img/Imagem2.png';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'karine'}
          fotoUsuario={Perfil}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'jully'}
          fotoUsuario={Perfil1}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
  }
}

export default App;
