const addBtnRef = document.querySelector('#btn__upcoming');
import {getMovieDetails} from './modal-window';

import {
  getWeekTrendingMovies,
  getUpcomingMovies,
  getGenres,
} from './movies-api';
import { renderTrending, renderUpcoming } from './render-movies-home';
import { showTrending, showUpcoming } from './render-movies-home';
getGenres().then(data => {
  global.genres = data;
  renderTrending(getWeekTrendingMovies, showTrending);
  renderUpcoming(getUpcomingMovies, showUpcoming);
});
