import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputNovaTarefa: "",
      filtro: ''
  }

  componentDidUpdate() {
 
  };

  componentDidMount() {
    const tarefaSalva = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefaSalva){
      this.setState({tarefas: tarefaSalva});
    }
  };

  onChangeInputNovaTarefa = (event) => {
    this.setState({inputNovaTarefa: event.target.value})
  }

  criarTarefa = () => {
      const novaTarefa = 
      {
        id: Date.now(),
        texto: this.state.inputNovaTarefa,
        completa: false
      }
      const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]
      localStorage.setItem("tarefas", JSON.stringify(novaTarefa))

      this.setState({tarefas: novaListaDeTarefas})
      this.setState({inputNovaTarefa: ""})
  }

  selectTarefa = (id) => {
    const selecaoDeTarefas = this.state.tarefas.map((task) => {
    if (id === task.id) {
    const tarefaSelecionada = {
          ...task,
          completa: !task.completa
        } 
        return tarefaSelecionada
        } else {
        return task
      }
    })
    this.setState({tarefas: selecaoDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputNovaTarefa} onChange={this.onChangeInputNovaTarefa}/>
          <button onClick={this.criarTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App