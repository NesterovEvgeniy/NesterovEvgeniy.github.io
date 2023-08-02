// burger-button

const menuBtn = document.querySelector('.header-mobile__btn');
const menuList = document.querySelector('.menu-mobile__list');

menuBtn.addEventListener('click', function () {
  menuList.classList.toggle('menu-mobile__list--active');
});

document.addEventListener('click', function (event) {
  const сlickInsideMenu = menuList.contains(event.target) || menuBtn.contains(event.target);

  if (!сlickInsideMenu) {
    menuList.classList.remove('menu-mobile__list--active');
  }
});
