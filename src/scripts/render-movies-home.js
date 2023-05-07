import {
  getWeekTrendingMovies,
  getUpcomingMovies,
  getMovieDetails,
} from './movies-api';

export function renderTrending(renderFn, showFn) {
  const container = document.getElementById('trending');
  renderFn().then(data => {
    container.innerHTML = showFn(data.results.slice(0, 3));
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
            <div class="trending__description">
                <div class="trending__meta">
                              <h4 class="w-100">${title}</h4>
                    <p >${getGenreNames(genre_ids)} | ${
        release_date.split('-')[0]
      }</p>
                <p>${vote_average}</p>
                </div>
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
     <img class="upcoming__img" src=https://image.tmdb.org/t/p/original${backdrop_path} alt="${title}" loading="lazy">
     <div class="upcoming__meta">
     <table class="table">
<tbody>
<tr>
<th><h2>${title}</h2></th>
</tr>
<tr>
<th>Release Date</th><td>${release_date.split('-').reverse().join('.')}</td>
</tr>
<tr>
<th>Vote/Votes</th><td>${vote_average + '/' + vote_count}</td>
</tr>
<tr>
<th>Popularity</th><td>${popularity}</td>
</tr>
<tr>
<th>Genre(s)</th><td>${getGenreNames(genre_ids)}</td>
</tr>
<tr rowspan="2">
<th colspan="2">ABOUT</th>
</tr>
<tr>
<td colspan="2">${overview}</th>
</tr>
</tbody>
</table>
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
