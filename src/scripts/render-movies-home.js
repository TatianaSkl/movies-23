import {
  getWeekTrendingMovies,
  getUpcomingMovies,
  getMovieDetails,
} from './movies-api';

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
    const btn = document.getElementById('btn__upcoming');
    btn.addEventListener('click', remindMe);
  });
}

export function showTrending(movies) {
  return movies.map(
    ({ id, title, genre_ids, release_date, poster_path, vote_average }) => {
      return `
      <li class="trending__item" data-id=${id}>
            <img class="trending__img" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
            <p class="trending__title">${title}</p>  
            <div class="trending__meta">
               
                <p class="trending__genres">${getGenreNames(genre_ids)} | ${
        release_date.split('-')[0]
      }</p>
                <p class="trending__rating">${vote_average}</p>
</div>
        </li>`;
    }
  );
}
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
<p class="upcoming__info upcoming__date">${release_date
    .split('-')
    .reverse()
    .join('.')}</p>
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

function remindMe(evt) {
  const movieId =
    document.getElementById('btn__upcoming').attributes['data-id'].value;
  getMovieDetails(movieId).then(movie => {
    localStorage.setItem(movieId, JSON.stringify(movie));
  });
}
