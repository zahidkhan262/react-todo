import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import movieService from "./movieService";
import axios from 'axios'
import { M_API_URL, API_KEY } from '../helpers/APIRequest'
const initialState = {
    movies: [],
    movieList: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
}


// const movieName = 'iron'

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (query, thunkAPI) => {
    // console.log(query, "searchiiii")
    try {
        const response = await axios.get(`${M_API_URL}?apikey=${API_KEY}&s=${query}&type=movie`)
        // console.log(response?.data, "slice moviee")
        return response?.data.Search
    } catch (error) {
        console.log(error)
        const message = error.response && error.response.data && error.response.data.Search || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addWatchList: (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            const mList = state?.movies.find((item) => item.imdbID === action.payload)
            state.movieList.push(mList)
            console.log(mList.imdbID, "mList")
        },
        watchMovie: (state, action) => {
            const watched = state.movieList.filter((item) => item.imdbID !== action.payload)
            state.movieList = watched
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.movies = action.payload
                state.onSearch = action.payload
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
                state.movies = null
            })
    },
})

export default movieSlice.reducer
export const { addWatchList, watchMovie } = movieSlice.actions