/* popup work-area */

const buttons = document.querySelectorAll('.work__area-popup-btn');
const popups = document.querySelectorAll('.popup__area-wrapper');

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
});


