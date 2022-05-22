import React from 'react'
import { Container } from './Styled'

const ButtonsFilter = (props) => {

    const [value, setValue] = React.useState(0);
    const { handleGenre } = props

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Container onChange={handleChange} value={value}>

            <div>
                <button onClick={() => handleGenre('')}>Ação</button>
                <button>Aventura</button>
                <button>Animação</button>
                <button>Comédia</button>
                <button>Crime</button>
                <button>Documentário</button>
                <button>Drama</button>
                <button>Família</button>
                <button>Fantasia</button>
                <button>História</button>
            </div>

            <div>
                <button>Terror</button>
                <button>Música</button>
                <button>Mistério</button>
                <button>Romance</button>
                <button>Ficção Científica</button>
                <button>Cinema TV</button>
                <button>Thriller</button>
                <button>Guerra</button>
                <button>Faroeste</button>
            </div>

        </Container>
    )
}

export default ButtonsFilter
