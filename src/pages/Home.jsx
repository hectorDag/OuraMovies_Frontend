import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import movieService from '../features/Movies/movieService' 

const Home = () => {
  const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieList = await movieService.getMovies() 
                setMovies(movieList)
            } catch (error) {
                console.error("An error occurred while fetching the movies: ", error)
            }
        }

        fetchMovies()
    }, [])

    return (
        <div className="home-page">
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
export default Home

