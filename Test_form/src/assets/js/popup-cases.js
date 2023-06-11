/* popup cases */

/* const buttons = document.querySelectorAll('.work__cases-popup-btn');
const popups = document.querySelectorAll('.popup__cases-wrapper');

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    popups[index].style.display = 'block';
  });
});

popups.forEach((popup) => {
  const closeBtn = popup.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  const popupWorkAreaForm = popup.querySelector('.js-form');
  document.addEventListener('click', (event) => {
    if (!popupWorkAreaForm.contains(event.target)) {
      popup.style.display = 'none';
    }
  });
}); */

const buttons = document.querySelectorAll('.work__cases-popup-btn');
const popups = document.querySelectorAll('.popup__cases-wrapper');
const images = document.querySelectorAll('.case-popup-link');

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    popups[index].style.display = 'block';
  });
});

images.forEach((image, index) => {
  image.addEventListener('click', (event) => {
    event.stopPropagation();
    popups[index].style.display = 'block';
  });
});

popups.forEach((popup) => {
  const closeBtn = popup.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  const popupWorkAreaForm = popup.querySelector('.js-form');
  document.addEventListener('click', (event) => {
    if (!popupWorkAreaForm.contains(event.target)) {
      popup.style.display = 'none';
    }
  });
});



