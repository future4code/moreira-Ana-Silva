import React from 'react'
import useProtected from '../../Hooks/UseProtected'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import {BASE_URL} from '../../Constants/Urls'
import CardPost from '../PaginaFeed/CardPost/CardPost'

function PaginaPost() {

    useProtected()
    // const parametro = useParams()
    // const post = UseRequestData({}, `${BASE_URL}/post/${parametro.id}/comments`)
    

    return (
        <div>
           <CardPost/>
        </div>
    )

}

export default PaginaPost