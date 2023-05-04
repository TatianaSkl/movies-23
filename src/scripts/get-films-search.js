import axios from 'axios';

const API_KEY = '2c2e924badab09018363b97151da7944';
const SEARCH_QUERY = 'search_query_here';
const SEARCH_MOVIES_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${SEARCH_QUERY}`;

async function searchMovies() {
  try {
    const response = await axios.get(SEARCH_MOVIES_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
