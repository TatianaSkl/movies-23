import { getDayTrendingMovies, getMovieVideos } from './movies-api';

export function renderHero() {
  const heroBg = document.getElementById('hero-bg');
  const heroContent = document.getElementById('hero-content');
  const heroMovie = document.getElementById('hero-movie');
  const heroImage = document.getElementById('hero-image');
  const heroMovieMob = document.getElementById('hero-movie-mob');

  getDayTrendingMovies().then(data => {
    const movies = data.results;
    if (movies.length === 0) {
      heroContent.innerHTML = `
        <h1 class="hero__title">Let’s Make Your Own Cinema</h1>
        <p class="hero__text">Is a guide to creating a personalized movie theater experience. You'll need a projector,
            screen, and speakers.</p>
        <p class="hero__description">
            Decorate your space, choose your films, and stock up on snacks for the full experience.
        </p>
        <a href="./catalog.html" class="btn hero__btn">Get Started</a>
      `;
    } else {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const movie = movies[randomIndex];
      const { backdrop_path, title, overview, vote_average, id } = movie;

      heroBg.style.backgroundImage = `linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%),url('https://image.tmdb.org/t/p/original/${backdrop_path}')`;
      heroImage.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`;
      heroMovieMob.innerHTML = `
        <h1 class="hero__title-movie">${title}</h1>
        <div class="hero__rating">${vote_average}</div>
        <p class="hero__text-movie">${overview}</p>
        <button class="btn hero__btn-movie" id="modal-hero-open-mob">Watch trailer</button>
      `;
      heroMovie.innerHTML = `
        <h1 class="hero__title-movie">${title}</h1>
        <div class="hero__rating">${vote_average}</div>
        <p class="hero__text-movie">${overview}</p>
        <button class="btn hero__btn-movie" id="modal-hero-open">Watch trailer</button>
      `;
      const openModalHeroBtn = document.getElementById('modal-hero-open');
      const closeModalHeroBtn = document.getElementById('modal-hero-close');
      const openModalHeroBtnMob = document.getElementById('modal-hero-open-mob');
      openModalHeroBtn.addEventListener('click', () => {
        showMovieTrailer(id);
        toggleModalHero();
      });
      openModalHeroBtnMob.addEventListener('click', () => {
        showMovieTrailer(id);
        toggleModalHero();
      });
      closeModalHeroBtn.addEventListener('click', toggleModalHero);
    }
  });
}

export function toggleModalHero() {
  const modalHero = document.getElementById('modal-hero');
  modalHero.classList.toggle('hero-is-hidden');
}

export function showMovieTrailer(movieId) {
  getMovieVideos(movieId).then(data => {
    const videos = data.results.filter(video => video.type === 'Trailer');
    if (videos.length === 0) {
      const modalError = document.querySelector('.modal-error');
      modalError.innerHTML = `<p>OOPS...
        We are very sorry!
        But we couldn’t find the trailer.</p>
      <picture>
        <source srcset="./images/desktop/modal-des.png 1x,
                    ./images/desktop/modal-des-2x.png 2x" media="(min-width:1280px)">
        <source srcset="./images/tablet/modal-tab.png 1x,
                    ./images/tablet/modal-tab-2x.png 2x" media="(min-width:768px)">
        <source srcset="./images/mobile/modal-mob.png 1x,
                    ./images/mobile/modal-mob-2x.png 2x" media="(min-width:320px)">
        <img srcset="./images/desktop/modal-des.png 1x, 
                    ./images/desktop/modal-des-2x.png 2x" src="./images/desktop/modal-des.png" alt="movie attributes">
      </picture>`;
      return;
    }
    const videoKey = videos[0].key;
    const trailerUrl = `https://www.youtube.com/embed/${videoKey}`;
    const modalVideo = document.querySelector('.modal-video');
    modalVideo.innerHTML = `<iframe src="${trailerUrl}" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowfullscreen></iframe>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
});
