export function createMarkupFilmsList(moviesData) {
    return moviesData.map(movie => {
        const { genres, id, poster_path, title, vote_average, release_date } = movie;
    return `<li class="film-card" data-id=${id}> 
            <img class="film-cardimg" src='${`https://image.tmdb.org/t/p/w500${poster_path}`}' alt="film" /> 
 
            <div class="film-cardwrapper"> 
              <h2 class="film-cardtitle">${title}</h2> 
              <ul class="film-carddescription list"> 
                <li class="film-cardgenres">${genres}</li> 
 
                <li class="film-cardrelease-date">${release_date}</li> 
              </ul> 
              <span class="film-card__rating">${vote_average.toFixed(1)}</span> 
            </div> 
          </li>`
        })
}
