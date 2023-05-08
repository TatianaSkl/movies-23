import { CatalogApiService, searchMovies } from './movies-api';
import { createMarkupFilmsList } from './markup';
import { starRating } from './star-rating';
import { createPagination } from './pagination';

const searchForm = document.querySelector('.search-form');
const movieList = document.querySelector('.catalog__list');
const message = document.querySelector('.catalog__message');
console.log(message);
const paginationHidden = document.querySelector('.catalog-pagination');
const movieAPI = new CatalogApiService();

searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const formValue = e.currentTarget.elements.searchQuery.value.trim();
  message.classList.add('is-hidden');
  // paginationHidden.classList.remove('visually-hidden');

  if (formValue === '') {
    // movieList.innerHTML = '';
    paginationHidden.classList.add('visually-hidden'); //!
    movieList.innerHTML = '';
    // Notiflix.Notify.failure(
    //   "Sorry, the search string can't be empty. Please try again."
    // );
    console.log("Sorry, the search string can't be empty. Please try again.");
    searchForm.reset();
    return;
  }

  movieList.innerHTML = '';
  movieAPI.query = formValue;

  const dataSearch = await movieAPI.searchMovies();
  const pagination = createPagination(
    dataSearch.total_results,
    dataSearch.total_pages
  ); // TODO pagination
  const searchResults = await dataSearch.results.slice(0, 10);

  try {
    if (searchResults.length > 0) {
      const markupMovies = createMarkupFilmsList(searchResults);
      movieList.innerHTML = markupMovies;
      starRating();
      paginationHidden.classList.remove('visually-hidden');

      pagination.on('beforeMove', ({ page }) => {
        // movieList.innerHTML = '';
        movieAPI.searchMovies(page).then(data => {
          const movies = data.results.slice(0, 10);

          if (movies) {
            paginationHidden.classList.remove('visually-hidden');
            const markupSearchMovies = createMarkupFilmsList(movies);
            movieList.innerHTML = markupSearchMovies;
            starRating();
            window.scrollTo({
              top: 450,
              behavior: 'smooth',
            });
          }
        });
      });
    } else {
      // movieList.innerHTML = '<p>No results found</p>';
      message.classList.remove('is-hidden');
      paginationHidden.classList.add('visually-hidden');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    searchForm.reset();
  }
}
