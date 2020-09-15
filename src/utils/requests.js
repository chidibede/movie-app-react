import env from '../config/apiKey'
const API_KEY = env.API_KEY

const requests = {
    fetchTopRatedMovies: `/top_rated?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;