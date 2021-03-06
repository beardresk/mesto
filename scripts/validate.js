
const showErrorIn = (input, config) => {
  const errorNode = document.querySelector(`#${input.id}-error`);
  errorNode.textContent = input.validationMessage;
  errorNode.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
};

const hideErrorIn = (input, config) => {
  const errorNode = document.querySelector(`#${input.id}-error`);
  errorNode.textContent ='';
  errorNode.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
};

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputs = form.querySelectorAll(config.inputSelector);

  inputs.forEach((element) =>{
    element.addEventListener('input', (event) => handleFormInput(event, form, config));
  });
  
  form.addEventListener('submit', (event) => handleFormSubmit(event, form));
  
  toggleButton(form, config);
}

function toggleButton(form, config) {
  const button = document.querySelector(config.submitButtonSelector);
  button.disabled = !form.checkValidity();
 button.classList.toggle('popup__button_disabled', !form.checkValidity());
}

function handleFormSubmit(event, form) {
  event.preventDefault();
}

function handleFormInput(event, form, config) {
  const input = event.target;
  const errorNode = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    errorNode.textContent='';
  } else {
    errorNode.textContent = input.validationMessage;
  }
  toggleButton(form, config);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button', // кнопка 
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error', //красная линия у инпута
  errorClass: 'popup__error_visible'
}); 