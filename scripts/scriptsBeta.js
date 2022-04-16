let profilProfession = document.querySelector('.profile__profession');
let profilName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__input_type_name');
let popupProfession = document.querySelector('.popup__input_type_job');
let popupEdit = document.querySelector('.profile__edit');
let popupExit = document.querySelector('.popup__exit');
let popupSave = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form');
let elementsCards = document.querySelector('.elements__cards'); // получаем ul 
let template = document.querySelector('.elements__template'); // получаем содержимое темплейт
let popupPlaceProfile = document.querySelector('.popup_place_profile');
let popupPlaceCard = document.querySelector('.popup_place_card');
let profileAdd = document.querySelector('.profile__add');


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

profileAdd.addEventListener('click', function() {
  openPopup(popupPlaceCard);
});

popupExit.addEventListener('click', function() {
  closePopup(popupPlaceCard);
});



popupExit.addEventListener('click', function() {
  closePopup(popupPlaceProfile);
});



function openPopup(popup) { 
  popup.classList.add('popup_opened');
} 

function closePopup (popup) {
  popup.classList.remove('popup_opened');
 }

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  profilName.textContent = popupName.value;
  profilProfession.textContent = popupProfession.value;
  closePopup(popupPlaceProfile);
}

popupEdit.addEventListener('click', function() {
  openPopup(popupPlaceProfile);
  popupName.value = profilName.textContent;
  popupProfession.value = profilProfession.textContent;
});

popupForm.addEventListener('submit', formSubmitHandlerEdit); 



