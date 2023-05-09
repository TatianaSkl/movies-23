export function createMarkupFilmsList(moviesData) {
  const defaultImg = '';

  return moviesData
    .map(movie => {
      const {
        genres,
        genre_ids,
        id,
        poster_path,
        title,
        vote_average,
        release_date,
      } = movie;
      return `<li class="film-card" data-id="${id}">
  <img
    class="film-card__img"
    src="${`https://image.tmdb.org/t/p/w500${poster_path}` || defaultImg}"  
    alt="${title}"
  />

  <div class="film-card__wrapper">
    <h2 class="film-card__title">${title}</h2>
    <ul class="film-card__description list">
      <li class="film-card__genres">${getGenreNames(genre_ids)} |</li>

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
    })
    .join('');
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
