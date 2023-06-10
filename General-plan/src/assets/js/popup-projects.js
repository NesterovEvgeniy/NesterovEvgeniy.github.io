/* popup-landscape-projects */

const buttons = document.querySelectorAll('.project__popup-btn');
const imageLinks = document.querySelectorAll('.project__img-link');
const popups = document.querySelectorAll('.popup__projects-wrapper');

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    popups[index].style.display = 'block';
  });
});

imageLinks.forEach((imageLink, index) => {
  imageLink.addEventListener('click', (event) => {
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



