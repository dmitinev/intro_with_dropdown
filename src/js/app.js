import { testWebP as isWebPSupported } from './modules/testWebp.js';

isWebPSupported.then((result) => {
  const className = result ? 'webp' : 'no-webp';
  document.body.classList.add(className);
});

const navigationMenu = document.querySelector('.navigation');
const navigationMenuOpenBtn = document.querySelector('.page_header__menu');
const navigationMenuCloseBtn = document.querySelector('.navigation__closeIcon');

if (navigationMenuOpenBtn) {
  navigationMenuOpenBtn.addEventListener('click', () => {
    navigationMenu && navigationMenu.classList.add('navigation--active');
  });
}

if (navigationMenuCloseBtn) {
  navigationMenuCloseBtn.addEventListener('click', () => {
    navigationMenu.classList.remove('navigation--active');
  });
}
