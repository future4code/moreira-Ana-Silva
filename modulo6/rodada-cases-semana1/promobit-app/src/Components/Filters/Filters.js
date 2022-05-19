import React from 'react'
import ButtonsFilter from './ButtonsFilter'
import { Div, StyleTitulo } from './Styled'

const Filters = () => {

    return (
        <Div >
            <div>
                <StyleTitulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</StyleTitulo>
                <button>FILTRE POR</button>
                <ButtonsFilter />
            </div>
        </Div>
    )
}

export default Filters
