import React from 'react'
import { IMG_URL } from '../../Constants/Urls'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../Routes/Coordinates'
import { CardFilme, FilmeImg, TituloFilme, DataFilme } from './Styled'

const CardMovie = ({ movie }) => {

    const Navigate = useNavigate()

    const onClickInfoMovie = (id) => {
        goToDetails(Navigate, id)
    }

    return (
        <div >
            <CardFilme onClick={() => onClickInfoMovie(movie.id)} key={movie.id} movie={movie}>
                <FilmeImg src={IMG_URL + movie.poster_path} />
                <div>
                    <TituloFilme>{movie.title}</TituloFilme>
                    <DataFilme>{movie.release_date.split('-').reverse().join('/')}</DataFilme>
                </div>
            </CardFilme>
        </div>
    )
}

export default CardMovie
