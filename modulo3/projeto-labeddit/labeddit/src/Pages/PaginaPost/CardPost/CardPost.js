import React from 'react';
import ImgAvatar from '../../../Assets/avatar.png'
import { CardHeader, Avatar, CardContent, Typography, IconButton, Box, Divider } from '@mui/material';
import { ArrowCircleUpOutlined, ArrowCircleDownOutlined, BookmarkBorder } from '@mui/icons-material'
import UseRequestData from '../../../Hooks/UseRequestData';
import { BASE_URL } from '../../../Constants/Urls'
import { StyleCardContainer, StyleCardContainer2, StyleConteudo, StyleBotoes, StyleSeta, StyleConteudos } from './Style'

function CardPost({ params, getData }) {

    const [posts] = UseRequestData([], `${BASE_URL}/posts`)
    const [comentarios] = UseRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const filtrarPost = posts
        .filter((post) => {
            return post.id === params.id
        })
        .map((post) => {
            const data = new Date(post.createdAt)
            const novaData = data.toDateString();

            const minutos = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();
            const horas = `${data.getHours()}:${minutos}`;

            return (
                <StyleCardContainer key={post.id}>

                    <CardContent>
                        <StyleConteudo>

                            <StyleSeta>
                                <IconButton color="secondary" title="Gostei"><ArrowCircleUpOutlined /></IconButton>
                                <Typography color="text.secondary" variant={'h6'}>{post.userVote}</Typography>
                                <IconButton color="primary" title="Não Gostei"><ArrowCircleDownOutlined /></IconButton>
                            </StyleSeta>


                            <Box>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" src={ImgAvatar} />
                                    }
                                    title={`Postado por ${post.username} às ${horas} de ${novaData}`}
                                />
                                <StyleConteudos >
                                    <Typography color="text.secondary" variant={'h6'}>
                                        {post.title.toUpperCase()}
                                    </Typography>

                                    <Typography color="text.secondary">
                                        {post.body}
                                    </Typography>
                                </StyleConteudos>
                            </Box>

                        </StyleConteudo>

                        <Divider />
                        <nav>
                            <StyleBotoes>

                                <Box>
                                    <IconButton color="secondary" title="Salvar"><BookmarkBorder /></IconButton>
                                </Box>

                            </StyleBotoes>
                        </nav>
                    </CardContent>

                </StyleCardContainer>
            )
        })

    const listaComentarios = comentarios
        .map((coment) => {
            const data = new Date(coment.createdAt)
            const novaData = data.toDateString();

            const minutos = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();
            const horas = `${data.getHours()}:${minutos}`;

            return (
                <StyleCardContainer2 key={coment.id}>

                    <StyleConteudos >
                        <Typography color="text.secondary" variant={'h6'}>
                         <p><b>{coment.username}</b> comentou às {horas} de {novaData}</p>  
                        </Typography>

                        <Typography color="text.secondary">
                            {coment.body}
                        </Typography>
                    </StyleConteudos>

                </StyleCardContainer2>
            )
        })

    return (
        <div>
            {filtrarPost && filtrarPost.length > 0 ? filtrarPost : <h1>Caregando...</h1>}
            {listaComentarios}
        </div>
    )
}
export default CardPost