!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},i=n.parcelRequireadfa;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in e){var i=e[n];delete e[n];var a={id:n,exports:{}};return t[n]=a,i.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(n,t){e[n]=t},n.parcelRequireadfa=i),i("l122l"),i("552T0"),i("b5EgB"),i("4OBAQ");var a=i("algKM"),c=(a=i("algKM"),i("3hLJb"));function o(n,t){var e=document.getElementById("upcoming");n().then((function(n){var i=n.results,a=i[(Math.random()*(i.length-1)).toFixed()];e.innerHTML=t(a),(0,c.starRating)(),document.getElementById("btn__upcoming").addEventListener("click",d)}))}function s(n){return n.map((function(n){var t=n.id,e=n.title,i=n.genre_ids,a=n.release_date,c=n.poster_path,o=n.vote_average;return'\n      <li class="trending__item js-card" data-id='.concat(t,'>\n          <img class="trending__img" src=https://image.tmdb.org/t/p/original').concat(c,' alt="').concat(e,'" loading="lazy">\n            <div class="trending__meta">\n                <p class="trending__title">').concat(e,'</p> \n                <p class="trending__genres">').concat(p(i)," | ").concat(a.split("-")[0],'</p>\n      <span class="film-card__rating">\n      <div class="rating">\n        <div class="rating__body">\n          <div class="rating__active"></div>\n          <div class="rating__items">\n            <input\n              type="range"\n              min="0"\n              max="10"\n              class="rating__item"\n              value="').concat(o,'"\n              name="rating"\n            />\n          </div>\n        </div>\n      </div>\n    </span>\n</div>\n      </li>')}))}function r(n){var t=n.id,e=n.title,i=n.genre_ids,a=n.release_date,c=n.poster_path,o=n.vote_average,s=n.overview,r=n.vote_count,d=n.popularity,l=n.backdrop_path;return'<div class="upcoming__item">\n  <picture>\n  <source srcset="https://image.tmdb.org/t/p/original'.concat(c,'" media="(max-width: 767px)" sizes="(min-width: 480px)">\n  <source srcset="https://image.tmdb.org/t/p/original').concat(l,'" media="(min-width: 768px)" sizes="(min-width: 768px)">\n     <img class="upcoming__img" src=https://image.tmdb.org/t/p/original').concat(l,' alt="').concat(e,'" loading="lazy">\n  </picture>\n     <div class="upcoming__meta">\n<p class="upcoming__title">').concat(e,'</p>\n<div class="upcoming__div">\n<div class="upcoming__container">\n<p class="upcoming__info">Release Date</p>\n<p class="upcoming__info">Vote / Votes</p>\n<p class="upcoming__info">Popularity</p>\n<p class="upcoming__info">Genre(s)</p>\n</div>\n<div class="upcoming__container">\n<p class="upcoming__info upcoming__date">').concat(a.split("-").reverse().join("."),'</p>\n<p class="upcoming__info"><span class="vote-background">').concat(o,'</span> / <span class="vote-background">').concat(r,'</span></p>\n<p class="upcoming__info">').concat(d,'</p>\n<p class="upcoming__info">').concat(p(i),'</p>\n</div>\n</div>\n<p class="upcoming__about">ABOUT<p>\n<p class="upcoming__overview">').concat(s,'</p>\n<button type="button" class="btn" data-id="').concat(t,'" id="btn__upcoming">Remind me</button>\n     </div>\n    </div>')}function p(t){var e=n.genres.genres;return t.slice(0,2).map((function(n){return e.find((function(t){return t.id==n})).name})).join(", ")}function d(n){var t=document.getElementById("btn__upcoming").attributes["data-id"].value;(0,a.getMovieDetails)(t).then((function(n){localStorage.setItem(t,JSON.stringify(n))}))}(0,c.starRating)();document.querySelector("#btn__upcoming");(0,a.getGenres)().then((function(t){var e,i,c;n.genres=t,e=a.getWeekTrendingMovies,i=s,c=document.getElementById("trending"),e().then((function(n){c.innerHTML=i(n.results.slice(0,3)).join("")})),o(a.getUpcomingMovies,r)}))}();
//# sourceMappingURL=index.ab93dea3.js.map
