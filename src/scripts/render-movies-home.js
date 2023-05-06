import { getTrendingMovies, getUpcomingMovies } from './movies-api';

export function renderTrending(renderFn, showFn) {
  const container = document.getElementById('trending');
  renderFn().then(data => {
    container.innerHTML = showFn(data.results.slice(0, 3));
  });
}

export function renderUpcoming(renderFn, showFn) {
  const container = document.getElementById('upcoming');
  renderFn().then(data => {
    container.innerHTML = showFn(data.results.slice(0, 1)[0]);
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
                <div class="w-60">  
                    <p >${title}</p>
                    <p >${genre_ids} | ${release_date.split('-')[0]}</p>
                </div>
                <div class="trending__rating pull-right w-40">${vote_average}</div>
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
  } = movie;
  return `<div>
     <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
     <div class="upcoming__item">
     <dl>
     <dt>${title}</dt>

     <dt>Release date</dt>
     <dd>${release_date}</dd>

     <dt>Vote / Votes</dt>
     <dd>${vote_average} / ${vote_count}</dd>

     <dt>Popularity</dt>
     <dd>${popularity}</dd>

     <dt>Genre</dt>
     <dd>${genre_ids.join(', ')}</dd>
     
    <dt>ABOUT</dt>
    <dd>${overview}</dd>
     </dl>
     </div>
    </div>`;
}
