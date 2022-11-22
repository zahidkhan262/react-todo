import axios from 'axios'
import { M_API_URL, API_KEY } from '../helpers/APIRequest'

const getMovie = async (movieName) => {
    const response = await axios.get(M_API_URL + `?apikey=${API_KEY}&s=${movieName}&type=movie`)
    console.log(response.data, "moviee")
    return response?.data
}
const movieService = {
    getMovie
}
export default movieService