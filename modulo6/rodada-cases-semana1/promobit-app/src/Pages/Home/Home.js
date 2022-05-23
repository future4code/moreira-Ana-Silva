import React, { useState, useEffect } from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL } from '../../Constants/Urls'
import Filters from '../../Components/Filters/Filters'
import Header from '../../Components/Header/Header'
import CardMovie from '../../Components/CardMovie/CardMovie'
import Pagination from '@mui/material/Pagination'
import { ListaFilmes, Container, ContainerPagina } from './Styled'

const Home = () => {
  
  const [page, setPage] = useState(1)
  const [data, loading] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=${page}`)

  const onChangePage = (event, value) => {
    setPage(value)
  }

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

      <ContainerPagina>
        <Pagination color="primary" count={500} page={page} onChange={onChangePage} sx={{ mb: '20px' }} />
      </ContainerPagina>

    </div>
  )
}

export default Home
