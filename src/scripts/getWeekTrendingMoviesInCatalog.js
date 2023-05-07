import { createMarkupFilmsList } from './markup';
import { CatalogApiService } from './movies-api';
import { starRating } from './star-rating';
import { createPagination } from './pagination';

const movieList = document.querySelector('.catalog__list');

const movieAPI = new CatalogApiService();

export async function renderTrendMovie() {
  const data = await movieAPI.getWeekTrendingMoviesInCatalog();
  // console.log(data);
  const pagination = createPagination(data.total_results, data.total_pages); // TODO pagination ====
  // console.log(pagination);

  const results = await data.results.slice(0, 10);

  try {
    if (results !== 0) {
      const markupTrendMovies = createMarkupFilmsList(results);
      movieList.insertAdjacentHTML('beforeend', markupTrendMovies);
      starRating();

      // TODO pagination ================
      pagination.on('beforeMove', ({ page }) => {
        movieList.innerHTML = '';
        movieAPI.getWeekTrendingMoviesInCatalog(page).then(data => {
          const movies = data.results.slice(0, 10);
          if (movies) {
            console.log(results);
            const markupTrend = createMarkupFilmsList(movies);
            movieList.innerHTML = markupTrend;
            starRating();
            // scrollTop();
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

renderTrendMovie();
