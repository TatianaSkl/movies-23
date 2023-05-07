import { createMarkupFilmsList } from './markup';
import { CatalogApiService } from './movies-api';

const movieList = document.querySelector('.catalog__list');

const movieAPI = new CatalogApiService();

export async function renderTrendMovie() {
  const data = await movieAPI.getWeekTrendingMoviesInCatalog();
  const results = await data.results.slice(0, 10);

  try {
    if (results !== 0) {
      const markupTrendMovies = createMarkupFilmsList(results);
      movieList.insertAdjacentHTML('beforeend', markupTrendMovies);
    }
  } catch (error) {
    console.log(error);
  }
}

renderTrendMovie();
