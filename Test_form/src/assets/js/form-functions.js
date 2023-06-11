/* form-functions */

/* name-mask */
const nameInput = document.querySelector('.form__person-name');

nameInput.addEventListener('input', function(event) {
  const inputValue = event.target.value;
  const latinOnlyValue = inputValue.replace(/[^a-zA-Z]/g, '');
  event.target.value = latinOnlyValue;
});

/* telephone-mask */
const inputTel = document.querySelector('input[type="tel"]');
Inputmask({
  mask: "+7 (9 9 9) 9 9 9 - 9 9 - 9 9",
  showMaskOnHover: true
}).mask(inputTel);


/* email-mask */
const emailInput = document.querySelector('.form__person-email');
Inputmask({
  mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
  greedy: false,
  clearIncomplete: true,
  onBeforePaste: function (pastedValue, opts) {
    pastedValue = pastedValue.toLowerCase();
    return pastedValue.replace("mailto:", "");
  },
  definitions: {
    '*': {
      validator: "[0-9A-Za-z-_]",
      casing: "lower"
    }
  }
}).mask(emailInput);


/* btn-submit-activate */
const popupApplicationFormBtn = document.querySelector('.application-btn');
const popupApplicationForm = document.querySelector('.application-form');
const colorDecor = getComputedStyle(document.documentElement).getPropertyValue('--color-decor');  

form.onchange = function () {
  const button = document.body.getElementsByClassName('application-btn')[0];
  if (button.disabled) {
    button.disabled = false;
    popupApplicationFormBtn.style.background = colorDecor;
    popupApplicationFormBtn.style.border = 'none';
    popupApplicationFormBtn.classList.add('application-btn--active');

  } else {
    button.disabled = true;
    popupApplicationFormBtn.style.background = "#2a2a2a";
    popupApplicationFormBtn.style.scale = "99%";
    popupApplicationFormBtn.classList.remove('application-btn--active');
  }

  popupApplicationForm.addEventListener ('submit', handleFormSubmit);
  function handleFormSubmit(event) {
  event.preventDefault();
  }
}


