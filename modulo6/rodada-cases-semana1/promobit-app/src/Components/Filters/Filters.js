import React from 'react'
import ButtonsFilter from './ButtonsFilter'
import { Div, DivT } from './Styled'

const Filters = () => {

    return (
        <Div >
            <div>
                <DivT>
                    <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                </DivT>

                <p>FILTRE POR:</p>

                <ButtonsFilter />
            </div>
        </Div>
    )
}

export default Filters
