const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');

menu.addEventListener('click', () => {
  // hamburger.classList.toggle('hidden');
});

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.querySelectorAll('.change-color')[0].classList.toggle('!bg-white');
  hamburger.querySelectorAll('.change-color')[1].classList.toggle('!bg-white');
  hamburger.querySelectorAll('.change-color')[2].classList.toggle('!bg-white');
});
