import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { API_KEY } from '../../Constants/APIKey'
import Filters from '../../Components/Filters/Filters'
import Header from '../../Components/Header/Header'
import { FilmesImg, CardFilmes, ListaFilmes } from './Styled'

const Home = () => {

  const [movies, setMovies, loading] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)
  console.log(movies)

  const listMovies = movies.results && movies.results.map((movie) => {
    return (

      <CardFilmes key={movie.id}>
        <FilmesImg src={IMG_URL + movie.poster_path} />
        <div>
          <p>{movie.original_title}</p>
          <p>{movie.release_date.split('-').reverse().join('/')}</p>
        </div>
      </CardFilmes>

    )
  })

  return (
    <div >
      <Header />
      <Filters />

      <div>
        <ListaFilmes>
          {listMovies}
        </ListaFilmes>
      </div>

    </div>
  )
}

export default Home
