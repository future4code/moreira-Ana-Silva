import React from 'react'
import ButtonsFilter from './ButtonsFilter'
import { Div, DivT } from './Styled'

const Filters = () => {

    // const [genres, setGenres] = useState([])
    // const [activeGenre, setActiveGenre] = useState()
    // const [buttonCliked, setButtonClicked] = useState(false)
    
    // useEffect(() => {

    //     getMovies(page);
    //     getGenres();

    // }, [page]);

    // const getGenres = () => {
    //     axios
    //         .get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR`)
    //         .then((response) => {
    //             setGenres(response.data.genres);
    //             setActiveGenre(response.data.genres)
    //         })
    //         .catch((error) => {
    //             alert(error.message);
    //         });
    // };

    // const movieGenres = genres.map((genre) => {

    //     const onClickCategory = () => {
    //         if (buttonCliked === false) {
    //             setButtonClicked(true);
    //             setActiveGenre(genre.id);

    //         } else if (buttonCliked === true) {
    //             setButtonClicked(false);
    //             setActiveGenre("");
    //         }
    //     };

    //     return <button key={genre.id} onClick={() => onClickCategory()}>{genre.name}</button>
    // });

    // const movieCatalog = movies.filter((movie) => {
    //     if (activeGenre > 0) {
    //       return movie.genre_ids.includes(activeGenre)
    //     } else {
    //       return movie
    //     }
    //   })

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
