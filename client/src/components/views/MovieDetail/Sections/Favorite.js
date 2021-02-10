import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId       = props.movieId
    const userFrom      = props.userFrom
    const movieTitle    = props.movieInfo.movieTitle
    const moviePost     = props.movieInfo.backdrop_path
    const movieRunTime  = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    useEffect(() => {
        let variables = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
        .then(response => {
            setFavoriteNumber(response.data.favoriteNumber)
            if(response.data.success) {
                //setFavoriteNumber(response.data.favoriteNumber)
            } else {

            }
        })

        Axios.post('/api/favorite/favorited', variables)
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited)
            } else {

            }
        })

    }, [])

    return (
        <div>
            <button>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
