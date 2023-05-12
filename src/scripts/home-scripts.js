const addBtnRef = document.querySelector('#btn__upcoming');
const LibKey = 'myLibrary';

import {
  getWeekTrendingMovies,
  getUpcomingMovies,
  getGenres,
} from './movies-api';
import { renderTrending, renderUpcoming } from './render-movies-home';
import { showTrending, showUpcoming } from './render-movies-home';
getGenres().then(data => {
  global.genres = data;
  renderTrending(getWeekTrendingMovies, showTrending);
  renderUpcoming(getUpcomingMovies, showUpcoming);
  const addBtnRef = document.querySelector('#btn__upcoming');
});

// addBtnRef.addEventListener('click', () => {
//   const addBtnRef = event.target.closest('#btn__upcoming');

//   if (!addBtnRef) {
//     return;
//   }

//   // записываем id
//   const btnId = getParentalEl.dataset.id;

//   const library = JSON.parse(localStorage.getItem(LibKey)) || [];

//   const filmIdsArr = library.map(item => item.id);

//   if (filmIdsArr.includes(Number(btnId))) {
//     filmAddBtn.textContent = 'Remove from my library';
//   } else {
//     filmAddBtn.textContent = 'Remind me';
//   }
// });
