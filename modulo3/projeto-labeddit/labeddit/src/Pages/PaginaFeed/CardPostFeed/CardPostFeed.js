import React from 'react';
import { CardHeader, Avatar, CardContent, Typography } from '@mui/material';
import useRequestData from '../../../Hooks/UseRequestData';
import { BASE_URL } from '../../../Constants/Urls'
import {StyleCardContainer} from './/Style'

function CardPostFeed() {

    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)

    const listaDePosts = posts && posts.map((post) => {
        return (

            <StyleCardContainer >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" />
                    }
                    title={`Enviado por ${post.username} em ${post.createdAt}`}
                />
                <CardContent>
                    <Typography color="text.secondary">
                        {post.title}
                    </Typography>
                    <Typography  color="text.secondary">
                        {post.body}
                    </Typography>
                </CardContent>
            </StyleCardContainer>
        )
    })


    return (
        <div>
            {listaDePosts}
        </div>
    )
}
export default CardPostFeed