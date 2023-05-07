let switchTheme = () => {
  let mainEl = document.documentElement;
  let dataTheme = mainEl.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  mainEl.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
};

document
  .querySelector('#theme-switcher')
  .addEventListener('click', switchTheme);
