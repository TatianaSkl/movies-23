import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '2c2e924badab09018363b97151da7944';

async function searchMovies() {
  const query = '';
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieDetails() {
  const movieId = '';
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieVideos() {
  const movieId = '';
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getUpcomingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/upcoming?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  searchMovies,
  getMovieDetails,
  getMovieVideos,
  getUpcomingMovies,
  getTrendingMovies,
};
