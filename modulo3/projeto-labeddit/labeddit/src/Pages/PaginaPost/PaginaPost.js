import React from 'react'
import { useParams } from 'react-router-dom'
import {ContainerTela} from './Style'
import useProtected from '../../Hooks/UseProtected'
import CardPost from './CardPost/CardPost'
import FormComentario from './FormComentario/FormComentario'

function PaginaPost({getData}) {
    
    useProtected()
    const params = useParams()

    return (
        <ContainerTela>

           <CardPost params={params} getData={getData}/>
           <FormComentario  params={params} getData={getData}/>
           
        </ContainerTela>
    )
}

export default PaginaPost