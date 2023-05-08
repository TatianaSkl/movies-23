import {
  getWeekTrendingMovies,
  getUpcomingMovies,
  getGenres,
} from './movies-api';
import { renderTrending, renderUpcoming } from './render-movies-home';
import { showTrending, showUpcoming } from './render-movies-home';
import { starRating } from './star-rating';
getGenres().then(data => {
  global.genres = data;
  renderTrending(getWeekTrendingMovies, showTrending);
  renderUpcoming(getUpcomingMovies, showUpcoming);
});
