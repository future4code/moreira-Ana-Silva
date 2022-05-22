import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL } from '../../Constants/Urls'
import Filters from '../../Components/Filters/Filters'
import Header from '../../Components/Header/Header'
import CardMovie from '../../Components/CardMovie/CardMovie'
import { ListaFilmes, Container, ContainerFilter } from './Styled'

const Home = () => {

  const [data, loading] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)

  //PEGA A LISTA DOS FILMES
  const listMovies = data.results && data.results.map((movie) => {
    return (
      <CardMovie key={movie.id} movie={movie} />
    )
  })

  return (
    <div >
      <Header />

        <Filters />

      <Container>
        <ListaFilmes>
          {listMovies}
        </ListaFilmes>
      </Container>

    </div>
  )
}

export default Home
