import React, {useState} from 'react'
import { BASE_URL } from '../../Constants/Urls'
import { API_KEY } from '../../Constants/APIKey'
import UseRequestData from '../../Hooks/UseRequestData';
import { Container } from './Styled'

const ButtonsFilter = () => {

    const [data] = UseRequestData([], `${BASE_URL}/genre/movie/list?${API_KEY}&language=en-US`)
   
    const [value, setValue] = React.useState(0);
    const [genre, setGenre] = useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleGenre = (value) => {
        setGenre(value)
    }

    const genreList = data?.genres && data?.genres
    .filter((rest) => {
        return rest.name.includes(genre)
    })

    return (
        <Container
            onChange={handleChange}
            value={value}>

            <div>
                <button onClick={() => handleGenre('Action')}>Ação</button>
                <button onClick={() => handleGenre('Adventure')}>Aventura</button>
                <button onClick={() => handleGenre('Animation')}>Animação</button>
                <button onClick={() => handleGenre('Comedy')}>Comédia</button>
                <button onClick={() => handleGenre('Crime')}>Crime</button>
                <button onClick={() => handleGenre('Documentary')}>Documentário</button>
                <button onClick={() => handleGenre('Drama')}>Drama</button>
                <button onClick={() => handleGenre('Family')}>Família</button>
                <button onClick={() => handleGenre('Fantasy')}>Fantasia</button>
                <button onClick={() => handleGenre('History')}>História</button>
            </div>

            <div>
                <button onClick={() => handleGenre('Horror')}>Terror</button>
                <button onClick={() => handleGenre('Music')}>Música</button>
                <button onClick={() => handleGenre('Myster')}>Mistério</button>
                <button onClick={() => handleGenre('Romance')}>Romance</button>
                <button onClick={() => handleGenre('Science Fiction')}>Ficção Científica</button>
                <button onClick={() => handleGenre('TV Movie')}>Cinema TV</button>
                <button onClick={() => handleGenre('Thriller')}>Thriller</button>
                <button onClick={() => handleGenre('War')}>Guerra</button>
                <button onClick={() => handleGenre('Western')}>Faroeste</button>
            </div>

        </Container>
    )
}

export default ButtonsFilter
