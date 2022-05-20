import React from 'react'
import ButtonsFilter from './ButtonsFilter'
import { Div, StyleTitulo } from './Styled'

const Filters = (props) => {

    return (
        <Div >
            <div>
                <StyleTitulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</StyleTitulo>
                <p>FILTRE POR:</p>
                <ButtonsFilter />
            </div>
        </Div>
    )
}

export default Filters
