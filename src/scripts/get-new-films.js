import axios from 'axios';

const API_KEY = '2c2e924badab09018363b97151da7944';
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

async function getUpcomingMovies() {
  try {
    const response = await axios.get(UPCOMING_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
