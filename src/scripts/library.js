import {
  loadIntoModal,
  onOpenModal,
  getMovieFromLibrary,
} from './modal-window';
import {filmCards } from './modal-window';

import { starRating } from './star-rating';
import { getMovieDetails } from './modal-window';

const LibKey = 'myLibrary';

const libraryGallery = document.querySelector('.library-cards__list');
const filmCards = document.querySelector('.js-film');
console.log(libraryGallery);
function getMovieFromLibrary(movie) {
  const { title, poster_path, vote_average, genres, release_date, id } = movie;

  const genresName = genres
    .map(genre => genre.name)
    .slice(0, 2)
    .join(', ');

  const libraryMarkup = `<li class="film-card js-card" data-id="${id}">

<img
    class="film-card__img"
    src="${`https://image.tmdb.org/t/p/w500${poster_path}`}"  
    alt="${title}" loading='lazy'
  />

  <div class="film-card__wrapper">
    <h2 class="film-card__title">${title}</h2>
    <ul class="film-card__description list">
      <li class="film-card__genres">${genresName} |</li>

      <li class="film-card__release-date">${release_date.split('-')[0]}</li>
    </ul>
    <span class="film-card__rating">
      <div class="rating">
        <div class="rating__body">
          <div class="rating__active"></div>
          <div class="rating__items">
            <input
              type="range"
              min="0"
              max="10"
              class="rating__item"
              value="${vote_average}"
              name="rating"
            />
          </div>
        </div>
      </div>
    </span>
  </div>
</li>`;

  libraryGallery.insertAdjacentHTML('beforeend', libraryMarkup);
  starRating();
}

// //TODO: Получить массив фильмов из локального хранилища
const library = JSON.parse(localStorage.getItem(LibKey)) || [];
console.log(library);

library.forEach(movie => {
  getMovieFromLibrary(movie);
  console.log(movie);
});

// function changeBtnLibrary(filmsId, filmBtn) {
//   if (getMovieFromLibrary(filmsId)) {
//     filmBtn.innerHTML = 'Remove from Library';
//   } else {
//     filmBtn.innerHTML = 'Add to Library';
//   }
// }
