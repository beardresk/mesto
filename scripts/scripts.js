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

let elementsCards = document.querySelector('.elements__cards'); 
let elementsTemplate = document.querySelector('.elements__template'); 
let popupPlaceImage = document.querySelector('.popup__place_image');
let btnPopupEdit = document.querySelector('.profile__edit'); 
let profileEditWindow = document.querySelector('.popup__place_profile'); 
let popupExit = document.querySelector('.popup__exit'); 
let nameProfile = document.querySelector('.profile__name'); 
let jobProfile = document.querySelector('.profile__profession'); 
let namePopup = document.querySelector('.popup__input_type_name'); 
let jobPopup = document.querySelector('.popup__input_type_job');
let popupForm = document.querySelector('.popup__form');
let btnPopupAdd = document.querySelector('.profile__add'); 
let profileAddWindow = document.querySelector('.popup_card'); 
let btnExit = profileAddWindow.querySelector('.popup__exit'); 
let inputTitleAdd = document.querySelector('.popup__input_type_title'); 
let inputLinkAdd = document.querySelector('.popup__input_type_link'); 
let popupSave = profileAddWindow.querySelector('.popup__save');

function render() {
  const cards = initialCards.map(getElement);
  elementsCards.prepend(...cards);
} 

function getElement(item) {
  let newCard = elementsTemplate.content.cloneNode(true); 
  let elementsTitle = newCard.querySelector('.elements__title'); 
  let elementsImage = newCard.querySelector('.elements__image'); 
  elementsTitle.textContent = item.name; 
  elementsImage.src = item.link;
  elementsImage.alt = item.name;

  let btnDeleteCard = newCard.querySelector('.element__delete'); 
  btnDeleteCard.addEventListener('click', deleteElementCard); 

  function deleteElementCard(evt) {
    let element = evt.target.closest('.elements__card'); 
    element.remove(); 
  }

  let likeButton = newCard.querySelector('.elements__like'); 
  function clickLikeElements(evt) {
    let element = evt.target.closest('.elements__card'); 
    let likeButtonActive = element.querySelector('.elements__like'); 
    likeButtonActive.classList.toggle('elements__like_active'); 
  }

  likeButton.addEventListener('click', clickLikeElements); 

  function openPopupFullImage(evt) {
    openPopup(popupPlaceImage);
    let element = evt.target.closest('.elements__card');
    let elementsImage = element.querySelector('.elements__image');
    let popupImage = popupPlaceImage.querySelector('.popup__image');
    let elementsTitle = element.querySelector('.elements__title');
    let popupHeading = popupPlaceImage.querySelector('.popup__heading');
  
    popupImage.src = elementsImage.src;
    popupImage.alt = elementsImage.alt;
    popupHeading.textContent = elementsTitle.textContent;
  }

  let btnExit = popupPlaceImage.querySelector('.popup__exit');
  elementsImage.addEventListener('click', openPopupFullImage);
  btnExit.addEventListener('click', function() {
  closePopup(popupPlaceImage);
  }); 

  return newCard;
} 

function addNewCard(evt) {
  evt.preventDefault();
  let inputTitle = document.querySelector('.popup__input_type_title').value;
  let inputLink = document.querySelector('.popup__input_type_link').value;
  let elementGet = getElement({name: inputTitle, link: inputLink});
  elementsCards.prepend(elementGet);
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
