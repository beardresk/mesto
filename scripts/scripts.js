const initialCards = [
  {
    name: 'Исаакиевский собор',
    link: 'https://images.unsplash.com/photo-1555460285-763ba96917d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Архитектура',
    link: 'https://images.unsplash.com/photo-1592029328294-dd71c43655c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Казанский собор',
    link: 'https://images.unsplash.com/photo-1551005756-fd0657e8fbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Елисеевский проспект',
    link: 'https://images.unsplash.com/photo-1550643749-d9add3db05e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Статуя князю',
    link: 'https://images.unsplash.com/photo-1555460285-041a4924bba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Колонны',
    link: 'https://images.unsplash.com/photo-1551270029-4bc0f7eabf78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
  }
];

const elementsCards = document.querySelector('.elements__cards'); 
const elementsTemplate = document.querySelector('.elements__template'); 
const popupPlaceImage = document.querySelector('.popup_image');
const btnPopupEdit = document.querySelector('.profile__edit'); 
const profileEditWindow = document.querySelector('.popup_profile'); 
const popupExit = document.querySelector('.popup__exit'); 
const nameProfile = document.querySelector('.profile__name'); 
const jobProfile = document.querySelector('.profile__profession'); 
const namePopup = document.querySelector('.popup__input_type_name'); 
const jobPopup = document.querySelector('.popup__input_type_job');
const popupForm = document.querySelector('.popup__form');
const btnPopupAdd = document.querySelector('.profile__add'); 
const profileAddWindow = document.querySelector('.popup_cards'); 
const btnExit = profileAddWindow.querySelector('.popup__exit'); 
const inputTitleAdd = document.querySelector('.popup__input_type_title'); 
const inputLinkAdd = document.querySelector('.popup__input_type_link'); 
const popupSave = profileAddWindow.querySelector('.popup__save');

function render() {
  const cards = initialCards.map(getElement);
  elementsCards.prepend(...cards);
} 

function getElement(item) {
  const newCard = elementsTemplate.content.cloneNode(true); 
  const elementTitle = newCard.querySelector('.elements__title'); 
  const elementImage = newCard.querySelector('.elements__image'); 
  elementTitle.textContent = item.name; 
  elementImage.src = item.link;
  elementImage.alt = item.name;

  const btnDeleteCard = newCard.querySelector('.element__delete'); 
  btnDeleteCard.addEventListener('click', deleteElementCard); 

  function deleteElementCard(evt) {
    const element = evt.target.closest('.elements__card'); 
    element.remove(); 
  }

  const likeButton = newCard.querySelector('.elements__like'); 
  function clickLikeElements(evt) {
    const element = evt.target.closest('.elements__card'); 
    const likeButtonActive = element.querySelector('.elements__like'); 
    likeButtonActive.classList.toggle('elements__like_active'); 
  }

  likeButton.addEventListener('click', clickLikeElements); 

  function openPopupFullImage(evt) {
    openPopup(popupPlaceImage);
    const element = evt.target.closest('.elements__card');
    const elementImage = element.querySelector('.elements__image');
    const popupImage = popupPlaceImage.querySelector('.popup__image');
    const elementTitle = element.querySelector('.elements__title');
    const popupHeading = popupPlaceImage.querySelector('.popup__heading');
  
    popupImage.src = elementImage.src;
    popupImage.alt = elementImage.alt;
    popupHeading.textContent = elementTitle.textContent;
  }

  const btnExit = popupPlaceImage.querySelector('.popup__exit');
  elementImage.addEventListener('click', openPopupFullImage);
  btnExit.addEventListener('click', function() {
  closePopup(popupPlaceImage);
  }); 

  return newCard;
} 

function addNewCard(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector('.popup__input_type_title').value;
  const inputLink = document.querySelector('.popup__input_type_link').value;
  const elementGet = getElement({name: inputTitle, link: inputLink});
  elementsCards.prepend(elementGet);
  document.getElementById("popupForm").reset();
  closePopup(profileAddWindow);
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function formSubmitHandleEdit(evt) {
  evt.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  closePopup(profileEditWindow);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
 }

btnPopupEdit.addEventListener('click', function() {  
  openPopup(profileEditWindow);

});

popupExit.addEventListener('click', function() { 
  closePopup(profileEditWindow);
});


btnPopupEdit.addEventListener('click', function() { 
  openPopup(profileEditWindow);
  namePopup.value = nameProfile.textContent;
  jobPopup.value = jobProfile.textContent;
});

popupForm.addEventListener('submit', formSubmitHandleEdit); 

btnPopupAdd.addEventListener('click', function() {
  openPopup(profileAddWindow);
});

btnExit.addEventListener('click', function() {
  closePopup(profileAddWindow);
});

popupSave.addEventListener('click', addNewCard);

render();