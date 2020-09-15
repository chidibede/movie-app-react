import env from '../config/apiKey'
const API_KEY = env.API_KEY

const requests = {
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
}

export default requests;