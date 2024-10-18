const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.API_KEY
const fetchMovieApi = async (pathname, query = "") => {
    try {
        const res = await fetch(`${API_URL}${pathname}?api_key=${API_KEY}&${query}`) 
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}
const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular")
}
const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated")
}
const getSingleCategory = async (genreId) => {
    return fetchMovieApi("/discover/movie", `with_genres=${genreId}`)
}
const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list")
}
const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`)
}
export {
    fetchMovieApi,
    getPopularMovies,
    getTopRatedMovies,
    getSingleCategory,
    getCategories,
    getMovie
} 
