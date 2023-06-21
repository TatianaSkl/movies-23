import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '214e13c97c55baca13ab56614ecbad3f';

class CatalogApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }
  async searchMovies(page = 1) {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.query}&page=${page}`
    );
    // this.incrementPage();
    return response.data;
  }
  async getWeekTrendingMoviesInCatalog(page = 1) {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    // this.incrementPage();
    return response.data;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
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

async function getGenres() {
  const response = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  return response.data;
}

export {
  CatalogApiService,
  getMovieDetails,
  getMovieVideos,
  getUpcomingMovies,
  getWeekTrendingMovies,
  getDayTrendingMovies,
  getGenres,
};
