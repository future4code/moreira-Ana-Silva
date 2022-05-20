import React, { useState } from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../Constants/Urls'
import { API_KEY } from '../../Constants/APIKey'
import Filters from '../../Components/Filters/Filters'
import Header from '../../Components/Header/Header'
import CardMovie from '../../Components/CardMovie/CardMovie'
import { ListaFilmes } from './Styled'

const Home = () => {

  const [data, loading] = UseRequestData([], `${BASE_URL}/popular?${API_KEY}&language=pt-BR&page=1`)
  const [genre, setGenre] = useState('')

  // useEffect(() => {
  // }, [restaurants])

  // const handleGenre = (value) => {
  //   setGenre(value)
  // }

  const listMovies = data.results && data.results.map((movie) => {
    return (

      <CardMovie key={movie.id} movie={movie} />

    )
  })

  return (
    <div >
      <Header />

      <Filters />

      <ListaFilmes>
        {listMovies}
      </ListaFilmes>

    </div>
  )
}

export default Home
