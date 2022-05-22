import React from 'react'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { CardFilmes, FilmesImg, TituloFilme, DataFilme, TituloRec, DivRec, ListaFilmes } from './Styled'

const Recommended = () => {
    const params = useParams()
    const [recommendations] = UseRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?${API_KEY}&language=pt-BR`)

    const recommendationsMovie = recommendations?.results && recommendations?.results.map((movie) => {
        return (

            <CardFilmes>
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
                    {recommendationsMovie}
                </ListaFilmes>
            </DivRec>
        </div>
    )

}

export default Recommended
