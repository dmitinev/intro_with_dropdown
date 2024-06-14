import { testWebP as isWebPSupported } from './modules/testWebp.js';

isWebPSupported.then((result) => {
  const className = result ? 'webp' : 'no-webp';
  document.body.classList.add(className);
});

const navigationMenu = document.querySelector('.navigation');
const navigationMenuOpenBtn = document.querySelector('.page_header__menu');
const navigationMenuCloseBtn = document.querySelector('.navigation__closeIcon');
const subMenuGroup1 = document.querySelectorAll('[data-submenu="1"]');
const subMenuGroup2 = document.querySelectorAll('[data-submenu="2"]');

if (navigationMenuOpenBtn) {
  navigationMenuOpenBtn.addEventListener('click', () => {
    navigationMenu && navigationMenu.classList.add('navigation--active');
  });
}

if (navigationMenuCloseBtn) {
  navigationMenuCloseBtn.addEventListener('click', () => {
    navigationMenu && navigationMenu.classList.remove('navigation--active');
  });
}

if (subMenuGroup1.length > 0) {
  subMenuGroup1[0].addEventListener('click', () => {
    subMenuGroup1[1].classList.toggle('submenu--active');
  });
}

if (subMenuGroup2.length > 0) {
  subMenuGroup2[0].addEventListener('click', () => {
    subMenuGroup2[1].classList.toggle('submenu--active');
  });
}
