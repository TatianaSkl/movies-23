import {getMovieFromLibrary} from './modal-window';
// import { CatalogApiService } from './movies-api';
// import { getGenres } from './movies-api';
import { starRating } from './star-rating';
import {getMovieDetails} from './modal-window';
// import {createMarkupFilmsList} from './markup';

const libraryGallery = document.querySelector('.library-cards__list');
 






const library = JSON.parse(localStorage.getItem('movieLibrary')) || [];
console.log(library);


