const cardsContainer = document.querySelector('.elements__cards'); 
const elementTemplate = document.querySelector('.elements__template'); 
const popupPlaceImage = document.querySelector('.popup_review');
const btnPopupEdit = document.querySelector('.profile__edit'); 
const profileEditWindow = document.querySelector('.popup_profile'); 
const popupExit = document.querySelector('.popup__exit'); 
const nameProfile = document.querySelector('.profile__name'); 
const jobProfile = document.querySelector('.profile__profession'); 
const namePopup = document.querySelector('.popup__input_type_name'); 
const jobPopup = document.querySelector('.popup__input_type_job');
const profileEditForm = document.querySelector('.popup__form');
const btnPopupAdd = document.querySelector('.profile__add'); 
const profileAddWindow = document.querySelector('.popup_cards'); 
const btnExit = profileAddWindow.querySelector('.popup__exit'); 
const inputTitleAdd = document.querySelector('.popup__input_type_title'); 
const inputLinkAdd = document.querySelector('.popup__input_type_link'); 
const popupSave = profileAddWindow.querySelector('.popup__save');
const popupImage = popupPlaceImage.querySelector('.popup__image');
const popupHeading = popupPlaceImage.querySelector('.popup__heading');
const popupFormCard = document.querySelector('.popup__form_card');


function render() {
  const cards = initialCards.map(getElement);
  cardsContainer.prepend(...cards);
} 

function getElement(item) {
  const newCard = elementTemplate.content.cloneNode(true); 
  const elementTitle = newCard.querySelector('.elements__title'); 
  const elementImage = newCard.querySelector('.elements__image'); 
  elementTitle.textContent = item.name; 
  elementImage.src = item.link;
  elementImage.alt = item.name;

  const btnDeleteCard = newCard.querySelector('.element__delete'); 
  btnDeleteCard.addEventListener('click', deleteElementCard); 

  const likeButton = newCard.querySelector('.elements__like'); 

  likeButton.addEventListener('click', clickLikeElement); 

  function openPopupFullImage(evt) {
    openPopup(popupPlaceImage);
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupHeading.textContent = evt.target.alt;
  } 

  elementImage.addEventListener('click', openPopupFullImage);

  return newCard;
} 


const btnExitImage = popupPlaceImage.querySelector('.popup__exit');
btnExitImage.addEventListener('click', function() {
  closePopup(popupPlaceImage);
  }); 


function clickLikeElement(evt) {
  evt.target.classList.toggle('elements__like_active');
}

function deleteElementCard(evt) {
  const element = evt.target.closest('.elements__card'); 
  element.remove(); 
}

function addNewCard(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector('.popup__input_type_title').value;
  const inputLink = document.querySelector('.popup__input_type_link').value;
  const elementGet = getElement({name: inputTitle, link: inputLink});
  cardsContainer.prepend(elementGet);
  document.getElementById("popupForm").reset();
  closePopup(profileAddWindow);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  closePopup(profileEditWindow);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEcsClosePopup);
  document.addEventListener('click', handleCloseOverlay);
}


function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener('keydown', handleEcsClosePopup);
  document.addEventListener('click', handleCloseOverlay);
 }

  btnPopupEdit.addEventListener('click', function() {  
  openPopup(profileEditWindow);
});

function handleEcsClosePopup (evt) {
 const openPopupWin = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && openPopupWin !== null) {
    closePopup(openPopupWin);
  }
}

function handleCloseOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

popupExit.addEventListener('click', function() { 
  closePopup(profileEditWindow);
});


btnPopupEdit.addEventListener('click', function() { 
  openPopup(profileEditWindow);
  namePopup.value = nameProfile.textContent;
  jobPopup.value = jobProfile.textContent;
});


profileEditForm.addEventListener('submit', handleProfileFormSubmit); 

btnPopupAdd.addEventListener('click', function() {
  openPopup(profileAddWindow);
});

btnExit.addEventListener('click', function() {
  closePopup(profileAddWindow);
});

popupFormCard.addEventListener('submit', addNewCard);

render();