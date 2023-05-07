export function createMarkupFilmsList(moviesData) {
  return moviesData
    .map(movie => {
      const { genres, id, poster_path, title, vote_average, release_date } =
        movie;
      return `<li class="film-card" data-id=${id}> 
            <img class="film-card__img" src='${`https://image.tmdb.org/t/p/w500${poster_path}`}'  alt="film" /> 
 
            <div class="film-card__wrapper"> 
              <h2 class="film-card__title">${title}</h2> 
              <ul class="film-card__description list"> 
                <li class="film-card__genres">${genres} |</li> 
 
                <li class="film-card__release-date">${release_date}</li> 
              </ul> 
              <span class="film-card__rating">${vote_average.toFixed(1)}</span> 
            </div> 
          </li>`;
    })
    .join('');
}

