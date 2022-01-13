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

  state = {

    posts: [

      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },

      {
        nomeUsuario: 'karine',
        fotoUsuario: Perfil,
        fotoPost: 'https://picsum.photos/200/151',
      },

      {
        nomeUsuario:'jully',
        fotoUsuario: Perfil1,
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
      const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novaPostagem = [...this.state.posts, novoPost];

    this.setState({posts: novaPostagem});
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((postagens) => {
      return (
        <div>
        <Post
          nomeUsuario={postagens.nomeUsuario}
          fotoUsuario={postagens.fotoUsuario}
          fotoPost={postagens.fotoPost}
        />
        </div>
      );
    });

    return (
      <MainContainer>
      <div>
       <input
       value={this.state.valorInputNomeUsuario}
       onChange={this.onChangeInputNomeUsuario}
       placeholder={"Nome"}
     />
      <input
       value={this.state.valorInputFotoUsuario}
       onChange={this.onChangeInputFotoUsuario}
       placeholder={"Foto"}
     />
      <input
       value={this.state.valorInputFotoPost}
       onChange={this.onChangeInputFotoPost}
       placeholder={"Postagem"}
     />
     <button onClick={this.adicionaPost}>POSTAR</button>
     </div>
     <div>{listaDePosts}</div>
    </MainContainer>
    );
  }
}

export default App;
