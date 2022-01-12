import React from 'react';
import styled from 'styled-components';

function CardPequeno(props) {

const CardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100;
    gap: 10px
`;

const CardPequenoH3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
`;

const ImgCardPequeno = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`;

    return (
        <CardPequeno>
            <ImgCardPequeno src={props.icone} />
            <h4>{ props.titulo}</h4>
            <CardPequenoH3>{ props.informacao}</CardPequenoH3>
        </CardPequeno>
    )
}

export default CardPequeno;