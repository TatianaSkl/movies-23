let switchDarkLight = () => {
  let switcherEl = document.documentElement;
  let dataTheme = switcherEl.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  switcherEl.setAttribute('data-theme', newTheme); 

  localStorage.setItem('theme', newTheme);
};

document
  .querySelector('#theme-switcher')
  .addEventListener('click', switchDarkLight);
