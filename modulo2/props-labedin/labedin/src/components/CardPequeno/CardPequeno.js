import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
                <h4>{ props.titulo}</h4>
                <h3>{ props.informacao}</h3>
        </div>
    )
}

export default CardPequeno;