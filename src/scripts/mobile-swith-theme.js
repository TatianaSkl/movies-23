const switchBtnMobile = document.querySelector('.switch-theme-button__mobile');
const bodyEL = document.body;

function changeTheme() {
  if (bodyEL.classList.contains('light')) {
    bodyEL.classList.remove('light');
    localStorage.removeItem('site-theme');
  } else {
    bodyEL.classList.add('light');
    localStorage.setItem('site-theme', 'light');
  }
}

switchBtnMobile.addEventListener('click', changeTheme);

const currentTheme = localStorage.getItem('site-theme');

if (currentTheme) {
  bodyEL.classList.add(currentTheme);
}
