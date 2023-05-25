import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Fotter";
import { useState } from 'react';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    item: {},
  });

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      item: {},
    })
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
        onClose={closeAllPopups}
      >
      </Main>
      <Footer />

      {/* //Попап Аватара */}

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        title="Обновить аватар"
        submit="Сохранить">

        <div className="popup__container">
          <input id="avatar-link" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на изображение" required />
          <span className="popup__input-error avatar-link-error"></span>
        </div>
      </PopupWithForm>

      {/* //Попап Профиля */}

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="edit"
        title="Редактировать профиль"
        submit="Сохранить">

          <input id="name-input" name="user_name" className="popup__input popup__input_type_name " type="text"
            placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>

          <input id="bio-input" name="biography" className="popup__input popup__input_type_description" type="text"
            placeholder="О тебе" required minLength="2" maxLength="200" />
          <span className="popup__input-error bio-input-error ">Необходимо заполнить пол</span>

      </PopupWithForm>

      {/* //Попап Карточки */}

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add"
        title="Новое место"
        submit="Создать">

        <div className="popup__container">
          <input id="name-card" name="name" className="popup__input popup__input_type_title" type="text"
            placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__input-error name-card-error popup__input-error_active"></span>
        </div>

        <div className="popup__container">
          <input id="link-card" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-card-error"></span>
        </div>

      </PopupWithForm>
    {/* //Попап Картинки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups}>
      </ImagePopup>
    </>
  );
}
export default App;