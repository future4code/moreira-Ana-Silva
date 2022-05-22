import React from 'react'
import Header from '../../Components/Header/Header'
import CardDetails from '../../Components/CardDetails/CardDetails'
import CastCarousel from '../../Components/CastCarousel/CastCarousel'
import Recommended from '../../Components/Recommended/Recommended'
import { TituloTrailer } from './Styled'

const DetailsPage = () => {

  return (
    <div >

      <Header />
      <CardDetails />
      <CastCarousel />

      <div>
        <TituloTrailer>Trailer</TituloTrailer>
      </div>

      <Recommended />

    </div>
  )
}

export default DetailsPage
