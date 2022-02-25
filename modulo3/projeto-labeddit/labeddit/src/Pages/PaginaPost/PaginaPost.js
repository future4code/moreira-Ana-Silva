import React from 'react'
import useProtected from '../../Hooks/UseProtected'

function PaginaPost() {

    useProtected()

    return (
        <div>
            <h1>PÁGINA DE POST</h1>
        </div>
    )

}

export default PaginaPost