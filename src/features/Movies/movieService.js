import axios from 'axios';

const API_URL = 'https://ouramovie-api.onrender.com/api/movies/';

const getMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

const setMovie = async (movieData) => {
    try {
        const response = await axios.post(API_URL, movieData); 
        return response.data;
    } catch (error) {
        console.error('Error creating movie: ', error);
        throw error;
    }
}

const deleteMovie = async (movieId) => {
    try {
        await axios.delete(`${API_URL}${movieId}`);
        return { message: 'Movie deleted' };
    } catch (error) {
        console.error('Error deleting movie: ', error);
        throw error;
    }
}

const likeMovie = async (movieId) => {
    try {
        const response = await axios.put(`${API_URL}${movieId}/like`); 
        return response.data; 
    } catch (error) {
        console.error('Error liking movie: ', error);
        throw error;
    }
}

const movieService = {
    getMovies,
    setMovie,
    deleteMovie,
    likeMovie
}

export default movieService;