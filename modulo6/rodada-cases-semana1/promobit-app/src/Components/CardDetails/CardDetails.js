import React from 'react'
import useRequestData from '../../Hooks/UseRequestData'
import { BASE_URL, IMG_CAST } from '../../Constants/Urls'
import { API_KEY } from '../../Constants//APIKey'
import { } from './Styled'

const CardDetails = ({ id, detail }) => {

    const [data, loading] = useRequestData({}, `${BASE_URL}/${id}/credits?${API_KEY}&language=pt-BR&page=1`)

    // const movieGenres = detail.genres && detail.genres.map(genre => {
    //     return <p>{genre.name}</p>
    // })

    const infoCast = data.cast && data.cast
        .filter(value => {
            return value.order <= 10
        })
        .map(credit => {
            return (
                <div key={credit.id}>
                    <img src={`${IMG_CAST}${credit.profile_path}`} alt={`Foto do ${credit.name}`} />
                    <h3>{credit.name}</h3>
                    <p>{credit.character}</p>

                </div>
            )
        })

    return (
        <div>
            {infoCast}
        </div>
    )
}

export default CardDetails
