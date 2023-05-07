import { CatalogApiService } from './movies-api';
import { createMarkupFilmsList } from './markup';

const searchForm = document.querySelector('.search-form');
const movieList = document.querySelector('.catalog__list');
const movieAPI = new CatalogApiService();

searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const formValue = e.currentTarget.elements.searchQuery.value.trim();

  movieList.innerHTML = '';
  movieAPI.query = formValue;


  const dataSearch = await movieAPI.searchMovies();
  const searchResults = await dataSearch.results.slice(0, 10);

  try {
    if (searchResults.length > 0) {
      const markupSearchMovies = createMarkupFilmsList(searchResults);
      movieList.innerHTML = markupSearchMovies;
    } else {
      movieList.innerHTML = '<p>No results found</p>';
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    searchForm.reset()
  }
}