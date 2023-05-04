import axios from 'axios';

const API_KEY = '2c2e924badab09018363b97151da7944';
const MOVIE_ID = 'movie_id_here';
const MOVIE_VIDEOS_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}`;

async function getMovieVideos() {
  try {
    const response = await axios.get(MOVIE_VIDEOS_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
