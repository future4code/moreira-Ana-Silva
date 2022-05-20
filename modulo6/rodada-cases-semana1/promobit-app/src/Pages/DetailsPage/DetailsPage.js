import React from 'react'
import CardDetails from '../../Components/CardDetails/CardDetails'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../Constants/Urls'
import { API_KEY } from '../../Constants/APIKey'
import Header from '../../Components/Header/Header'

const DetailsPage = () => {

  const params = useParams()
  const data = UseRequestData([], `${BASE_URL}${params.id}?${API_KEY}`)

  const movieDetails = data && data.map(detail => {
    return (
      <CardDetails key={detail.id} id={detail.id} detail={detail}  />
    )
  })

  return (
    <div >
      <Header />
      {movieDetails}
    </div>
  )

}

export default DetailsPage
