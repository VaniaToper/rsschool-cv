const burgerButton = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const welcome = document.querySelector('.welcome');
const information = document.querySelector('.information');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');

const burgerClose = () => {
  document.body.classList.remove('lock');
  headerNav.classList.remove('active');
  burgerButton.classList.remove('burger__active');
};

burgerButton.addEventListener('click', () => {
  document.body.classList.toggle('lock');
  headerNav.classList.toggle('active');
  burgerButton.classList.toggle('burger__active');
});

welcome.addEventListener('click', () => {
  burgerClose();
});

information.addEventListener('click', () => {
  burgerClose();
});

skills.addEventListener('click', () => {
  burgerClose();
});

projects.addEventListener('click', () => {
  burgerClose();
});
