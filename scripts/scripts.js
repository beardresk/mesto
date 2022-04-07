let profilProfession = document.querySelector('.profile__profession');
let profilName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__name');
let popupProfession = document.querySelector('.popup__profession');
let popupEdit = document.querySelector('.profile__edit');
let popupExit = document.querySelector('.popup__exit');
let popup = document.querySelector('.popup');
let popupSave = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form');


function openPopup () { 
  popup.classList.add('popup_opened');
  popupName.textContent = profilName.value;
  popupProfession.textContent = profilProfession.value;
} 

function closePopup () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profilName.textContent = popupName.value;
  profilProfession.textContent = popupProfession.value;
  closePopup();
}

popupEdit.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
