import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { API_KEY } from '../../Constants/APIKey'
import Header from '../../Components/Header/Header'

const Home = () => {

  const [movies, setMovies, loading] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)

  const listMovies = movies.results && movies.results.map((movie) => {
    return (

      <div key={movie.id}>
        <img src={IMG_URL + movie.poster_path} />
        {movie.original_title}
        {movie.release_date.split('-').reverse().join('/')}
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
