import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieService from './movieService'; 

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createMovie = createAsyncThunk('movies/create', async (movieData, thunkAPI) => {
    try {
        const response = await movieService.setMovie(movieData); 
        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getMovies = createAsyncThunk('movies/get', async (_, thunkAPI) => {
    try {
        const response = await movieService.getMovies(); 
        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteMovie = createAsyncThunk('movies/delete', async (movieId, thunkAPI) => {
    try {
        await movieService.deleteMovie(movieId); 
        return { id: movieId };
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const likeMovie = createAsyncThunk('movies/like', async (movieId, thunkAPI) => {
    try {
        const response = await movieService.likeMovie(movieId); 
        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMovie.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.movies.push(action.payload);
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteMovie.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.movies = state.movies.filter((movie) => movie.id !== action.payload.id); 
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(likeMovie.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(likeMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
                if (index !== -1) {
                    state.movies[index] = action.payload;
                }
            })
            .addCase(likeMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;