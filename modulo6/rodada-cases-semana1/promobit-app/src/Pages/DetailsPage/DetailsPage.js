import React from 'react'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { API_KEY } from '../../Constants/APIKey'
import { BASE_URL, YT_URL } from '../../Constants/Urls'
import Header from '../../Components/Header/Header'
import CardDetails from '../../Components/CardDetails/CardDetails'
import CastCarousel from '../../Components/CastCarousel/CastCarousel'
import Recommended from '../../Components/Recommended/Recommended'
import { TituloTrailer, Player } from './Styled'

const DetailsPage = () => {

  const params = useParams()
  const [trailer] = UseRequestData([], `${BASE_URL}/movie/${params.id}/videos?${API_KEY}&language=pt-BR`)

  return (
    <div >

      <Header />
      <CardDetails />
      <CastCarousel />

      <div>
        <TituloTrailer>Trailer</TituloTrailer>
        <Player>
          <iframe
            src={YT_URL + trailer?.results?.[0]?.key}
            title={YT_URL + trailer?.results?.[0]?.key}></iframe>
        </Player>

        <Recommended />
      </div>

    </div>
  )
}

export default DetailsPage
