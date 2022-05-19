import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import {BASE_URL} from '../../Constants/Urls'
import {API_KEY} from '../../Constants/APIKey'
import Header from '../../Components/Header/Header'

const Home = () => {

  const { movies, setMovies, loading } = UseRequestData([], `/movie/popular?${API_KEY}&language=pt-BR&page=1`)

  const listMovies = movies.results && movies.results.map((movie) => {
    return (

      <div key={movie.id}>
        {movie.original_title}
      </div>
    )
  })

  return (
    <div >
      <Header />
      {listMovies}
    </div>
  )
}

export default Home
