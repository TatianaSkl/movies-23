import { createMarkupFilmsList } from "./markup";
import { CatalogApiService } from "./movies-api";

const movieList = document.querySelector('.catalog__list')

const movieAPI = new CatalogApiService()

export function renderTrendMovie() {
    movieAPI.getWeekTrendingMoviesInCatalog().then(data => {
        const markupTrendMovies = createMarkupFilmsList(data)

        console.log(data)
        movieList.innerHTML = markupTrendMovies;
    }).catch(error => {
        console.log(error)
    })
}

renderTrendMovie()