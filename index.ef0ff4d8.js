var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},i=n.parcelRequireadfa;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in t){var i=t[n];delete t[n];var o={id:n,exports:{}};return e[n]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){t[n]=e},n.parcelRequireadfa=i),i("4M9Ff"),i("1H4bF"),i("asmXU");var o=i("abWUW"),a=(o=i("abWUW"),i("55Csz"));function s(n,e){const t=document.getElementById("trending");n().then((n=>{t.innerHTML=e(n.results.slice(0,3)).join("")}))}function r(n,e){const t=document.getElementById("upcoming");n().then((({results:n})=>{const i=n[(Math.random()*(n.length-1)).toFixed()];t.innerHTML=e(i),(0,a.starRating)();!async function(n){const e=(JSON.parse(localStorage.getItem("myLibrary"))||[]).map((n=>n.id));try{const t=await(0,o.getMovieDetails)(Number(n)),i=document.getElementById("btn__upcoming");e.includes(Number(n))?i.textContent="Remove from my library":i.textContent="Remind me",i.addEventListener("click",(()=>{if("Remind me"===i.textContent){const n=JSON.parse(localStorage.getItem("myLibrary"))||[];n.push(t),localStorage.setItem("myLibrary",JSON.stringify(n)),i.textContent="Remove from my library"}}))}catch(n){return}}(i.id)}))}function c(n){return n.map((({id:n,title:e,genre_ids:t,release_date:i,poster_path:o,vote_average:a})=>`\n      <li class="trending__item js-card" data-id=${n}>\n          <img class="trending__img" src=https://image.tmdb.org/t/p/original${o} alt="${e}" loading="lazy">\n            <div class="trending__meta">\n                <p class="trending__title">${e}</p> \n                <p class="trending__genres">${l(t)} | ${i.split("-")[0]}</p>\n      <span class="film-card__rating">\n      <div class="rating">\n        <div class="rating__body">\n          <div class="rating__active"></div>\n          <div class="rating__items">\n            <input\n              type="range"\n              min="0"\n              max="10"\n              class="rating__item"\n              value="${a}"\n              name="rating"\n            />\n          </div>\n        </div>\n      </div>\n    </span>\n</div>\n      </li>`))}function d(n){const{id:e,title:t,genre_ids:i,release_date:o,poster_path:a,vote_average:s,overview:r,vote_count:c,popularity:d,backdrop_path:p}=n;return`<div class="upcoming__item">\n  <picture>\n  <source srcset="https://image.tmdb.org/t/p/original${a}" media="(max-width: 767px)" sizes="(min-width: 480px)">\n  <source srcset="https://image.tmdb.org/t/p/original${p}" media="(min-width: 768px)" sizes="(min-width: 768px)">\n     <img class="upcoming__img" src=https://image.tmdb.org/t/p/original${p} alt="${t}" loading="lazy">\n  </picture>\n     <div class="upcoming__meta">\n<p class="upcoming__title">${t}</p>\n<div class="upcoming__div">\n<div class="upcoming__container">\n<p class="upcoming__info">Release Date</p>\n<p class="upcoming__info">Vote / Votes</p>\n<p class="upcoming__info">Popularity</p>\n<p class="upcoming__info">Genre(s)</p>\n</div>\n<div class="upcoming__container">\n<p class="upcoming__info upcoming__date">${o.split("-").reverse().join(".")}</p>\n<p class="upcoming__info"><span class="vote-background">${s}</span> / <span class="vote-background">${c}</span></p>\n<p class="upcoming__info">${d}</p>\n<p class="upcoming__info">${l(i)}</p>\n</div>\n</div>\n<p class="upcoming__about">ABOUT<p>\n<p class="upcoming__overview">${r}</p>\n<button type="button" class="btn" data-id="${e}" id="btn__upcoming">Remind me</button>\n     </div>\n    </div>`}function l(e){const t=n.genres.genres;return e.slice(0,2).map((function(n){return t.find((function(e){return e.id==n})).name})).join(", ")}(0,a.starRating)();document.querySelector("#btn__upcoming");(0,o.getGenres)().then((e=>{n.genres=e,s(o.getWeekTrendingMovies,c),r(o.getUpcomingMovies,d);document.querySelector("#btn__upcoming")})),(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalBackdrop:document.querySelector("[data-modal-backdrop]")};function e(){n.modal.classList.toggle("is-hidden");document.querySelector("body").classList.toggle("modal-open"),document.addEventListener("keydown",t)}function t(i){"Escape"!==i.key||n.modal.classList.contains("is-hidden")||(e(),document.removeEventListener("keydown",t))}n.openModalBtn.addEventListener("click",e),n.closeModalBtn.addEventListener("click",e),n.modalBackdrop.addEventListener("click",(function(t){t.target===n.modalBackdrop&&e()}))})(),i("kGsIp");
//# sourceMappingURL=index.ef0ff4d8.js.map
