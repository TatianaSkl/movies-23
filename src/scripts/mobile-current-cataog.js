const mobileCurrentNav = document.querySelectorAll('.mobile-menu-nav__link');
console.log("🚀 ~ file: mobile-current-cataog.js:2 ~ mobileCurrentNav:", mobileCurrentNav)
changeCurrentPage();

function changeCurrentPage() {
  mobileCurrentNav[1].classList.add('current');

}
