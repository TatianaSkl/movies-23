// import { onOpenModal } from './modal-window';
// import { filmCards } from './modal-window';

import { starRating } from './star-rating';
// import { getMovieDetails } from './modal-window';

const LibKey = 'myLibrary';

const libraryGallery = document.querySelector('.library-cards__list');
const alertMessage = document.querySelector('.alert__message');

export function getMovieFromLib(movie) {
  const { title, poster_path, vote_average, genres, release_date, id } = movie;
  // libraryGallery.innerHTML = '';

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
// console.log(library);

if (library.length < 1) {
  alertMessage.classList.remove('visually-hidden');
} else {
  alertMessage.classList.add('visually-hidden');
}

const markup = library.map(movie => {
  getMovieFromLib(movie);
});

// export function renderMoviesList() {
//   let library = JSON.parse(localStorage.getItem(LibKey)) || {};

//   return library.map(movie => {
//     getMovieFromLib(movie);
//   });
// }
