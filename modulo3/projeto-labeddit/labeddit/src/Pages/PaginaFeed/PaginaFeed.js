import React from 'react'
import { ContainerTela } from './Style'
import useProtected from '../../Hooks/UseProtected'
import CardPost from './CardPost/CardPost'
import FormCriarPost from './FormCriarPost/FormCriarPost'

function PaginaFeed() {
    useProtected()

    return (
        <ContainerTela>
            
            <FormCriarPost/>

            <CardPost/>

        </ContainerTela>
    )
}

export default PaginaFeed