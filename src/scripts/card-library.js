import { createMarkupFilmsList } from './markup';
import { CatalogApiService } from './movies-api';
import { starRating } from './star-rating';
import { createPagination } from './pagination';

const movieList = document.querySelector('.library-cards');

const movieAPI = new CatalogApiService();

export async function renderTrendMovie() {
  const data = await movieAPI.getWeekTrendingMoviesInCatalog();
  const pagination = createPagination(data.total_results, data.total_pages); // TODO pagination
  const results = await data.results;
  try {
    if (results !== 0) {
      const markupTrendMovies = createMarkupFilmsList(results);
      movieList.insertAdjacentHTML('beforeend', markupTrendMovies);
      starRating();
      // TODO pagination ================
      pagination.on('beforeMove', ({ page }) => {
        movieList.innerHTML = '';
        movieAPI.getWeekTrendingMoviesInCatalog(page).then(data => {
          const movies = data.results;

          if (movies) {
            const markupTrend = createMarkupFilmsList(movies);
            movieList.innerHTML = markupTrend;
            starRating();
            window.scrollTo({
              top: 450,
              behavior: 'smooth',
            });
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

renderTrendMovie();
