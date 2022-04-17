const initialCards = [
  {
    name: 'Тянем лапку вверх',
    link: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Сосредоточен',
    link: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Бабочка',
    link: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Хочу спать',
    link: 'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80'
  },
  {
    name: 'Тихий час',
    link: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'В моменте',
    link: 'https://images.unsplash.com/photo-1595752776689-aebef37b5d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

let elementsCards = document.querySelector('.elements__cards'); 
let elementsTemplate = document.querySelector('.elements__template'); 
let popupPlaceImage = document.querySelector('.popup__place_image');
let btnPopupEdit = document.querySelector('.profile__edit'); 
let profileEditWindow = document.querySelector('.popup_place_profile'); 
let popupExit = document.querySelector('.popup__exit'); 
let nameProfile = document.querySelector('.profile__name'); 
let jobProfile = document.querySelector('.profile__profession'); 
let namePopup = document.querySelector('.popup__input_type_name'); 
let jobPopup = document.querySelector('.popup__input_type_job');
let popupForm = document.querySelector('.popup__form');
let btnPopupAdd = document.querySelector('.profile__add'); 
let profileAddWindow = document.querySelector('.popup_place_card'); 
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

  let elementDelete = newCard.querySelector('.element__delete'); 
  elementDelete.addEventListener('click', deleteElementCard); 

  function deleteElementCard(evt) {
    let element = evt.target.closest('.elements__card'); 
    element.remove(); 
  }

  let likeButton = newCard.querySelector('.elements__like'); 
  function handleLikeElements(evt) {
    let element = evt.target.closest('.elements__card'); 
    let likeButtonActive = element.querySelector('.elements__like'); 
    likeButtonActive.classList.toggle('elements__like_active'); 
  }

  likeButton.addEventListener('click', handleLikeElements); 

  function openPopupFullImage(evt) {
    openPopup(popupPlaceImage);
    let element = evt.target.closest('.elements__card');
    let elementsImage = element.querySelector('.elements__image');
    let popupImage = popupPlaceImage.querySelector('.popup__image');
    let elementsTitle = element.querySelector('.elements__title');
    let popupHead = popupPlaceImage.querySelector('.popup__head');
  
    popupImage.src = elementsImage.src;
    popupImage.alt = elementsImage.alt;
    popupHead.textContent = elementsTitle.textContent;
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
  let elementQ = getElement({name: inputTitle, link: inputLink});
  elementsCards.prepend(elementQ);
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
