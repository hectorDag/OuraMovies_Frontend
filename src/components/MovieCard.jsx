import React from 'react'

const MovieCard = ({ movie }) => {
    const imageUrl = `http://image.tmdb.org/t/p/w500${movie.poster_path}` 

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} className="movie-image" />
            <h2 className="movie-title">{movie.title}</h2>
        </div>
    )
}

export default MovieCard
