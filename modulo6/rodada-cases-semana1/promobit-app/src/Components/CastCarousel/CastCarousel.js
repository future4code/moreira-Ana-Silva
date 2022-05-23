import React from 'react'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { CardAtor, DivActor, NomeAtor, TituloElenco, ContainerElenco, ContainerCarrossel } from './Styled'

const CastCarousel = () => {
    
    const params = useParams()
    const [credits, loading] = UseRequestData([], `${BASE_URL}/movie/${params.id}/credits?${API_KEY}&language=pt-BR`)

    //PEGA O ELENCO DO FILME
    const rostersMovie = credits?.cast && credits?.cast.map((actor) => {
        return (
            <CardAtor key={actor.name}>
                <DivActor >
                    <img src={IMG_URL + actor.profile_path} />
                    <NomeAtor>{actor.name}</NomeAtor>
                    <p>{actor.character}</p>
                </DivActor>
            </CardAtor>
        )
    })

    return (
        <div >
            <TituloElenco>Elenco original</TituloElenco>

            <ContainerElenco>
                <ContainerCarrossel>
                {rostersMovie}
                </ContainerCarrossel>
            </ContainerElenco>
        </div>
    )
}

export default CastCarousel
