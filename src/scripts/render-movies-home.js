import { getWeekTrendingMovies, getUpcomingMovies, getMovieDetails } from './movies-api';
import { starRating } from './star-rating';
const LibKey = 'myLibrary';

export function renderTrending(renderFn, showFn) {
  const container = document.getElementById('trending');
  renderFn().then(data => {
    container.innerHTML = showFn(data.results.slice(0, 3)).join('');
  });
}

export function renderUpcoming(renderFn, showFn) {
  const container = document.getElementById('upcoming');
  renderFn().then(({ results }) => {
    const index = (Math.random() * (results.length - 1)).toFixed();
    const movie = results[index];
    container.innerHTML = showFn(movie);
    starRating();
    const id = movie.id;
    remindMe(id);
  });
}

export function showTrending(movies) {
  return movies.map(({ id, title, genre_ids, release_date, poster_path, vote_average }) => {
    return `
      <li class="trending__item js-card" data-id=${id}>
          <img class="trending__img" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
            <div class="trending__meta">
                <p class="trending__title">${title}</p> 
                <p class="trending__genres">${getGenreNames(genre_ids)} | ${
      release_date.split('-')[0]
    }</p>
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
  });
}
starRating();

export function showUpcoming(movie) {
  const {
    id,
    title,
    genre_ids,
    release_date,
    poster_path,
    vote_average,
    overview,
    vote_count,
    popularity,
    backdrop_path,
  } = movie;
  return `<div class="upcoming__item">
  <picture>
  <source srcset="https://image.tmdb.org/t/p/original${poster_path}" media="(max-width: 767px)" sizes="(min-width: 480px)">
  <source srcset="https://image.tmdb.org/t/p/original${backdrop_path}" media="(min-width: 768px)" sizes="(min-width: 768px)">
     <img class="upcoming__img" src=https://image.tmdb.org/t/p/original${backdrop_path} alt="${title}" loading="lazy">
  </picture>
     <div class="upcoming__meta">
<p class="upcoming__title">${title}</p>
<div class="upcoming__div">
<div class="upcoming__container">
<p class="upcoming__info">Release Date</p>
<p class="upcoming__info">Vote / Votes</p>
<p class="upcoming__info">Popularity</p>
<p class="upcoming__info">Genre(s)</p>
</div>
<div class="upcoming__container">
<p class="upcoming__info upcoming__date">${release_date.split('-').reverse().join('.')}</p>
<p class="upcoming__info"><span class="vote-background">${vote_average}</span> / <span class="vote-background">${vote_count}</span></p>
<p class="upcoming__info">${popularity}</p>
<p class="upcoming__info">${getGenreNames(genre_ids)}</p>
</div>
</div>
<p class="upcoming__about">ABOUT<p>
<p class="upcoming__overview">${overview}</p>
<button type="button" class="btn" data-id="${id}" id="btn__upcoming">Remind me</button>
     </div>
    </div>`;
}

function getGenreNames(genreIds) {
  const genreNames = [];
  const collection = global.genres.genres;
  const res = genreIds.slice(0, 2).map(function (genreId) {
    return collection.find(function (genre) {
      return genre.id == genreId;
    }).name;
  });
  return res.join(', ');
}

async function remindMe(idMovie) {
  const library = JSON.parse(localStorage.getItem(LibKey)) || [];
  const filmIdsArr = library.map(item => item.id);
  try {
    const data = await getMovieDetails(Number(idMovie));
    const btn = document.getElementById('btn__upcoming');

    if (filmIdsArr.includes(Number(idMovie))) {
      btn.textContent = 'Remove from my library';
    } else {
      btn.textContent = 'Remind me';
    }

    btn.addEventListener('click', () => {
      if (btn.textContent === 'Remind me') {
        const library = JSON.parse(localStorage.getItem(LibKey)) || [];
        library.push(data);
        localStorage.setItem(LibKey, JSON.stringify(library));
        btn.textContent = 'Added to my library';
        btn.disabled = true;
        btn.classList.add('disabled');
      } else {
        return;
      }
    });
  } catch (err) {
    return;
  }
}
