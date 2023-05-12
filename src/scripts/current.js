const navLinks = document.querySelectorAll('.site-nav__link');

const homeLink = document.querySelector('.site-nav__link[href="./index.html"]');
if (homeLink) {
  homeLink.classList.add('current');
}

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('current');
  } else {
    link.classList.remove('current');
  }
});
