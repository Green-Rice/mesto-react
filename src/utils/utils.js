const formsConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  }
  const token = 'd241e5f6-5dd3-4846-a8da-a823500c9f8c'
  const baseUrl ='https://mesto.nomoreparties.co/v1/cohort-64'

  // Popups
  const profilePopupContainer = document.querySelector(".popup_type_edit"); //Попап Редактирования
  const popupContainerCard = document.querySelector(".popup_type_add"); //Попап добавление карточки
  const popupSelector = '.popup_type_review'; //  Попап широкоформатной карточки
  const popupChangesAvatar = document.querySelector(".popup_type_update-avatar");//Попап изменения аватарки

  //Popup open button
  const popupEditOpen = document.querySelector(".profile__edit-button");//Кнопка Редакт. проф
  const buttonOpenAddCardPopup = document.querySelector(".profile__add-button"); //Кнопка add card
  const buttonOpenAvatar = document.querySelector(".profile__avatar-changes")//Кнопка changes ava

  // Инпуты попап профиля
  const inputProfileName = document.querySelector('.popup__input_type_name');
  const inputProfileBio = document.querySelector('.popup__input_type_description');

  // Селекторы
  const contenerCards = '.elements';
  const nameSelector = '.profile__user-name'
  const infoSelector = '.profile__description'
  const avatarSelector = '.profile__img'

  export {
    formsConfig,
    infoSelector,
    nameSelector,
    contenerCards,
    popupSelector,
    avatarSelector,
    inputProfileBio,
    inputProfileName,
    popupContainerCard,
    buttonOpenAddCardPopup,
    profilePopupContainer,
    popupEditOpen,
    popupChangesAvatar,
    buttonOpenAvatar,
    token,
    baseUrl
  };
