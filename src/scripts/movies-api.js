import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '2c2e924badab09018363b97151da7944';

async function searchMovies(query) {
  const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
}

async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

async function getMovieVideos(movieId) {
  const response = await axios.get(`${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`);
  return response.data;
}

async function getUpcomingMovies() {
  const response = await axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`);
  return response.data;
}

async function getWeekTrendingMovies() {
  const response = await axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  return response.data;
}

async function getDayTrendingMovies() {
  const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export {
  searchMovies,
  getMovieDetails,
  getMovieVideos,
  getUpcomingMovies,
  getWeekTrendingMovies,
  getDayTrendingMovies,
};
