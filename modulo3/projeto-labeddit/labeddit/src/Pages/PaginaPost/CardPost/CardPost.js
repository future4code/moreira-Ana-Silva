import React from 'react';
import ImgAvatar from '../../../Assets/avatar.png'
import { CardHeader, Avatar, CardContent, Typography, IconButton, Box, Divider } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import useRequestData from '../../../Hooks/UseRequestData';
import { BASE_URL } from '../../../Constants/Urls'
import AddIcon from '@mui/icons-material/Add';
import { StyleCardContainer, StyleConteudo, StyleBotoes, StyleSeta, StyleConteudos } from './Style'
import { useParams } from 'react-router-dom';

function CardPost() {

    const parametro = useParams()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const filtrarPost = posts && posts.filter((post) => {
        if (post.id === parametro.id) {
            return post
        }
    })

    const listaDePost = filtrarPost && filtrarPost.map((post) => {
        const data = new Date(post.createdAt)
        const novaData = data.toDateString();

        const minutos = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();
        const horas = `${data.getHours()}:${minutos}`;

        return (
            <StyleCardContainer key={post.id} >

                <CardContent>
                    <StyleConteudo>

                        <StyleSeta>
                            <IconButton color="secondary" title="Gostei"><ArrowCircleUpOutlinedIcon /></IconButton>
                            <Typography color="text.secondary" variant={'h6'}>{post.userVote}</Typography>
                            <IconButton color="primary" title="Não Gostei"><ArrowCircleDownOutlinedIcon /></IconButton>
                        </StyleSeta>


                        <Box>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" src={ImgAvatar} />
                                }
                                title={`Criado por ${post.username} em ${novaData} às ${horas}`}
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
                                <IconButton color="secondary" title="Comentários" variant={"h6"}>{post.commentCount}<ChatBubbleOutlineIcon /></IconButton>
                                <IconButton color="secondary" title="Ver Mais"><AddIcon /></IconButton>
                            </Box>

                            <Box>
                                <IconButton color="secondary" title="Salvar"><BookmarkBorderIcon /></IconButton>
                            </Box>

                        </StyleBotoes>
                    </nav>
                </CardContent>

            </StyleCardContainer>
        )
    })



    return (
        <div>
            {listaDePost}
        </div>
    )
}
export default CardPost