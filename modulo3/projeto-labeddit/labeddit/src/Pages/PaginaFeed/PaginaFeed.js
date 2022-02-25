import React from 'react'
import { ContainerTela } from './Style'
import useProtected from '../../Hooks/UseProtected'
import CardPostFeed from './CardPostFeed/CardPostFeed'
import useRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../Constants/Urls'

function PaginaFeed() {
    useProtected()

    return (
        <ContainerTela>

            <CardPostFeed/>

        </ContainerTela>
    )
}

export default PaginaFeed