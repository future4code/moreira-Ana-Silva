import React from 'react'
import {IMG_URL} from '../../Constants/Urls'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../Routes/Coordinates'
import { FilmesImg, CardFilmes, ListaFilmes } from './Styled'

const CardMovie = ({movie}) => {

    const Navigate = useNavigate()

    const onClickInfoMovie = (id) => {
        goToDetails(Navigate, id)
      }

    return (
        <div >
            <CardFilmes onClick={() => onClickInfoMovie(movie.id)} key={movie.id} movie={movie}>
                <FilmesImg src={IMG_URL + movie.poster_path} />
                <div>
                    <p>{movie.original_title}</p>
                    <p>{movie.release_date.split('-').reverse().join('/')}</p>
                </div>
            </CardFilmes>
        </div>
    )

}

export default CardMovie
