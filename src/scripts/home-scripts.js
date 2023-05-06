import { getWeekTrendingMovies, getUpcomingMovies } from './movies-api';
import { renderTrending, renderUpcoming } from './render-movies-home';
import { showTrending, showUpcoming } from './render-movies-home';
renderTrending(getWeekTrendingMovies, showTrending);
renderUpcoming(getUpcomingMovies, showUpcoming);
