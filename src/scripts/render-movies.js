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
      return `<li class="films__item" data-id=${id}>
                <div class="films__img">
                <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
        </div>
                <div class="films__description">
                  <p class="films__title">${title}</p>
                  <div class="films__meta">
                    <p class="films__genres">${genre_ids}</p>
                    <p class="films__data">${release_date}</p>
                    <span class="films__rating">${vote_average}</span>
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
     <div>
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
