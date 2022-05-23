import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import CrewsInfo from '../CrewsInfo/CrewsInfo'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL, IMG_URL } from '../../Constants/Urls'
import { Container, FilmeImg, DivInfo, InfoFilme, AvaFilme, SinopseFilme } from './Styled'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const params = useParams()

    const [data] = UseRequestData([], `${BASE_URL}/movie/${params.id}?${API_KEY}&language=pt-BR`)
    const [detail] = UseRequestData([], `${BASE_URL}/movie/${params.id}/release_dates?${API_KEY}&language=pt-BR`)

    //PEGA OS DETALHES DOS FILMES EM PT-BR
    const movieDetails = detail.results && detail.results.filter(detail => {
        return detail.iso_3166_1 === "BR"
    })

    //PEGA OS GÊNEROS DO FILME
    const movieGenres = data.genres && data.genres.map(genre => {
        return <p key={genre.id}>{genre.name},</p>
    })

    //CONVERTE MINUTOS EM HORA
    let all = data.runtime;
    let minutes = all % 60;
    let hours = (all - minutes) / 60

    //CONVERTE AVALIAÇÃO PARA PORCENTAGEM
    let number = data.vote_average
    let percentage = number / 10 * 100

    // PEGA O ANO DO FILME
    const year = data.release_date?.split('-')

    return (
        <Container>
            <div>
                <FilmeImg src={IMG_URL + data.poster_path} alt={data.title} />
            </div>

            <DivInfo>
                <h1>{data?.title} ({year?.[0]})</h1>

                <InfoFilme>
                    <p>{movieDetails?.[0]?.release_dates?.[0].certification} anos</p>
                    <p>•</p>
                    <p>{data?.release_date?.split('-').reverse().join('/')} ({movieDetails?.[0]?.iso_3166_1})</p>
                    <p>•</p>
                    {movieGenres}
                    <p>•</p>
                    <p>{`${hours}h ${minutes}m`}</p>
                </InfoFilme>

                <AvaFilme>
                   <div>{percentage} %</div>
                   <p>Avaliação dos usuários</p> 
                </AvaFilme>
                
                <SinopseFilme>
                    <h1>Sinopse</h1>
                    <p>{data.overview}</p>
                </SinopseFilme>

                <CrewsInfo />
            </DivInfo>
        </Container>
    )
}
export default CardDetails
