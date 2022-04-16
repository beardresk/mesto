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

let elementsCards = document.querySelector('.elements__cards'); // ul элемент секции
let elementsTemplate = document.querySelector('.elements__template'); // обращаюсь к самому темплейт
let elemen = document.querySelector('.elements');
let popupPlaceImage = document.querySelector('.popup__place_image');

function render() {
  const cards = initialCards.map(getElement);
  elementsCards.prepend(...cards);
} 

function getElement(item) {
  let newCard = elementsTemplate.content.cloneNode(true); // клонируем содержимое темплейт
  let elementsTitle = newCard.querySelector('.elements__title'); // находим в темплейт тайтл
  let elementsImage = newCard.querySelector('.elements__image'); // находим в темплейт изображение
  elementsTitle.textContent = item.name; // получаем  
  elementsImage.src = item.link;
  elementsImage.alt = item.name;

  let elementDelete = newCard.querySelector('.element__delete'); // находим кнопку удаления у темпл.
  elementDelete.addEventListener('click', deleteElementCard); // навешиваем на нее слушитель 

  function deleteElementCard(evt) {
    let element = evt.target.closest('.elements__card'); // содержит элемент на котором произошло событие + возвращает ближайший элмент
    element.remove(); // удаляет элемент
  }

  let likeButton = newCard.querySelector('.elements__like'); // находим кнопку лайка в темплейт

  function handleLikeElements(evt) {
    let element = evt.target.closest('.elements__card'); // содержит элемент на котором произошло событие + возвращает ближайший элмент
    let likeButtonActive = element.querySelector('.elements__like'); // нашли в темплейт кнопку лайка
    likeButtonActive.classList.toggle('elements__like_active'); // добавили активное состояние лайка
  }

  likeButton.addEventListener('click', handleLikeElements); //нажали на кнопку лайка




  function openPopupFullImage(evt) {
    openPopup(popupPlaceImage);
    let element = evt.target.closest('.elements__card');
    let elementsImage = element.querySelector('.elements__image');
    let popupImage = popupPlaceImage.querySelector('.popup__image');
    let elementsTitle = element.querySelector('.elements__title');
    let popupHead = popupPlaceImage.querySelector('.popup__head'); // подпись к карточке
  

    popupImage.src = elementsImage.src;
    popupImage.alt = elementsImage.alt;
    popupHead.textContent = elementsTitle.textContent;
  }
  let btnExitAdd = popupPlaceImage.querySelector('.popup__exit');
  elementsImage.addEventListener('click', openPopupFullImage);
  btnExitAdd.addEventListener('click', function() {
  closePopup(popupPlaceImage);
});

  return newCard;
} 

// let popupPlaceImage = document.querySelector('.popup__place_image'); //нашли див попапа с изображением на весь экран

render();


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
 }


// НАЧАЛО попап редактирования профиля

let btnPopupEdit = document.querySelector('.profile__edit'); // кнопка редактирования
let profileEditWindow = document.querySelector('.popup_place_profile'); // окно попапа ред проф
let popupExit = document.querySelector('.popup__exit'); // крестик - закрытия попапа
let nameProfile = document.querySelector('.profile__name'); // берём имя профиля жак ив кусто
let jobProfile = document.querySelector('.profile__profession'); // берём проффесию из профиля
let namePopup = document.querySelector('.popup__input_type_name'); // инпут попапа имя профиля
let jobPopup = document.querySelector('.popup__input_type_job'); // инпут попапа проффесия профиля
let popupForm = document.querySelector('.popup__form'); // тег form из самого попап 



btnPopupEdit.addEventListener('click', function() {  //открываем попап
  openPopup(profileEditWindow);

});

popupExit.addEventListener('click', function() { //закрываем попап на крестик
  closePopup(profileEditWindow);
});

function formSubmitHandleEdit(evt) { // получаем значения профиля в инпуты попап
  evt.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  closePopup(profileEditWindow);
}

btnPopupEdit.addEventListener('click', function() { // открываем попап редактирования профиля
  openPopup(profileEditWindow);
  namePopup.value = nameProfile.textContent;
  jobPopup.value = jobProfile.textContent;
});

popupForm.addEventListener('submit', formSubmitHandleEdit); 

// КОНЕЦ попап редактирования профиля

//НИЖЕ ПЕРЕМЕННЫЕ ДОБАВЛЕНИЯ КАРТОЧКИ
let btnPopupAdd = document.querySelector('.profile__add'); // кнопка + добавления фото-карточки
let profileAddWindow = document.querySelector('.popup_place_card'); //окно попапа добавления карточки
let btnExitAdd = profileAddWindow.querySelector('.popup__exit'); // кнопка выхода из добавлентя карточки
let inputTitleAdd = document.querySelector('.popup__input_type_title'); // данные попапа название картинки
let inputLinkAdd = document.querySelector('.popup__input_type_link'); // данные попапа ссылка на картинку
let popupAddSave = profileAddWindow.querySelector('.popup__save');


btnPopupAdd.addEventListener('click', function() {
  openPopup(profileAddWindow);
});

btnExitAdd.addEventListener('click', function() {
  closePopup(profileAddWindow);
});



// LIKE

