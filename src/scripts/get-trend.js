import axios from 'axios';

const API_KEY = '2c2e924badab09018363b97151da7944';
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

async function getTrendingMovies() {
  try {
    const response = await axios.get(TRENDING_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
