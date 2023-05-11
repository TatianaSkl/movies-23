import { getMovieDetails } from './movies-api';

const filmCards = document.querySelector('.js-film');
const modBackdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.modal__close-btn');
const modalRef = document.querySelector('.modal__wrap');
const modalListRef = document.querySelector('.cards-film');

filmCards.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);
modBackdrop.addEventListener('click', onBackDropClick);

// TODO: Открываем модалку
export function onOpenModal(event) {
  const getParentalEl = event.target.closest('.js-card');

  if (!getParentalEl) {
    return;
  }
  // записываем id
  const movieId = getParentalEl.dataset.id;

  loadIntoModal(movieId);

  modBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeyPress);
}

// закрываем модалку
function onCloseModal() {
  modalListRef.innerHTML = '';
  document.body.classList.remove('modal-open');
  modBackdrop.classList.add('is-hidden');
}

// закрываем по клику на backdrop
function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// закрываем по нажатию Escape
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
    window.removeEventListener('keydown', onEscapeKeyboard);
  }
}

// загружаем карточку в модалку

async function loadIntoModal(id) {
  try {
    const data = await getMovieDetails(id);

    const createModalCard = createCardMarkup(data);
    modalListRef.innerHTML = createModalCard;

    const filmAddBtn = document.querySelector('.film-add__btn');

    filmAddBtn.addEventListener('click', () => {
      // if (filmAddBtn.textContect === 'Add to my library') {
      addToLibrary(data);
      // filmAddBtn.innerHTML = 'Remove from my library';
      // }
    });
  } catch (err) {
    modalListRef.innerHTML =
      '<div class="modal__empty">Sorry, info is unavailable</div>';
    return;
  }
}

//  добавляем id в localStorage

function addToLibrary(movie) {
  // Получить массив фильмов из локального хранилища
  const library = JSON.parse(localStorage.getItem('movieLibrary')) || [];

  //  Проверить наличие фильма в библиотеке
  const existingMovie = library.find(item => item.id === movie.id);
  const existingIndex = library.indexOf(existingMovie);
  if (existingMovie) {
    console.log('Фильм есть');
    library.splice(existingIndex, 1);
    localStorage.setItem('movieLibrary', JSON.stringify(library));
    return;
  }

  //  Добавить фильм в массив
  library.push(movie);

  // Сохранять массив в локальном хранилище
  localStorage.setItem('movieLibrary', JSON.stringify(library));

  console.log('Фильм в библиотеке');
}

// рендерим разметку в карточку
function createCardMarkup(data) {
  const {
    original_title,
    id,
    genre_names,
    genres,
    vote_average,
    poster_path,
    overview,
    popularity,
    vote_count,
  } = data;

  const genreName = genres ? genres.map(genre => genre.name) : [];
  const genresList = genreName.slice(0, 2).join(', ');

  return `<li class="film--add" data-id="${id}">
  <div class="film-add__wrap">
    <img class="film-add__img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${original_title}" loading="lazy" />
  </div>
  <div class="film-add__desc">
    <h2 class="film-add__title">${original_title}</h2>

    <ul class="film-add__list list">
      <li class="film-add__item">
        <span class="film-add__subtitle">Vote / Votes</span
        ><span class="film-add__span votes"
          >${vote_average} / ${vote_count}</span
        >
      </li>
      <li class="film-add__item">
        <span class="film-add__subtitle">Popularity</span
        ><span class="film-add__span">${popularity}</span>
      </li>
      <li class="film-add__item">
        <span class="film-add__subtitle">Genre</span
        ><span class="film-add__span genres">${genresList}</span>
      </li>
    </ul>

    <div class="film-add__wrap-desc">
      <h3 class="film-add__about">About</h3>
      <p class="film-add__text">${overview}</p>
    </div>

    <button type="button" class="film-add__btn btn">Add to my library</button>
  </div>
</li>`;
}
