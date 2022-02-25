import React from 'react'
import {ContainerPaginaErro, ImgErro} from './Style'
import Erro from '../../Assets/error.png'
import  Typography from '@mui/material/Typography'

function PaginaErro() {

    return (

        <ContainerPaginaErro>
            <ImgErro src={Erro} alt="Imagem de Erro"/>
            <br/>
            <Typography color={'secondary'} variant={'h5'} align={'center'}>A página que você está procurando não foi encontrada!</Typography>
        </ContainerPaginaErro>
    )

}

export default PaginaErro