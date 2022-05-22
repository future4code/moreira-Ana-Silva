import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { goToDetails } from '../../Routes/Coordinates'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { CardFilmes, FilmesImg, TituloFilme, DataFilme, TituloRec, DivRec, ListaFilmes } from './Styled'

const Recommended = () => {
    const Navigate = useNavigate()
    const params = useParams()

    const [recommendations] = UseRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?${API_KEY}&language=pt-BR`)

    const onClickInfoMovie = (id) => {
        goToDetails(Navigate, id)
    }

    const recommendationsMovie = recommendations?.results && recommendations?.results.map((movie) => {
        return (

            <CardFilmes onClick={() => onClickInfoMovie(movie.id)} key={movie.id} movie={movie}>
                <FilmesImg src={IMG_URL + movie.poster_path} />
                <TituloFilme>{movie.original_title}</TituloFilme>
                <DataFilme>{movie.release_date.split('-').reverse().join('/')}</DataFilme>
            </CardFilmes>
        )
    })

    return (
        <div >
            <TituloRec>Recomendações</TituloRec>

            <DivRec>
                <ListaFilmes>
                    {recommendationsMovie?.slice(0, 6)}
                </ListaFilmes>
            </DivRec>
        </div>
    )

}

export default Recommended
