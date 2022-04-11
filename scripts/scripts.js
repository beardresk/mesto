
"use strict"

let profilProfession = document.querySelector('.profile__profession');
let profilName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__input_type_name');
let popupProfession = document.querySelector('.popup__input_type_job');
let popupEdit = document.querySelector('.profile__edit');
let popupExit = document.querySelector('.popup__exit');
let popup = document.querySelector('.popup');
let popupSave = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form');
let elementsCards = document.querySelector('.elements__cards'); // получаем ul 
let template = document.querySelector('.elements__template'); // получаем содержимое темплейт



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function render() {
  const html = initialCards.map(getElement);
  elementsCards.append(...html);
}

function getElement(item) {
  const newItem = template.content.cloneNode(true);
  const elementsTitle = newItem.querySelector('.elements__title');
  const elementsImages = newItem.querySelector('.elements__image');
  elementsTitle.textContent = item.name;
  elementsImages.setAttribute('src',`${item.link}`);
  elementsImages.setAttribute('alt',`${item.name}`);
  return newItem;
}

render();


function openPopup () { 
  popup.classList.add('popup_opened');
  popupName.value = profilName.textContent;
  popupProfession.value = profilProfession.textContent;
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
