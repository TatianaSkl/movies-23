import { getTrendingMovies, getUpcomingMovies } from './movies-api';
import { renderTrending, renderUpcoming } from './render-movies';
import { showTrending, showUpcoming } from './render-movies';
renderTrending(getTrendingMovies, showTrending);
renderUpcoming(getUpcomingMovies, showUpcoming);
